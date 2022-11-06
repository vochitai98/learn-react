import { useState } from "react";

function Example(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <p>You clicked {count} time</p>
            <button onClick = {() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
export default Example;