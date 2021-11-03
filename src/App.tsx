import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Toast } from './components/Toast';
import { ToastProvider } from './context/useToast';
import { Routes } from './routes';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Header />
        <Toast />
        <Routes />
      </ToastProvider>
    </BrowserRouter>
  );
};
