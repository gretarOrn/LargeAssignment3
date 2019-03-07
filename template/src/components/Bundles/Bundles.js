import React from 'react';
import PropTypes from 'prop-types';
import Bubbles from '../Bubbles/Bubbles';
import { BundleConsumer } from '../../context/BundleContext';
import { BubbleConsumer } from '../../context/BubbleContext';

const Bundles = props => {
    const {id, name, items} = props;
    return (
        <BundleConsumer>
            {
                BundleContext => {
                    return (
                        <div className="card text-black bg-secondary mb-3">
                            <div className="card-header">{ name }</div>
                        </div>
                    );
                    
                }
                
            }
        </BundleConsumer>
        
    );
};

Bundles.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
};

export default Bundles;