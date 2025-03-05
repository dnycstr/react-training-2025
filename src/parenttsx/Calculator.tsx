import { useState } from "react";


export const Calculator = () => { 
    const [value, setValue] = useState<number>(0);
    const [value2, setValue2] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [operation, setOperation] = useState<string | null>("+");
    const [currentValue, setCurrentValue] = useState<"value" | "value2">("value");
    const [resetInput, setResetInput] = useState(false);

    const handleClear = () => {
        setValue(0);
            setValue2(0);
            setTotal(0);
            setOperation("+");
            setCurrentValue("value");
            setResetInput(false);
    }

    const handleClick = (number: number) => {
        if (currentValue === "value") {
            setValue((prev) => (prev ? Number(prev.toString() + number.toString()) : number));
        } else {
            setValue2((prev) => (prev ? Number(prev.toString() + number.toString()) : number));
        }
        console.log(resetInput);
    }


    const handleOperation = (op: string) => {
        if (value !== 0) {
            setOperation(op);
            setCurrentValue("value2");
        }
    }

    const handleOperationClick = () => {
        let result = 0;
        if (value !== 0 && value2 !== 0 && operation) {

            const n1 = Number(value);
            const n2 = Number(value2);

            switch (operation) {
                case "+":
                    result = n1 + n2;
                    break;
                case "-":
                    result = n1 - n2;
                    break;
                case "*":
                    result = n1 * n2;
                    break;
                case "/":
                    result = n2 !== 0 ? n1 / n2 : 0;
                    break;
                default:
                    return;
            }
        }

        setTotal(result);
        setOperation(operation);
        setCurrentValue("value");
        setResetInput(true);
    }

    return (
        <>
    

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "50px" }}>
                <h1>Calculator</h1>
                
                <div style={{ display: "flex", border: "solid black 2px", flexDirection: "row", padding: "10px 20px 10px 20px", gap: "30px" }}>
                    
                    <div style={{ fontWeight: "bold", fontSize: "30px" }}>{value}</div>
                    {operation && <div style={{ fontWeight: "bold", fontSize: "30px" }}>{operation}</div>}
                    <div style={{ fontWeight: "bold", fontSize: "30px" }}>{value2}</div> = <div style={{ fontWeight: "bold", fontSize: "30px" }}>{total}</div>
                </div>

                <div className="button-calc-container">
                    <button className="button-calc" onClick={() => handleClick(1)}>1</button>
                    <button className="button-calc" onClick={() => handleClick(2)}>2</button>
                    <button className="button-calc"  onClick={() => handleClick(3)}>3</button>  
                    <button className="button-calc" onClick={handleClear}>C</button>
                </div>

                <div className="button-calc-container">
                <button className="button-calc" onClick={() => handleClick(4)}>4</button>
                <button className="button-calc" onClick={() => handleClick(5)}>5</button>
                <button className="button-calc" onClick={() => handleClick(6)}>6</button>
                <button className="button-calc" onClick={() => handleOperationClick()}>=</button>
                </div>

                <div className="button-calc-container">
                    <button className="button-calc" onClick={() => handleClick(7)}>7</button>
                    <button className="button-calc" onClick={() => handleClick(8)}>8</button>
                    <button className="button-calc" onClick={() => handleClick(9)}>9</button>
                    <button className="button-calc" onClick={() => handleClick(0)}>0</button>
                </div>

                <div className="button-calc-container">
                <button className="button-calc" onClick={() => handleOperation("+")}>+</button>
                <button className="button-calc" onClick={() => handleOperation("-")}>-</button>
                <button className="button-calc" onClick={() => handleOperation("/")}>/</button>
                <button className="button-calc" onClick={() => handleOperation("*")}>*</button>
                </div>

        </div>

        
        </>
    )
}
