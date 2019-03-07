import React from 'react';
import bubbleService from '../../services/bubbleService';
import { BubbleProvider } from '../../context/BubbleContext';
import BubbleDetailView from '../BubbleDetailView/BubbleDetailView';

class BubbleDetail extends React.Component {
    componentDidMount(){
        bubbleService.getSingleBubble(1).then(data => this.setState({ product: data }));
    }
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }
    render(){
        return (
            <BubbleProvider value = {this.state.product}>
                <div className="container">
                    <BubbleDetailView />
                </div>
            </BubbleProvider>
        )
    }
};

export default BubbleDetail;