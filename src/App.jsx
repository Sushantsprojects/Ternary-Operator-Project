import React from 'react';
import Cards from './Cards';
import "./index.css";
import Sdata from "./Sdata";
import Footer from './Footer';
import Buggati from './Buggati';
import Lamborgini from './Lamborgini';



const favcar = "Buggati";

const App = () => (
    <>
    <h1 className="header"> 🚗  Top 3 Super Cars  🚗</h1>
    {(favcar === "Buggati")? <Buggati/> : <Lamborgini/>}
<Footer />
    </>
);

export default App;