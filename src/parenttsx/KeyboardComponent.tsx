import { useState } from "react";
import { Keyboard } from "../components/Keyboard"

export const KeyboardComponent: React.FC = () => {
    const [value, setValue] = useState("");
    const handleClick = (letter: any) => {
       setValue((prev) => prev + letter);

    }
return (
<>
<div>
Keyboard <br/>
<div className = "box" >{value}</div> 
<Keyboard onClick={() => handleClick ('a')}>a</Keyboard>
<Keyboard onClick={() => handleClick ('b')}>b</Keyboard>
<Keyboard onClick={() => handleClick ('c')}>c</Keyboard>
<Keyboard onClick={() => handleClick ('d')}>d</Keyboard>
<Keyboard onClick={() => handleClick ('e')}>e</Keyboard>
<Keyboard onClick={() => handleClick ('f')}>f</Keyboard>
<Keyboard onClick={() => handleClick ('g')}>g</Keyboard>
<Keyboard onClick={() => handleClick ('h')}>h</Keyboard>
<Keyboard onClick={() => handleClick ('i')}>i</Keyboard>
<Keyboard onClick={() => handleClick ('j')}>j</Keyboard>
<Keyboard onClick={() => handleClick ('k')}>k</Keyboard>
<Keyboard onClick={() => handleClick ('l')}>l</Keyboard>
<Keyboard onClick={() => handleClick ('m')}>m</Keyboard>
<Keyboard onClick={() => handleClick ('n')}>n</Keyboard>
<Keyboard onClick={() => handleClick ('o')}>o</Keyboard>
<Keyboard onClick={() => handleClick ('p')}>p</Keyboard>
<Keyboard onClick={() => handleClick ('q')}>q</Keyboard>
<Keyboard onClick={() => handleClick ('r')}>r</Keyboard>
<Keyboard onClick={() => handleClick ('s')}>s</Keyboard>
<Keyboard onClick={() => handleClick ('t')}>t</Keyboard>
<Keyboard onClick={() => handleClick ('u')}>u</Keyboard>
<Keyboard onClick={() => handleClick ('v')}>v</Keyboard>
<Keyboard onClick={() => handleClick ('w')}>w</Keyboard>
<Keyboard onClick={() => handleClick ('x')}>x</Keyboard>
<Keyboard onClick={() => handleClick ('y')}>y</Keyboard>
<Keyboard onClick={() => handleClick ('z')}>z</Keyboard>
</div>
</>)
}