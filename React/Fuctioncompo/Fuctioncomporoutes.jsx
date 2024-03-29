import React from 'react';
import { Route, Routes } from "react-router-dom";
import Fuctioncompointro from './Fuctioncompointro';
import Fuctioncompomenu from './Fuctioncompomenu';
import Usestate from './01Usestate';
import Fuctioncompoprops from './04Fuctioncompoprops';
import Useeffect from './05Useeffect';
import Layouteffect from './06Layouteffect';

import Usememo from './07Usememo';
import Usecallback from './08Usecallback';
import Usecontextone from './10Usecontextone';
import Usecontexthook from './11Usecontexthook';
import Usereducer from './12Usereducer';
import Useref from './13Useref';
import Api from './14Api';
import Apipost from './15Apipost';
import Crud from './Crud'


const Fuctioncomporoutes = () =>{
  return(
    <Routes>
        <Route path='/' element={<Fuctioncompomenu/>}>
           <Route path='Fuctioncompointro' element={<Fuctioncompointro/>} />
           <Route path='Usestate' element={<Usestate/>} />
           <Route path='Fuctioncompoprops' element={<Fuctioncompoprops/>} />
           <Route path='Useeffect' element={<Useeffect/>} />
           <Route path='Layouteffect' element={<Layouteffect/>} />
           <Route path='Usememo' element={<Usememo/>} />
           <Route path='Usecallback' element={<Usecallback/>} />
           <Route path='Usecontextone' element={<Usecontextone/>} />
           <Route path='Usecontexthook' element={<Usecontexthook/>} />
           <Route path='Usereducer' element={<Usereducer/>} />
           <Route path='Useref' element={<Useref/>} />
           <Route path='Api' element={<Api/>} />
           <Route path='Apipost' element={<Apipost/>} />
           <Route path='Crud' element={<Crud/>} />
        </Route>
    </Routes>
  )
}

export default Fuctioncomporoutes;