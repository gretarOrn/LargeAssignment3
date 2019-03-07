import React from 'react';
import bubbleService from '../../services/bubbleService';
import { BubbleProvider } from '../../context/BubbleContext';
import ListView from '../ListView/ListView';

class Bubbles extends React.Component {
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
        console.log(this.state.products);
        return (
            <BubbleProvider value ={this.state.products}>
                <div className="container">
                    <h1>Our bubble products!</h1>
                    <ListView />
                </div>
            </BubbleProvider>
        )
    }
};

export default Bubbles;