import React from 'react';
import ListViewItem from '../ListViewItem/ListViewItem';
import { BubbleConsumer } from '../../context/BubbleContext';

const ListView = () => {
    return (
        <BubbleConsumer>
            {
                BubbleContext => BubbleContext.list.map(item => <ListViewItem key={ item.id }{ ...item } />)
            }
        </BubbleConsumer>
    );
};

export default ListView;
