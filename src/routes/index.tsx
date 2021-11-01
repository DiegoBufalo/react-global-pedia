import { Route, Router } from 'react-router-dom';
import { Home } from 'pages/Home';
import { history } from 'utils/history';
import { Player } from 'pages/Player';
import { Team } from 'pages/Team';
import { Tournament } from 'pages/Tournament';

export const Routes = () => {
  return (
      <Router history={history} >
        <Route path="/"  component={Home} exact/>
        <Route path="/player"  component={Player} exact/>
        <Route path="/team"  component={Team} exact/>
        <Route path="/tournament"  component={Tournament} exact/>
      </Router>
  );
};
