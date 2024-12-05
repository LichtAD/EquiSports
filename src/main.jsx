import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/layout/Root';
import Home from './components/layout/Home';
import AllEquipment from './components/pages/AllEquipment';
import AddEquipment from './components/pages/AddEquipment';
import EquipmentList from './components/pages/EquipmentList';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import SingleEquipment from './components/pages/SingleEquipment';
import AuthProvider from './components/provider/AuthProvider';
import PrivateRoute from './PrivateRoute';
import UpdateMyEquipment from './components/pages/UpdateMyEquipment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>There was an error</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allEquipment",
        element: <AllEquipment></AllEquipment>,
        loader: async () => fetch('http://localhost:5000/equisports'),
      },
      {
        path: "/allEquipment/:id",
        element: <PrivateRoute>
          <SingleEquipment></SingleEquipment>
        </PrivateRoute>,
        loader: async ({ params }) => fetch(`http://localhost:5000/equisports/${params.id}`),
      },
      {
        path: "/addEquipment",
        element: <PrivateRoute>
          <AddEquipment></AddEquipment>
        </PrivateRoute>,
      },
      {
        path: "/equipmentList",
        element: <PrivateRoute>
          <EquipmentList></EquipmentList>
        </PrivateRoute>,
        loader: async () => fetch('http://localhost:5000/equisports'),
      },
      {
        path: "/equipmentList/:id",
        element: <PrivateRoute>
          <UpdateMyEquipment></UpdateMyEquipment>
        </PrivateRoute>,
        loader: async ({ params }) => fetch(`http://localhost:5000/equisports/${params.id}`),
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
