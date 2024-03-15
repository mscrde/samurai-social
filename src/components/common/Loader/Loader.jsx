import React from 'react';
import LoaderStyles from './Loader.module.scss';
import LoaderImage from '../../../images/loader.gif';

const Loader = () => (
    <div className={LoaderStyles.loader}>
        <img src={LoaderImage} alt="gifka" />
    </div>
)

export { Loader }