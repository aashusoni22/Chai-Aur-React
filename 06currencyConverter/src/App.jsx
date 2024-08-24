import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600">
      <div className="relative w-full max-w-md mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow-2xl backdrop-blur-lg">
        <h1 className="text-3xl font-extrabold text-teal-700 text-center mb-6">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-6">
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              currencyOptions={options}
            />
          </div>
          <div className="relative w-full h-12 flex justify-center items-center mb-6">
            <button
              type="button"
              className="absolute bg-coral-600 text-white p-3 rounded-full shadow-md hover:bg-coral-700 focus:outline-none transition-transform transform hover:scale-110"
              onClick={swap}
            >
              🔄
            </button>
          </div>
          <div className="w-full mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              currencyOptions={options}
              amountDisabled
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 focus:outline-none transition-all"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
