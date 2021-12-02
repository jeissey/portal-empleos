import React from 'react';
import { BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Login from '../login/login';
import PrivateRoute from '../auth/privateroute';
import Empleados from '../empleados/index';
import Home from '../home/home';

export default function AppRouter() {
    return(
        <Router>
            <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path={["/login"]} component={Login} />
                <PrivateRoute exact path="/empleados" component={Empleados} />
                <Route 
                 path={'*'}
                 component={() => (
                    <h2 style={{ marginTop: 200 }}>
                        4 0 4
                        <br/>
                        <br/>
                        PÁGINA NO ENCONTRADA
                    </h2>
                 )}
                />                
            </Switch>
        </Router>
    );
}
