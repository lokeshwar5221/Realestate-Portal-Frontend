import {
  Routes,
  Route
} from "react-router-dom";

import Home from "../pages/Home";
import Properties from "../pages/Properties";
import PropertyDetails
  from "../pages/PropertyDetails";
import AddProperty
  from "../pages/AddProperty";
import EditProperty
 from "../pages/EditProperty";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Wishlist from "../pages/Wishlist";

function AppRoutes() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/properties"
        element={<Properties />}
      />

      <Route
        path="/properties/:id"
        element={<PropertyDetails />}
      />
      <Route
        path="/add-property"
        element={
          <ProtectedRoute>
            <AddProperty />
          </ProtectedRoute>
        }
      />     
      <Route
        path="/edit-property/:id"
        element={<ProtectedRoute>
                  <EditProperty />
                  </ProtectedRoute>
                }
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/logout"
        element={<Logout />}
      />
      <Route
        path="/wishlist"
        element={<Wishlist />}
      />
    </Routes>

  );
}

export default AppRoutes;
