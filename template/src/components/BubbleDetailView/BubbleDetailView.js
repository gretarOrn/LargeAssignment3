import React from 'react';
import BubbleDetailItem from '../BubbleDetailItem/BubbleDetailItem';
import { BubbleConsumer } from '../../context/BubbleContext';

const BubbleDetailView = () => {
    return (
        <BubbleConsumer>
            {
                BubbleContext => BubbleContext.list.map(item => <BubbleDetailItem key={ item.id }{ ...item } />)
            }
        </BubbleConsumer>
    );
};

export default BubbleDetailView;