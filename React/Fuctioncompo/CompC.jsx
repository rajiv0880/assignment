import React from 'react';
import { Fname } from './10Usecontextone';

const CompC = () => {
    return (
        <>

                <h1>Usecontextone</h1>
            <Fname.Consumer>
            {
                    (rajiv) => {
                    return  <h1>Hello {rajiv}</h1>
                    }
            }
            </Fname.Consumer>



        </>
    );

}

export default CompC;
