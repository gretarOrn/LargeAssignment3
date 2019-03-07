import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import About from './About/About';
import Bubbles from './Bubbles/Bubbles';
import BubbleDetail from './BubbleDetail/BubbleDetail';


const App = () => {
    return (
        <div>
            <NavigationBar />

            <div className="container">
                <Switch>
                    <Route exact path="/" component={ Bubbles }/>
                    <Route exact path="/bubbles" render={ () => <Redirect to="/" /> } />
                    <Route exact path="/about" component={ About }/>
                    <Route exact path="/bubbles/:bubbleId" component={ BubbleDetail }/>
                    <Route path="*" render={() => <div>404 Not found</div>} />
                </Switch>
            </div>
        </div>
    )
};

export default App;
