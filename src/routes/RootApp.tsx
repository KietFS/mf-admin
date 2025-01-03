import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import MainLayout from '@/components/MainLayout';
import Spinner from '@/components/Spinner';

// Lazy load components
const DashBoard = lazy(() => import('@/pages/DashBoard'));
const ProductManagement = lazy(() => import('@/pages/ProductManagement'));
const LoginPage = lazy(() => import('@/pages/Auth/Login'));
const CategoryMangement = lazy(() => import('@/pages/CategoryManagement'));
const StoreMangement = lazy(() => import('@/pages/StoreManagement'));
const TenantManagement = lazy(() => import('@/pages/TenantMangement'));
const OrdersManagement = lazy(() => import('@/pages/OrdersManagement'));
const UserManagement = lazy(() => import('@/pages/UserManagement'));
const CmsManagement = lazy(() => import('@/pages/CmsManagement'));
const FeeManagement = lazy(() => import('@/pages/FeeManagement'));
const PromotionManagement = lazy(() => import('@/pages/PromotionMangement'));

export default function RootApp() {
  const { accessToken, user } = useAuth();

  const renderAdminRoutes = () => {
    return (
      <>
        <Route path="/home" component={DashBoard} />
        <Route path="/user-management" component={UserManagement} />
        <Route path="/orders-management" component={OrdersManagement} />
        <Route path="/settings/cms-management" component={CmsManagement} />
        <Route path="/settings/fee-management" component={FeeManagement} />
        <Route path="/category-management" component={CategoryMangement} />
        <Route path="/products-management" component={ProductManagement} />
        <Route path="/store-management" component={StoreMangement} />
        <Route path="/tenant-management" component={TenantManagement} />
        <Route path="/promotions-management" component={PromotionManagement} />
      </>
    );
  };

  const renderStaffRoutes = () => {
    return (
      <>
        <Route path="/home" component={DashBoard} />
        <Route path="/user-management" component={UserManagement} />
        <Route path="/products-management" component={ProductManagement} />
        <Route path="/orders-management" component={OrdersManagement} />
      </>
    );
  };

  return (
    <Suspense
      fallback={
        <MainLayout
          title=""
          content={
            <div className="flex h-full w-full items-center justify-center">
              <Spinner />
            </div>
          }
        />
      }
    >
      <Switch>
        <Route
          path="/"
          exact
          render={() => (!accessToken ? <Redirect to="/login" /> : <Redirect to="/home" />)}
        />
        <Route path="/login" component={LoginPage} />
        {user?.role === 'admin' ? renderAdminRoutes() : renderStaffRoutes()}
      </Switch>
    </Suspense>
  );
}
