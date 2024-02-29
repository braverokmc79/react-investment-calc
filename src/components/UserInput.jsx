import { useEffect } from "react";
import { useState } from "react";


const UserInput = ({onChange , userInput}) => {


  return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>초기 투자</label>
                <input type="number"
                 value={userInput.initialInvestment}
                required onChange={(e)=>onChange("initialInvestment",e.target.value)}/>
            </p>
            <p>
                <label>연간 투자</label>
                <input type="number" 
                 value={userInput.annualInvestment}
                required  onChange={(e)=>onChange("annualInvestment",e.target.value)} />
            </p>            
        </div>

        <div className="input-group">
            <p>
                <label>기대수익률</label>
                <input type="number"  
                 value={userInput.expectedReturn}
                required onChange={(e)=>onChange("expectedReturn",e.target.value)} />
            </p>
            <p>
                <label>지속(연도)</label>
                <input  type="number" 
                    value={userInput.duration}
                required onChange={(e)=>onChange("duration",e.target.value)} />
            </p>            
        </div>


    </section>
  )
}

export default UserInput