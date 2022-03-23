import React from 'react';
import './MyInput.css'

const MyInput = (props) => {
    return (
        <div className='input_block'>
            <input type='text' value={props.amount} onChange={e => props.onAmountChange(e.target.value)}></input>
            <select value={props.currency} onChange={e => props.onCurrencyChange(e.target.value)}>
                {props.currencies.map(currency => (
                    <option value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    );
};

export default MyInput;