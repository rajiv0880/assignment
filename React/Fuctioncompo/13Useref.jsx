import React,{ useRef } from "react";

const Useref = () => {

    const inputreef = useRef(null)

    function inputfunction (){
        // console.log("inputfunction")
        // inputreef.current.value = "100"
        inputreef.current.focus()
        inputreef.current.style.color = "green"
        // inputreef.current.value.toUppercase();
        
    }


    return ( 
        <>
            <h1>Useref</h1>
            <input type="text" ref={inputreef} />        
            {/* type select textara */}
            <button onClick={inputfunction}>update</button>

        </>

     );
}
 
export default Useref;
    