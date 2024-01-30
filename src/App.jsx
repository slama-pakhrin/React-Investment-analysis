import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment : 0,
    annualInvestment : 0,
    expectedReturn: 0,
    duration: 1
})

const isDurationPositive = inputValues.duration >= 1;

function handleChange(identifier, newValue){
    setInputValues((prevValues) => {
        return{ //we need other values when one of it is changing so we copy the object and replace the new element only
            ...prevValues,
            [identifier]: +newValue
        }
    })
}
  return (
    <>
   <Header />
   <UserInput onInputChange={handleChange} values={inputValues}/>
   {isDurationPositive ? <Results userInput={inputValues}/> : 
   <p className="center">Please enter the positive duration. Thanks!</p>}
   </>
  )
}

export default App
