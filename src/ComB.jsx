import React, { useContext } from "react";
import ComC from "./ComC";
import { Greet } from "./App";

const ComB = () => {
    
    const greeting = useContext(Greet)
    
    return (
        <>
            {greeting}
            <ComC />
        </>
    )
}

export default ComB;