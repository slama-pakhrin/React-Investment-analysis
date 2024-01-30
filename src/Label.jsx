import { useState } from "react"
export default function Label({children, newInputValues}){

    const [inputValue, setInputValue] = useState('0');
    function handleValueChange(event){
        setInputValue(event.target.value);
        newInputValues(inputValue)
    }
    return(
        <label>
            {children}<br></br><input type="number" value={inputValue} onChange={handleValueChange}/><br></br>
        </label>
    )
}