import React from "react";
import { Name, Lname } from "./App";

const ComZ = () => {
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

export default ComZ;