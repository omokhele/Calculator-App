import { useState } from 'react';
import './Calculator.css';

function Calculator () {


    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [sum, setSum] = useState(value1 + value2);

    // const [operand, setOperand] = useState("+")
    // const [operand2, setOperand2] = useState("-")
    // const [operand3, setOperand3] = useState("/")
    // const [operand4, setOperand4] = useState("*")


    const add = (e) => {
        setSum(value1 + value2)
        e.preventDefault();
    }
    const subtract = (e) => {
        setSum(value1 - value2)
        e.preventDefault();
    }
    const divide = (e) => {
        setSum(value1 / value2)
        e.preventDefault();
    }
    const multiply = (e) => {
        setSum(value1 * value2)
        e.preventDefault();
    }


    // const handleAddSum = (e) => {
    //     if (operand === "+") {
    //         setSum(value1 + value2)
    // }else if (operand === "-"){
    //     setSum(value1 - value2)
    // }else if (operand === "/"){
    //     setSum(value1 / value2)
    // }else if (operand === "*"){
    //     setSum(value1 * value2)
    // }
    //     e.preventDefault();
    // }
    // const handleOperand = () => {
    //     setOperand(operand)
    // }

    return (   
    <div className="container">

    <h1>Simple Arithmetic Operations with React!</h1>
    <hr></hr>


        

    <form className="form">
    <input type="number" placeholder="0" name="value1" value={value1} onChange={e =>setValue1(+e.target.value)}/>
    {/* 444<input type="text" placeholder="0" name="operand" value={operand} onChange={e =>setOperand(e.target.value)}/> */}
    <input type="number" placeholder="0" name="value2" value={value2} onChange={e =>setValue2(+e.target.value)}/>
    <div class="button">
    <input className = "input" type="button" value="Add" onClick={add} />
    <input className = "input" type="button" value="Subtract" onClick={subtract} />
    <input className = "input" type="button" value="Divide" onClick={divide}/>
    <input className = "input" type="button" value="Multiply" onClick={multiply}/>
    </div>
    {/* <span>=</span> */}
    {/* <button onClick={handleAddSum}>Result</button> */}
    <h1>{sum}</h1>

    
  </form>

</div>
    )
}

export default Calculator