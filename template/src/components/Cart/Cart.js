import React from 'react';

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
                {this.state.bubbleItem.name}
            </div>
        )
    };
};

export default Cart;