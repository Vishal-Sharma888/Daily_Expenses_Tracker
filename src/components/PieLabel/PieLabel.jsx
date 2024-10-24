import React from 'react';
//styles
import "./PieLabel.css";

const PieLabel = props => {
    //props
    const { name, color } = props;
    return (
        <div className='pieLabel'>
            <span className='labelColorBar' style={{backgroundColor: color}}></span>
            <span className='labelText'>{name}</span>
        </div>
    );
};

export default PieLabel;