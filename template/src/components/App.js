import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import About from './About/About';
import Bubbles from './Bubbles/Bubbles';

const App = () => {
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <switch>
                    <Route exact path="/" component={ Bubbles }/>
                    <Route path="/bubbles" render={ () => <Redirect to="/" /> } />
                    <Route exact path="/about" component={ About }/>
                </switch>
            </div>
        </div>
    )
};

export default App;
