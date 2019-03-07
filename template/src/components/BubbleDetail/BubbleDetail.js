import React from "react";
import bubbleService from '../../services/bubbleService';


class BubbleDetail extends React.Component {
    componentDidMount() {

        var productId;
        if(this.props.match){
            productId = this.props.match.params.bubbleId;
        }
        else{
            productId = this.props.bubbleId;
        }
        bubbleService.getSingleBubble(productId).then(data => this.setState({bubbleItem: data}));
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
                <p>{this.state.bubbleItem.name}</p>
                <img src={this.state.bubbleItem.image}></img>
                <p>{this.state.bubbleItem.description}</p>
                <button type="button" onClick={() => localStorage.setItem('cart', JSON.stringify(this.state.bubbleItem))}>add to cart</button>
            </div>
        );
    }
};

export default BubbleDetail;