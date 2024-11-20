import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ITEM_HEIGHT = 48;

interface IActionMenuProps {
  option: {
    id: string;
    actionLabel: string;
    onClick: () => void;
    onActionSuccess: () => void;
  };

  onViewDetail: () => void;
}

const OrderActionMenu: React.FC<IActionMenuProps> = ({ option, onViewDetail }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 'fit-content',
          },
        }}
      >
        <MenuItem
          key={option?.id}
          onClick={() => {
            option.onClick();
            handleClose();
          }}
        >
          {option?.actionLabel}
        </MenuItem>

        <MenuItem
          key={option?.id}
          onClick={() => {
            handleClose();
            onViewDetail();
          }}
        >
          Xem chi tiết
        </MenuItem>
      </Menu>
    </div>
  );
};

export default OrderActionMenu;
