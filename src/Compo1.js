import React, { useState, useCallback,useReducer } from 'react';
import Compo2 from './Compo2';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const initialState = {
    value : 0,
    count : 0
};

const reducer = (state, action) => {
    console.log('state',state,action)
    switch (action) {
      case "add":
        return {...state,
            value : state.value + 1};
      case "subtract":
        return state.value - 1;
      case "reset":
        return 0;
      default:
        throw new Error("Unexpected action");
    }
  };

const Compo1 = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000);
    const [count, dispatch] = useReducer(reducer, initialState);


    const incrementAge = () => {
        let a=0;
        for(var i=0;i<1000;i++) {
            a+=i;
        };
        console.log('a',a)
        setAge(age + 1);
    }
    const incrementSalary = useCallback(() => {
        console.log('parent-salary')
        setSalary(salary + 1000);
    },[]);

    console.log('count',count)

    return (
        <div>
            {/* <button onClick={incrementAge}>clickage {age} </button>
            <Button handleClick={incrementSalary}/> */}
            <button onClick={()=>dispatch('add')}>reducer {count?.value}</button>
        </div>
    )
};

export default Compo1;