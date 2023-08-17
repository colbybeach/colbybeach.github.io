import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import axios from "axios";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';


const queryClient = new QueryClient();

axios.defaults.baseURL = "https://3owysqbjnb.execute-api.us-east-2.amazonaws.com/dev/v1";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
