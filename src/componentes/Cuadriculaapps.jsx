import CardSistemas from "./CardSistemas";
import imagenusher from '../imagenes/usher.png';
import imagenskipper from '../imagenes/Skipper.png';
import imagenrenaper from '../imagenes/spa.png'


function Cuadriculapps () {
const sistem=[
    {
        nombre:"USHER",
        descripcion:"SISTEMA CENTRAL DE ROLES DE USUARIOS Implementación de la primer versión Mantener el compromiso del equipo",
        imagen: imagenusher,
        color: "red"
    },{
        nombre:"SKIPPER",
        descripcion:"GESTOR DE CONTENIDOS.Se agregan tiempos de Expiración de Archivos Nuevos filtros de búsqueda Interfaz de usuario mejorada Mejora reporte Constancia",
        imagen: imagenskipper,
        color: "blue"
    },{
        nombre:"RENAPER",
        descripcion:"Consulta de Personas - Mejora de experiencia de Usuario, Se agrega constancia de consulta Roop map futuro integración con Registro Civil y árbol genealógico",
        imagen: imagenrenaper,
        color: "yellow"
    },
];

return (

    <>
   <CardSistemas nombre={sistem[0].nombre} descripción={sistem[0].descripcion} imagen={sistem[0].imagen} color={sistem[0].color}/>
   <CardSistemas nombre={sistem[1].nombre} descripción={sistem[1].descripcion} imagen={sistem[1].imagen} color={sistem[1].color}/>
   <CardSistemas nombre={sistem[2].nombre} descripción={sistem[2].descripcion} imagen={sistem[2].imagen} color={sistem[2].color}/>
    </>
)

}
export default Cuadriculapps;