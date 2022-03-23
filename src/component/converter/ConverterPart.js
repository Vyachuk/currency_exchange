import React from 'react';
import MyInput from '../UI/Input/MyInput';

const ConverterPart = ({nameClass, text, amount, currency, setCurrency, setAmount, rates, info}) => {
    return (
        <div className={nameClass} >
            <p>{text}</p>
            <MyInput 
                onAmountChange={setAmount}
                onCurrencyChange={setCurrency}
                currencies={Object.keys(rates)} 
                amount={amount} 
                currency={currency}
            />
            <span>{info}</span>
        </div>
    );
};

export default ConverterPart;