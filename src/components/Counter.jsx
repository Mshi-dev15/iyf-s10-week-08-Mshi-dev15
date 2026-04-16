import {useState} from 'react';

function Counter () {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h3>Counter</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count +1)}>
                Increment
            </button>
            <button onClick={()=> setCount(count - 1)}>
                Dcrement
            </button>
            <button onclick ={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}
export default Counter;