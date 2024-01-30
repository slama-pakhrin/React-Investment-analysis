export default function UserInput({onInputChange, values}){
    
    return(
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={values.initialInvestment} onChange={(event) => onInputChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={values.annualInvestment} onChange={(event) => onInputChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={values.expectedReturn} onChange={(event) => onInputChange('expectedReturn', event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={values.duration} onChange={(event) => onInputChange('duration', event.target.value)}/>
            </p>
        </div>
    </section>
)}