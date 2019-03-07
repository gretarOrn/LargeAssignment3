import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import About from './About/About';
import BubbleView from './BubbleView/BubbleView';
import BubbleDetail from './BubbleDetail/BubbleDetail';
import bubbleService from '../services/bubbleService';
import bundleService from '../services/bundleService';
import { BubbleProvider } from '../context/BubbleContext';
import { BundleProvider } from '../context/BundleContext';
import BundleView from './BundleView/BundleView';


class App extends React.Component {
    componentDidMount() {
        bubbleService.getAllBubbles().then(data => this.setState({ products: {
            ...this.state.products,
            list: data
        }}));
        bundleService.getBundles().then(data => this.setState({ bundles: {
            ...this.state.bundles,
            list: data
        }}));
    }
    constructor(props) {
        super(props);
        this.state = {
            products: {
                list:[]
            },
            bundles: {
                list:[]
            }
        };
    }
    render() {
        return (
            <BubbleProvider value={this.state.products}>
                <BundleProvider value={this.state.bundles}>
                    <div>
                        <NavigationBar />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={ BubbleView }/>
                                <Route exact path="/bubbles" render={ () => <Redirect to="/" /> } />
                                <Route exact path="/bundles" component={ BundleView }/>
                                <Route exact path="/about" component={ About }/>
                                <Route exact path="/bubbles/:bubbleId" component={ BubbleDetail }/>
                                <Route path="*" render={() => <div>404 Not found</div>} />
                            </Switch>
                        </div>
                    </div>
                </BundleProvider>
            </BubbleProvider>
        )
    }
};

export default App;
