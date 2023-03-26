import { Navigate, Route, Routes } from 'react-router-dom';

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Private routes</h1>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default PublicRoutes;
