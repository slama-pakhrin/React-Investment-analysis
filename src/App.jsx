import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment : 1220,
    annualInvestment : 100,
    expectedReturn: 6,
    duration: 3
})
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
   <Results userInput={inputValues}/>
   </>
  )
}

export default App
