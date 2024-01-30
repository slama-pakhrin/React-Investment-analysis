import { calculateInvestmentResults,formatter } from "../util/investment";
export default function Results({userInput}){
    
    const result = calculateInvestmentResults(userInput)

    return(
        <table id="result">
            <thead>
                <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {result.map((calculatedData) => {
                    const totalInterest = (calculatedData.valueEndOfYear - userInput.initialInvestment) - (calculatedData.annualInvestment * calculatedData.year)
                    const investedCapital = calculatedData.valueEndOfYear - totalInterest
                    return(
                        <tr key={calculatedData.year}>
                            <td>{calculatedData.year}</td>
                            <td>{formatter.format(calculatedData.valueEndOfYear)}</td>
                            <td>{formatter.format(calculatedData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}