import {useState, useEffect} from 'react';
import MyButton from '../UI/button/MyButton';
import './ConverterBlock.css'
import ConverterPart from './ConverterPart';

const ConverterBlock = () => {
    const [amount1, setAmount1] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [amount2, setAmount2] = useState(1);
    const [currency2, setCurrency2] = useState('UAH');
    const [rates, setRates] = useState([])
    const date = new Date().toLocaleDateString();
    
    useEffect(() => {
        fetch('https://api.exchangerate.host/latest')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setRates(data.rates)
            console.log(data);
        });
    },[]);

    function formatNumber(number){
        return number.toFixed(2);
    }
    function amountChange1(amount1) {
        setAmount2(formatNumber(amount1 * rates[currency2] / rates[currency1]))
        setAmount1(amount1);
    }
    function currencyChange1(currency1) {
        setAmount2(formatNumber(amount1 * rates[currency2] / rates[currency1]))
        setCurrency1(currency1);
    }
    function amountChange2(amount2) {
        setAmount1(formatNumber(amount2 * rates[currency1] / rates[currency2]))
        setAmount2(amount2);
    }
    function currencyChange2(currency2) {
        setAmount1(formatNumber(amount2 * rates[currency1] / rates[currency2]))
        setCurrency2(currency2);
    }
    function switchCurrency() {
        setAmount1(amount2);
        setAmount2(amount1);
        setCurrency1(currency2);
        setCurrency2(currency1);
    }

    return (
        <div className="Wrap-app">
            <ConverterPart 
                nameClass={'Wrap_start column'}
                text={'Ви віддаєте:'}
                amount={amount1}
                currency={currency1}
                setAmount={amountChange1}
                setCurrency={currencyChange1}
                rates={rates}
                info={`Курс обміну актуальний на ${date}  1${currency1} = ${formatNumber(rates[currency2]/rates[currency1])}${currency2}`}
            />
            <MyButton click={switchCurrency}/>
            <ConverterPart 
                nameClass={'Wrap_finish column'}
                text={'Ви отримуєте:'}
                amount={amount2}
                currency={currency2}
                setAmount={amountChange2}
                setCurrency={currencyChange2}
                rates={rates}
            />
      </div>
    );
};

export default ConverterBlock;