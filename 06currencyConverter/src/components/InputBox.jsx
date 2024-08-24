import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-700 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-gray-100 py-2 px-3 text-gray-800 border rounded-lg focus:border-teal-500 focus:ring focus:ring-teal-300 transition-all"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-gray-700 mb-2 w-full">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
          className="rounded-lg px-3 py-2 bg-gray-100 cursor-pointer outline-none focus:ring-2 focus:ring-teal-500 transition-all"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
