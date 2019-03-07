import React from "react";
import bubbleService from '../../services/bubbleService';

class BubbleDetail extends React.Component {
    componentDidMount() {
        bubbleService.getSingleBubble(this.props.match.params.bubbleId).then(data => this.setState({bubbleItem: data}));
    }
    constructor(){
        super();
        this.state = {
            bubbleItem: {}
        };
    }
    render() {
        return (
            <div><p>{this.state.bubbleItem.name}</p></div>
        );
    }
};

export default BubbleDetail;