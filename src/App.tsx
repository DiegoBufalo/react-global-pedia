import { Header } from 'components/Header';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'routes';
import { Theme } from 'themes/theme';

export const App = () => {
  return (
    <Theme>
      <BrowserRouter>
        <Header /> 
        <Routes />
      </BrowserRouter>
    </Theme>
  );
};
