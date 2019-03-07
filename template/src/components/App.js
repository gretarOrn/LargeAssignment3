import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import About from './About/About';
import BubbleView from './BubbleView/BubbleView';
import BubbleDetail from './BubbleDetail/BubbleDetail';
import bubbleService from '../services/bubbleService';
import bundleService from '../services/bundleService';
import { BubbleProvider } from '../context/BubbleContext';
import Cart from './Cart/Cart';
import { BundleProvider } from '../context/BundleContext';
import BundleView from './BundleView/BundleView';
import FrontPage from './FrontPage/FrontPage';
import Checkout from './Checkout/Checkout';
import DeliveryForm from './DeliveryForm/DeliveryForm';
import PickupForm from './PickupForm/PickupForm';


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
                                <Route exact path="/" component={ FrontPage }/>
                                <Route exact path="/bubbles" component={ BubbleView } /> } />
                                <Route exact path="/bundles" component={ BundleView }/>
                                <Route exact path="/about" component={ About }/>
                                <Route exact path="/bubbles/:bubbleId" component={ BubbleDetail }/>
                                <Route exact path="/cart" component={ Cart }/>
                                <Route exact path="/checkout" component={ Checkout }/>
                                <Route exact path="/checkout/pickupform" component={ PickupForm}/>
                                <Route exact path="/checkout/deliveryform" component={ DeliveryForm }/>
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
