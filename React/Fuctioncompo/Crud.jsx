import React from 'react';
import "./Crud.css"
import { useState } from 'react';

const Crud = () => {

    const [name , setName] = useState("")
    const [alldata , setAlldata] = useState([])
    const [show, setShow] = useState(false)
    const [edit, setedit] = useState()

    const handleadd = ()=>{
        // console.log("handleadd");
        if (name.length !== 0){
            setAlldata(newdata => [...newdata, name])
            setName("")
        }
    }
    const handledel =(index)=>{
        console.log("handledel")
        alldata.splice(index,1)
        setAlldata([...alldata])
    }
    const handleedit = (i)=>{
        // console.log(handleedit);
        setName(alldata[i])
        setShow(true)
        setedit(i)
    }
    const handleupdate = ()=>{
        alldata.splice(edit,1,name)
        setAlldata([...alldata])
        setName("")
        setShow(false)
    }


    console.log(alldata);
    return ( 
        <>
            <div className="inp-f1">
                <input value={name} type="text"  onChange={(e)=> setName(e.target.value)} />
                {
                    !show ? <button onClick={handleadd}>Additem</button> :
                    <button onClick={handleupdate} >Updateitem</button>
                }
            </div>
            
            {
                alldata.map ((val, i) =>
                <div className='alldata'>
                    <h1>{val}</h1>
                    <button className='edit' onClick={()=> handleedit(i)} >edit</button>
                    <button className='del' onClick={()=> handledel(i)} >del</button>
                </div>
                )
            }

            <br />
            <br />
            <br />
            <br />
            <br />
        </>

     );
}
 
export default Crud;