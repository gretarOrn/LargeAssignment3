import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    componentDidMount() {
        var list = JSON.parse(localStorage.getItem("cart"));
        this.setState({bubbleItem: list});
    }
    constructor(){
        super();
        this.state = {
            bubbleItem: {}
        };
    };
    render() {
        return (
            <div>
                <h1>Items in Cart: </h1>
                <p>{this.state.bubbleItem.name}</p>
                <button type="button"><Link to="/checkout">orderNow</Link></button>
            </div>
        )
    };
};

export default Cart;