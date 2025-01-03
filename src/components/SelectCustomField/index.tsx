import React, { ReactNode, useRef } from 'react';
import { Select, MenuItem } from '@mui/material';

interface ISelectCustomFieldProps {
  name: string;
  label: string;
  placeholder: string;
  options: string[];
  optionSelected: string;
  onSelect: (option: string) => void;
  renderOption?: (item: string[]) => ReactNode;
  error?: string;
  customStyles?: React.CSSProperties;
}

const SelectCustomFieldComponent: React.FC<ISelectCustomFieldProps> = (props) => {
  const ref = useRef();
  const {
    name,
    label,
    placeholder = '',
    options,
    optionSelected,
    onSelect,
    renderOption,
    error = '',
  } = props;

  return (
    <div className="flex flex-col gap-y-1">
      <p className="mb-1 mr-1 text-sm font-bold text-gray-600">{label}</p>
      <div className="max-h-[200px]">
        <Select
          MenuProps={{
            style: {
              maxHeight: 400,
            },
          }}
          ref={ref}
          name={name}
          placeholder={placeholder}
          value={optionSelected}
          style={{
            width: '100%',
            height: 40,
            borderWidth: 0,
            borderColor: 'transparent',
            background: '#f3f4f6',
            borderRadius: 7,
            maxHeight: '200px',
            ...props.customStyles,
          }}
          renderValue={(value) => (
            <div className="flex h-full items-center">
              <p className="items-center text-sm text-gray-900">{value}</p>
            </div>
          )}
          sx={{
            boxShadow: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 0 },
            height: '40px',
            maxHeight: '200px',
          }}
        >
          {renderOption
            ? renderOption(options)
            : options?.map((option, index) => (
                <MenuItem value={option} onClick={() => onSelect(option)} key={index.toString()}>
                  {option}
                </MenuItem>
              ))}
        </Select>
      </div>
      {error && <p className="mt-1 text-xs font-semibold text-red-500">{error}</p>}
    </div>
  );
};

export default SelectCustomFieldComponent;
