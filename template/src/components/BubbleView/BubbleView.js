import React from 'react';
import Bubbles from '../Bubbles/Bubbles';
import { BubbleConsumer } from '../../context/BubbleContext';

const ListView = () => {
    return (
        <BubbleConsumer>
            {
                BubbleContext => BubbleContext.list.map(item => <Bubbles key={ item.id }{ ...item } />)
            }
        </BubbleConsumer>
    );
};

export default ListView;
