import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import About from './About/About';

const App = () => {
    return(
        <div>
            <NavigationBar />
            <switch>
                <Route exact path="/about" component={ About }/>
            </switch>
        </div>
    )
};

export default App;
