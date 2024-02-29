import { useEffect } from 'react';
import {calculateInvestmentResults, formatter} from '../util/investment.js';


const Results = ({input}) => {
  const  resultData =calculateInvestmentResults(input);
  const initialInvestment=
                resultData[0].valueEndOfYear- 
                resultData[0].interest- 
                resultData[0].annualInvestment;

  useEffect(()=>{

  }, [resultData])


  return (
    <table id="result">
        <thead>
            <tr>
                {/* <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th> */}
                <th>연도</th>
                <th>투자 가치</th>
                <th>연간이자</th>
                <th>총 이자</th>
                <th>투자자금</th>
            </tr>
        </thead>
        <tbody>
            {/* <tr >
                    <td>yearData</td>
                    <td>yearData</td>
                    <td>yearData</td>
                    <td>yearData</td>
                    <td>yearData</td>
              </tr>
              {year: 2, interest: 708.3816, valueEndOfYear: 13714.741600000001, annualInvestment: 1200}

              */}
            {resultData && resultData.map(yearData=>{
                const totalInterest =
                     yearData.valueEndOfYear - yearData.annualInvestment * yearData.year -initialInvestment;

                const totalAmountInvested =yearData.valueEndOfYear -totalInterest ;

                return (
                    <tr key={yearData.year}>

                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>

                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}

export default Results