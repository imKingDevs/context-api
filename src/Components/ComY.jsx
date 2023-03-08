import React from "react";
import ComZ from "./ComZ";
import { Greet } from "./App";

const ComY = () => {
    return (
        <>
            <Greet.Consumer>
                {(iam) => {
                    return <>{iam}</>
                }}
            </Greet.Consumer>
            <ComZ />
        </>
    )
}

export default ComY;