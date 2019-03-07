import React from "react";
import bubbleService from '../../services/bubbleService';


class BubbleDetail extends React.Component {
    componentDidMount() {
        var list = JSON.parse(localStorage.getItem("cart"));
        bubbleService.getSingleBubble(this.props.match.params.bubbleId).then(data => this.setState({bubbleList: {...list, data}}));
        
    }
    constructor(){
        super();
        this.state = {
            bubbleList: []
        };
    };
    render() {
        return (
            <div>
                <p>{this.state.bubbleItem.name}</p>
                <button type="button" onClick={() => localStorage.setItem('cart', JSON.stringify(this.state.bubbleItem))}>add to cart</button>
            </div>
        )
    };
};

export default BubbleDetail;