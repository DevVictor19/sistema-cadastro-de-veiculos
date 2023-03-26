import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthContextProvider } from './contexts/AuthContext';
import Router from './routes/router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
