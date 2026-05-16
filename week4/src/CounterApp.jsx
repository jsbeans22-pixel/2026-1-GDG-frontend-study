import { useState } from 'react';
import CounterNumber from './CountNumber';


function Counter() {
   const [count, setCount] = useState(0);


   function increse() {
      setCount(count+1);
   }

   function decrease() {
      setCount(count-1);
   }

   function reset() {
      setCount(0);
   }

   return (
     <div>
        <CounterNumber count={count} />
        <button onClick={decrease}>-1</button>
        <button onClick={reset}>reset</button>
        <button onClick={increse}>+1</button>
     </div>
    )
}

export default Counter;