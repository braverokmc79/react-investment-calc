import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });


  const inputIsValid=userInput.duration >=1;


  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      console.log("====inputIdentifier  ", Number(userInput[inputIdentifier])+Number(newValue));
        return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,
        };
    });
  }

  return (
    <>
      <Header />

      <UserInput userInput={userInput} onChange={handleChange} />

      {!inputIsValid && <p className="center">0보다 큰 기간을 입력하세요.</p> }
      {inputIsValid && <Results input={userInput} /> }

      <footer className="text-cener">
        <a href="https://macaronics.net/" target="_blank">macaroncis.net</a>
      </footer>
    </>
  );
}

export default App;
