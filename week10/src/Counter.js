import { useState } from 'react';

import CountNumber from './CountNumber';

function Counter() {

 const [count, setCount] = useState(0);


 function increment10() {

  setCount(count+10);
 
  }
 function increment() {

 setCount(count+1);

 }

 function decrement() {
  setCount(count-1);
 }
 function decrement10() {
  setCount(count-10);
 }

 function reset() {
  setCount(0);
 }

 return (

 <div>

 <CountNumber count={count} />
 <button onClick={increment10}
 style={{background:'rgb(255,0,0)',margin: '10px'}}>+10</button>
 <button onClick={increment}
 style={{background:'#ffff00',margin: '10px'}}>+1</button>
 <button onClick={reset}
 style={{background:'#00ff00',margin: '10px'}}>reset!</button>
 <button onClick={decrement}
 style={{background:'#00ffff',margin: '10px'}}>-1</button>
 <button onClick={decrement10}
 style={{background:'#0000ff',margin: '10px'}}>-10</button>
 </div>

 )

}


export default Counter;