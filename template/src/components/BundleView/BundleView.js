import React from 'react';
import Bundles from '../Bundles/Bundles';
import { BundleConsumer } from '../../context/BundleContext';

const BundleView = () => {
    return (
        <BundleConsumer>
            {
                BundleContext => BundleContext.list.map(item => <Bundles key={ item.id }{...item} />)
            }
        </BundleConsumer>
    );
};

export default BundleView;