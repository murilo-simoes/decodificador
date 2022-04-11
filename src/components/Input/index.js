import React from 'react'

import './style.css'

const Input = ({ label, value, onChange }) => {
    return ( 
        <div className="container">
            <p className="label">{label}</p>
            <textarea onChange={onChange} value={value} className="input" />
        </div> 
    );
}
 
export default Input;