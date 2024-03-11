import { useId } from "react";
import React from 'react'

function InputBox({
    label,
    amount,
    onamountchange,
    oncurrencyChange,
    currencyoptions=[],
    selectcurrency="usd",
    amountdisable=false,
    currencydisable=false,
    className = "",
}) {
   
    // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
    const amountInput=useId();//use for tab the html elements
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountInput}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    if={amountInput}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisable}
                    value={amount}
                    onChange={(e)=>
                        onamountchange &&
                    onamountchange(Number(e.target.value))}//check for exist
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                    onChange={(e)=>
                        oncurrencyChange && oncurrencyChange(e.target.value)
                    }
                    disabled={currencydisable}


                >
                    
                {currencyoptions.map((curr)=> (
                    <option key={curr} value={curr}>
                        {curr}
                    </option>
                ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
