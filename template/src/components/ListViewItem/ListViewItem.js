import React from 'react';
import PropTypes from 'prop-types';
//import { BubbleConsumer } from '../../context/BubbleContext';

const ListViewItem = (props) => {
    const { name, description, image, price } = props;
    return (
        <div className="card text-white bg-secondary mb-3">
            <div className="card-header">{ name }</div>
            <div className="card-body">Price: { price }</div>
        </div>
    );
};

ListViewItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};


export default ListViewItem;