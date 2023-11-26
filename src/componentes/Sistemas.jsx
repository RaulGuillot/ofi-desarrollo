import imagenusher from '../imagenes/usher.png';
import imagenskipper from '../imagenes/Skipper.png';
import imagenrenaper from '../imagenes/spa.png';
import imagencloud from '../imagenes/google-cloud.jpg';
import imagenmeed from '../imagenes/MEED.jpg';
import imagenbus from '../imagenes/bus.png';
import imagensorteos from '../imagenes/sorteos.png';
import imagenfirmadigital from '../imagenes/firma-digital.png';
import imagenconcilia from '../imagenes/concilia.png';
import Header from './Header';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


function Sistemas () {
  return (
   
  <div>
      <Header />  
   <div className="page">
           <Card sx={{ maxWidth: "30%", maxHeight:310, bgcolor: "steelblue",color: "white"}} >
             <CardActionArea>   
              <CardMedia component="img" 
              image={imagenskipper} 
              padding= "2px 10px 15px" 
              height= "160px"
              alt="IMAGEN SKIPPER"
              />
              <CardContent>
                <Typography variant='h5'>SKIPPER</Typography>
                <Typography component="h6" variant='body2 '>GESTOR DE CONTENIDOS <br/>
        Se agregan tiempos de Expiración de Archivos Nuevos filtros de búsqueda Interfaz de usuario mejorada Mejora reporte Constancia</Typography>
              </CardContent>
              </CardActionArea>
           </Card>

           <Card sx={{ maxWidth: "30%", maxHeight:310, bgcolor: "steelblue",color: "white"}} >
             <CardActionArea>   
              <CardMedia component="img" 
              image={imagenrenaper} 
              padding= "2px 10px 15px" 
              height= "160px"
              alt="IMAGEN RENAPER"
              />
              <CardContent>
                <Typography variant='h5'>RENAPER</Typography>
                <Typography component="h6" variant='body2 '>Mejora de experiencia de Usuario<br />
Se agrega constancia de consulta
Roop map futuro integración con
Registro Civil y árbol genealógico.</Typography>
              </CardContent>
              </CardActionArea>
           </Card>  

           <Card sx={{ maxWidth: "30%", maxHeight:310, bgcolor: "steelblue",color: "white"}} >
             <CardActionArea>   
              <CardMedia component="img" 
              image={imagenusher} 
              padding= "2px 10px 15px" 
              height= "160px"
              alt="IMAGEN usher"
              />
              <CardContent>
                <Typography variant='h5'>USHER</Typography>
                <Typography component="h6" variant='body2 '>SISTEMA CENTRAL DE ROLES DE USUARIOS<br />
                 Implementación de la primer versión
Mantener el compromiso del equipo.</Typography>
              </CardContent>
              </CardActionArea>
           </Card> 

           <Card sx={{ maxWidth: "30%", maxHeight:310, bgcolor: "steelblue",color: "white",marginTop: "20px"}} >
             {/*<CardActionArea> */}  
              <CardMedia component="img" 
              image={imagencloud} 
              padding= "2px 10px 15px" 
              height= "160px"
              alt="IMAGEN usher"
              />
              <CardContent>
                <Typography variant='h5'>GOOGLE CLOUD</Typography>
                <Typography component="h6" variant='body2'>DIGITALIZACION DE MESA DE ENTRADAS<br />
                 puede encontrar información</Typography>
                 <a href="https://cloud.google.com/customers/poder-judicial-de-mendoza?hl=es-419" target='_blank' rel='noopener noreferrer'><button>AQUI</button></a>
              </CardContent>
              {/*</CardActionArea>*/}
           </Card> 

           <Card sx={{ maxWidth: "30%", maxHeight:310, bgcolor: "steelblue",color: "white",marginTop: "20px"}} >
             <CardActionArea>   
              <CardMedia component="img" 
              image={imagenmeed} 
              padding= "2px 10px 15px" 
              height= "160px"
              alt="IMAGEN usher"
              />
              <CardContent>
                <Typography variant='h5'>MEED</Typography>
                <Typography component="h6" variant='body2'>VALIDACIÓN DE ARCHIVOS<br />
                 Aplicación web que permite validar, enviar y adjuntar archivos, dem tro de los sistemas informáticos del Poder Judicial.</Typography>
               </CardContent>
              </CardActionArea>
           </Card> 

           <Card sx={{ maxWidth: "30%", maxHeight:310, bgcolor: "steelblue",color: "white",marginTop: "20px"}} >
             <CardActionArea>   
              <CardMedia component="img" 
              image={imagenfirmadigital} 
              padding= "2px 10px 15px" 
              height= "160px"
              alt="IMAGEN usher"
              />
              <CardContent>
                <Typography variant='h5'>FIRMA DIGITAL</Typography>
                <Typography component="h6" variant='body2'>La firma digital otorga: validez jurídica, autenticidad e integridad del documento y seguridad. <br />
                </Typography>
               </CardContent>
              </CardActionArea>
           </Card> 

           

           <Card sx={{ maxWidth: "30%", maxHeight:310, bgcolor: "steelblue",color: "white",marginTop: "20px"}} >
             {/*<CardActionArea> */}  
              <CardMedia component="img" 
              image={imagenbus} 
              padding= "2px 10px 15px" 
              height= "160px"
              alt="IMAGEN usher"
              />
              <CardContent>
                <Typography variant='h5'>BUS FEDERAL</Typography>
                <Typography component="h6" variant='body2'>integra organismos públicos y privados en su gestión digital con los poderes judiciales del país
                 </Typography>
                 <a href="https://www.bus-justicia.org.ar/index.php/proyecto/que-es" target='_blank' rel='noopener noreferrer'><button>más imformación aqui</button></a>
              </CardContent>
              {/*</CardActionArea>*/}
           </Card>  

           <Card sx={{ maxWidth: "30%", maxHeight:310, bgcolor: "steelblue",color: "white",marginTop: "20px"}} >
             <CardActionArea>   
              <CardMedia component="img" 
              image={imagenconcilia} 
              padding= "2px 10px 15px" 
              height= "160px"
              alt="IMAGEN usher"
              />
              <CardContent>
                <Typography variant='h5'>CONCILIA</Typography>
                <Typography component="h6" variant='body2'>Sistema de homologación de convenios, con soporte de firma digital ciudadana</Typography>
               </CardContent>
              </CardActionArea>
           </Card> 
     
           <Card sx={{ maxWidth: "30%", maxHeight:310, bgcolor: "steelblue",color: "white",marginTop: "20px"}} >
             <CardActionArea>   
              <CardMedia component="img" 
              image={imagensorteos} 
              padding= "2px 10px 15px"
              height= "160px"
              alt="IMAGEN usher"
              />
              <CardContent>
                <Typography variant='h5'>SAAC</Typography>
                <Typography component="h6" variant='body2'>Sistema de Asignación Aleatorio de Causas<br /></Typography>
               </CardContent>
              </CardActionArea>
           </Card> 



           




           <Card sx={{ maxWidth: "30", maxHeight:310, bgcolor: "steelblue",color: "white", marginTop: "20px"}} >
             <CardActionArea>   
                           
              <CardContent>
                <Typography conponent='h6' variant='body2'>y ademas<br /></Typography>
                <Typography component="h6" variant='body2'>* SPA<br /></Typography>
                <Typography component="h6" variant='body2'>* TRANSLADO DE DEMANDAS<br /></Typography>
                <Typography component="h6" variant='body2'>* VALIDADOR PDF<br /></Typography>
                <Typography component="h6" variant='body2'>y otros...</Typography>
                </CardContent>
              </CardActionArea>
           </Card> 




   {/*
        <div className="system" style={{backgroundColor: 'darkslateblue'}}>
        
        <img src={imagenusher} alt="" /> 
        <h2>USHER</h2>
        <h6>SISTEMA CENTRAL DE ROLES DE USUARIOS Implementación de la primer versión
Mantener el compromiso del equipo.</h6>
        </div>

  */}

    </div>

  

</div>
  )

} 
export default Sistemas;

{/*
  background-color: darkolivegreen;
  background-color: darkslateblue;
  background-color: lightseagreen;
  background-color: indianred;

*/}