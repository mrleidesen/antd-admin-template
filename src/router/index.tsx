import type { ReactNode } from 'react';

import { Result, Spin } from 'antd';
import { lazy } from 'react';

import { Suspense } from 'react';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useRouteError,
} from 'react-router-dom';

import { LayoutContainer } from '@/components/Layout';

import NotFoundView from '@/views/404';
import HomeView from '@/views/HomeView';
import LoginView from '@/views/LoginView';

const UsersView = lazy(() => import('@/views/UsersView'));

const LazyContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[50vh] flex justify-center items-center">
          <Spin />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

const ErrorBoundary = () => {
  const error: any = useRouteError();

  console.error(error);

  return (
    <div className="w-full h-[50vh] flex justify-center items-center">
      <Result
        status="error"
        title="出错啦"
        subTitle="页面出现错误，请检查数据是否异常"
        style={{ width: 700 }}
      >
        <div>{String(error?.message)}</div>
      </Result>
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<LayoutContainer />}
        children={
          <>
            <Route path="" element={<HomeView />} />
            <Route
              path="users"
              element={
                <LazyContainer>
                  <UsersView />
                </LazyContainer>
              }
            />
            <Route path="*" element={<NotFoundView />} />
          </>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route path="/login" element={<LoginView />} />
      <Route path="*" element={<Navigate to="/" />} />
    </>
  )
);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
