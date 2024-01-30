import { useState } from "react"

export default function UserInput(){
    const [inputValues, setInputValues] = useState({
        initialInvestment : 0,
        annualInvestment : 0,
        expectedReturn: 0,
        duration: 0
    })
    function handleChange(identifier, newValue){
        setInputValues((prevValues) => {
            return{ //we need other values when one of it is changing so we copy the object and replace the new element only
                ...prevValues,
                [identifier]: newValue
            }
        })
    }
    return(
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={inputValues.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={inputValues.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={inputValues.expectedReturn} onChange={(event) => handleChange('expectedReturn', event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={inputValues.duration} onChange={(event) => handleChange('duration', event.target.value)}/>
            </p>
        </div>
    </section>
)}