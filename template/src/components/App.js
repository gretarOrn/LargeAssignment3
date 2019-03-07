import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import About from './About/About';
import BubbleView from './BubbleView/BubbleView';
import BubbleDetail from './BubbleDetail/BubbleDetail';
import bubbleService from '../services/bubbleService';
import { BubbleProvider } from '../context/BubbleContext';
import Cart from './Cart/Cart';


class App extends React.Component {
    componentDidMount() {
        bubbleService.getAllBubbles().then(data => this.setState({ products: {
            ...this.state.products,
            list: data
        }}));
    }
    constructor(props) {
        super(props);
        this.state = {
            products: {
                list:[]
            }
        };
    }
    render() {
        return (
            <BubbleProvider value={this.state.products}>
                <div>
                    <NavigationBar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={ BubbleView }/>
                            <Route exact path="/bubbles" render={ () => <Redirect to="/" /> } />
                            <Route exact path="/about" component={ About }/>
                            <Route exact path="/bubbles/:bubbleId" component={ BubbleDetail }/>
                            <Route exact path="/cart" component={ Cart }/>
                            <Route path="*" render={() => <div>404 Not found</div>} />
                        </Switch>
                    </div>
                </div>
            </BubbleProvider>
        )
    }
};

export default App;
