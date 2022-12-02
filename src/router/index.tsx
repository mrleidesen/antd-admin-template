import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import HomeView from '@/views/HomeView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeView />} />
    </>
  )
);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
