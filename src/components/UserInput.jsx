import { useEffect } from "react";
import { useState } from "react";


const UserInput = () => {
    const [userInput, setUserInput] = useState({
        initialInvestment :10000,
        annualInvestment :1200,
        expectedReturn  : 6,
        duration : 10
    });



    function handleChange(inputIdentifier, newValue){
        setUserInput(prevUserInput=>{
            return {
              ...prevUserInput,
                [inputIdentifier]: newValue
            }
        });
    }


    useEffect(() => {
        console.log(" userInput   :  {}" , userInput);
    }, [userInput]);



  return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>초기 투자</label>
                <input type="number"
                 value={userInput.initialInvestment}
                required onChange={(e)=>handleChange("initialInvestment",e.target.value)}/>
            </p>
            <p>
                <label>연간 투자</label>
                <input type="number" 
                 value={userInput.annualInvestment}
                required  onChange={(e)=>handleChange("annualInvestment",e.target.value)} />
            </p>            
        </div>

        <div className="input-group">
            <p>
                <label>기대수익률</label>
                <input type="number"  
                 value={userInput.expectedReturn}
                required onChange={(e)=>handleChange("expectedReturn",e.target.value)} />
            </p>
            <p>
                <label>지속</label>
                <input  type="number" 
                    value={userInput.duration}
                required onChange={(e)=>handleChange("duration",e.target.value)} />
            </p>            
        </div>


    </section>
  )
}

export default UserInput