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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
                <h1>Calculator</h1>
                
                <div style={{ display: "flex", border: "solid black 2px", flexDirection: "row", padding: "10px 20px 10px 20px", gap: "8px"}}>
                    <div>{value}</div>
                    {operation && <div>{operation}</div>}
                    <div>{value2}</div> = <div style={{ fontWeight: "bold" }}>{total}</div>
                </div>
                <button onClick={handleClear}>Clear</button>
                    <button onClick={() => handleClick(0)}>0</button>
                    <button onClick={() => handleClick(1)}>1</button>
                    <button onClick={() => handleClick(2)}>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                <button onClick={() => handleOperation("+")}>+</button>
                <button onClick={() => handleOperation("-")}>-</button>
                <button onClick={() => handleOperation("/")}>/</button>
                <button onClick={() => handleOperation("*")}>x</button>
                <button onClick={() => handleOperationClick()}>=</button>

                <div style={{ display: "flex", gap: "5px", flexDirection: "row", padding: "10px 20px" }}>
                <button onClick={() => handleClick(1)}>1</button>
                    <button onClick={() => handleClick(2)}>2</button>
                    <button>3</button>
                </div>

                <div style={{ display: "flex", gap: "5px", flexDirection: "row", padding: "10px 20px" }}>
                <button onClick={() => handleClick(4)}>4</button>
                    <button onClick={() => handleClick(5)}>5</button>
                    <button>6</button>
                </div>
        </div>

        
        </>
    )
}
