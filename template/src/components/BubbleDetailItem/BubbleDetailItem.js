import React from 'react';
import PropTypes from 'prop-types';
//import { BubbleConsumer } from '../../context/BubbleContext';

const BubbleDetailItem = (props) => {
    const { name, description, image, price } = props;
    return (
        <div>
            <div>
                { image }
                { name }
                Description: { description }
                Price: { price }
            </div>
        </div>
    );
};

BubbleDetailItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default BubbleDetailItem;