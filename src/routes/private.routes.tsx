import { Navigate, Route, Routes } from 'react-router-dom';

import DashBoard from '~/pages/DashBoard';
import AsideMenu from '~/pages/DashBoard/components/AsideMenu';
import VehicleRegistrationPanel from '~/pages/DashBoard/components/VehicleRegistrationPanel';

function PublicRoutes() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<DashBoard asideMenu={<AsideMenu />} />}
      >
        <Route path="vehicle-panel" element={<VehicleRegistrationPanel />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default PublicRoutes;
