import { createBrowserRouter } from 'react-router-dom';
import Layout from './organisms/Layout/Layout.tsx';
import Home from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

export default router;
