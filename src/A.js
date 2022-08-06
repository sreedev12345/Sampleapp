import React,{ useState,createContext } from 'react';
import {UserContext} from './UserContext';
import B from './B'

export const Context = React.createContext();

const A = ()=>{
    const [user, setUser] = useState("Jesse Hall");

    return (
      <div></div>
      //  <Context.Provider value={user}>
      //     <B/>
      //  </Context.Provider>
    )
};

export default A;
