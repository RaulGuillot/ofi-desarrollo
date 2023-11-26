import Header from "./Header";
import CardPersonal from "./cardPersonal";
import fotodavid from '../imagenes/david-ceballos.jpg';
import fotomauro from '../imagenes/mauro-bonadeo.jpg';
import fotomiguel from '../imagenes/miguel-ragusa.jpg';
import fotomartin from '../imagenes/martin-diaz.jpg';
import fotocharly from '../imagenes/carlos-solanilla.jpg';
import fotoraul from '../imagenes/raul-guillot.jpg';
import fotodaniel from '../imagenes/daniel-zaera.jpg';
import fotosilvia from '../imagenes/silvia-imperiale.jpg';
import fotomauricio from '../imagenes/mauricio.ryan.jpg'



function QuienesSomos() {

  return (
    <div>
      <Header />
    <div className="page">

    <div className="card-personal">   
                 <img className="imagen-personal" src= {fotomiguel} alt="imagen guardada"/>
          <div className="datos-personal">
            <h2>Miguel Ragusa</h2>
            <p>Analista de Sistemas</p>
          </div>     
     </div>
 
    <div className="card-personal">   
                 <img className="imagen-personal" src= {fotomartin} alt="imagen guardada"/>
          <div className="datos-personal">
            <h2>Martin Diaz</h2>
            <p>Licenciado en Sistemas</p>
          </div>     
     </div>  

     <div className="card-personal">   
                 <img className="imagen-personal" src= {fotomauricio} alt="imagen guardada"/>
          <div className="datos-personal">
            <h2>Mauricio Ryan</h2>
            <p>Ingeniero en Sistemas</p>
          </div>     
     </div>    

    <div className="card-personal">   
              <img className="imagen-personal" src= {fotodavid} alt="imagen guardada"/>
        <div className="datos-personal">
            <h2>David Ceballos</h2>
            <p>Aanalista de sistemas</p>
        </div>     
     </div>

     <div className="card-personal">   
                 <img className="imagen-personal" src= {fotodaniel} alt="imagen guardada"/>
          <div className="datos-personal">
            <h2>Daniel Zaera</h2>
            <p>Licenciado en Sistemas </p>
          </div>     
     </div>


     <div className="card-personal">   
                 <img className="imagen-personal" src= {fotomauro} alt="imagen guardada"/>
          <div className="datos-personal">
            <h2>Mauro Bonadeo</h2>
            <p>Licenciado</p>
          </div>     
     </div>

     <div className="card-personal">   
                 <img className="imagen-personal" src= {fotosilvia} alt="imagen guardada"/>
          <div className="datos-personal">
            <h2>Silvia Imperiale</h2>
            <p>Licenciada en Sistemas</p>
          </div>     
     </div>

           
     

     <div className="card-personal">   
                 <img className="imagen-personal" src= {fotocharly} alt="imagen guardada"/>
          <div className="datos-personal">
            <h2>Carlos Solanilla</h2>
            <p>Analista de Sistemas</p>
          </div>     
     </div>

     <div className="card-personal">   
                 <img className="imagen-personal" src= {fotoraul} alt="imagen guardada"/>
          <div className="datos-personal">
            <h2>Raul Guillot</h2>
            <p>Analista de Sistemas</p>
          </div>     
     </div>

       {/* <div className="system1">
          <h4>Nombre 1</h4>
          <h5>Cargo 1</h5>
        </div>
        <div className="system1" style={{backgroundColor: "maroon"}}>
          <h4>Nombre 2</h4>
          <h5>Cargo 2</h5>
        </div>  */}
      </div>
      </div>
  )
}
export default QuienesSomos;
