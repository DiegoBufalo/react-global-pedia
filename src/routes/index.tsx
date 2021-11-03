import { Route, Router } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Player } from '../pages/Player';
import { PlayerForm } from '../pages/Player/Form';
import { Team } from '../pages/Team';
import { Tournament } from '../pages/Tournament';
import { history } from '../utils/history';

export const Routes = ():JSX.Element => {
  return (
      <Router history={history} >
        <Route path="/"  component={Home} exact/>

        <Route path="/players"  component={Player} exact/>
        <Route path="/player/sing-up"  component={PlayerForm} exact/>
        <Route path="/player/edit/:id"  component={PlayerForm} exact/>

        <Route path="/teams"  component={Team} exact/>

        <Route path="/tournaments"  component={Tournament} exact/>
      </Router>
  );
};
