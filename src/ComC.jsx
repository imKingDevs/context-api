import React from "react";
import { Name, Lname, Greet } from "./App";

const ComC = () => {
    return (
        <>
            <Name.Consumer>
                {(fname) => {
                    return (
                        <Lname.Consumer>
                            {(lname) => {
                                return <>{`${fname} ${lname}`}</>
                            }}
                        </Lname.Consumer>
                    )
                }}
            </Name.Consumer>
        </>
    )
}

export default ComC;