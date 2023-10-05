import React from 'react';
import CompA from './CompA';
import { createContext } from 'react';
// import { create } from 'json-server';

const Fname = createContext()

const Usecontextone = () => {
    return (
        <>
            <Fname.Provider value="Rajiv">
                <CompA />
            </Fname.Provider>
        </>
    );
}

export default Usecontextone;
export {Fname}