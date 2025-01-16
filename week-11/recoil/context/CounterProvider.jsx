import { createContext, useContext, useState } from "react";

const counterContex = createContext(undefined);

export const CounterProvider = ({children})=>{
    const [count, setCount]= useState(0);
    return (
        <counterContex.Provider value={{count, setCount}}>
            {children}
        </counterContex.Provider>
    )
}


export const useCounter = ()=>{
    const context = useContext(counterContex);
    return context;
}