function CardPersonal (nombre, titulo, imagen) {
    return (
     <div className="card-personal" style={{backgroundColor: "black"}}>   
         <img className="imagen-personal" 
         src={imagen} 
         alt="imagen guardada"/>
         <div className="datos-personal">
            <h2>{nombre}</h2>
            <p>{titulo}</p>
          </div>  
     </div>
)
}
export default CardPersonal;