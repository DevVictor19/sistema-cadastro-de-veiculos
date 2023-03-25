import { BrowserRouter } from 'react-router-dom';

import PublicRoutes from './public.routes';

function Router() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}

export default Router;
