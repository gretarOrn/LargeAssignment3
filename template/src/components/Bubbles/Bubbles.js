import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BubbleConsumer } from '../../context/BubbleContext';

const Bubbles = props => {
    const {id, name, image, price } = props;
    return (
        <BubbleConsumer>
        {
            BubbleContext => {
                return (
                    <div className="card text-black bg-secondary mb-3">
                        <div className="card-header"><Link to={ "/bubbles/" + id }>{ name }</Link></div>
                        <div className="card-body">Price: { price }</div>
                    </div>
                );
            }
        }
        </BubbleConsumer>
    );

};

Bubbles.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default Bubbles;