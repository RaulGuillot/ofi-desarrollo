function CardSistemas (nombre, descripcion, imagen, color) {
    return (
     <div className="cardsis" style={{backgroundColor: color}}>   
         <img src={imagen} alt="imagen guardada"/>
         <h2>{nombre}</h2>
         <p>{descripcion}</p>
     </div>
)
}
export default CardSistemas;