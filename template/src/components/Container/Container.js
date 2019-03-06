import React from 'react';

class Container extends React.Component {
    componentDidMount() {
        var products = getProducts();
        this.setState({
            products: products
        });
    }
    constructor() {
        super();
        this.state = {
            products: []
        };
    }
    render() {
        return(
            <div className="container">

            </div>
        )
    };
};

export default Container;