import { QueryClient, QueryClientProvider } from 'react-query';

import Router from './routes/router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
