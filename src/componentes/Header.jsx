import { Link } from "react-router-dom"


export default function Header () {
    return (
      
        <div className="header">
            <div className="logo">
               <img className="img-logo" src="https://pjm-resources.obs.sa-argentina-1.myhuaweicloud.com/icons/escudopjm-mediano.png" alt="LOGO DE LA EMPRESA" width="500" height="600"/>
               <h5> Poder Judicial de la <br /> Provincia de Mendoza</h5>
               
           </div>
        <nav className="menu">
          <ul>
           <li>
                <Link to={"/"}>Inicio</Link>
            </li>
            <li>
                <Link to={"/Objetivos"}>Objetivos</Link>
            </li>
            <li>
                <Link to={"/Sistemas"}>Sistemas</Link>
            </li>
            <li>
                <Link to={"/QuienesSomos"}>Quienes Somos</Link>
            </li>
          </ul>
        </nav>
      </div>
     

    )
}