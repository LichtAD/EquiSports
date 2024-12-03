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
      },
      {
        path: "/addEquipment",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "/equipmentList",
        element: <EquipmentList></EquipmentList>,
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
    <RouterProvider router={router} />
  </StrictMode>,
)
