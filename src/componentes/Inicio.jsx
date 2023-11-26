import React from "react";
import Header from "./Header";

function Inicio () {

    return (  
      <div>
         <Header />
        
        <div className="page">

        <div className="system1" style={{backgroundColor: "steelblue"}}>
             <h4>OFICINA DE DESARROLLO DE SOFTWARE</h4>
             <p>Poder Judicial de Mendoza</p>
          </div>
          
        <div className="system1" style={{backgroundColor: "steelblue"}}>
             <h4>Tabajamos cada día para que su trabajo sea cada vez más</h4>
             <p>eficiente, seguro, sencillo y coherente con sus necesidades</p>
          </div>

        </div>
      </div>  
   )     
}

export default Inicio;