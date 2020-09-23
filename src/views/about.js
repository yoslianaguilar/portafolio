import React from 'react';
import { Layout } from '../components/Layout';
import data from '../images/data.jpg';
import social from '../images/social.jpg';
import trivia from '../images/trivia.jpg';
import hotie from '../images/hotie.jpg';
import burger from '../images/burger.jpg';
import JS from '../images/JS.jpg';
import CSS from '../images/CSS.jpg';
import HTML from '../images/HTML.jpg';
import REACT from '../images/REACT.jpg';
import NODE from '../images/NODE.jpg';
import invision from '../images/invision.jpeg';
import slack from '../images/slack.jpeg';
import github from '../images/github.jpeg';
import firebase from '../images/firebase.jpeg';
import figma from '../images/figma.jpeg';
import '../styles/about.css'



export const AboutPage = () =>{
  return(
    <Layout>
      <div className='about'>
        
        <div className='proyect'>   
        <h2> Proyectos </h2>       
          <a href='link: https://johanazapata.github.io/SCL013-cipher/src/index.html'> <img className="cipher" src={trivia} alt='css'/></a>
          <a href='https://pautrujillo.github.io/SCL013-data-lovers/src/index.html' > <img className="harrypotter" src={data} alt='css'/> </a>
          <a href='https://pmvaldez.github.io/SCL013-social-network/src/index.html'><img className="womantoday" src={social} alt='css'/></a>
          <a href ='https://hootiehoo.web.app/'> <img className="burger" src={burger} alt='css' /></a>
          <a href ='https://hootiehoo.web.app/'> <img className="hootiehoo" src={hotie} alt='css' /></a>
        </div>

            

        <div className='experiencie'>
          <h2> Educación </h2>
            <div className="education"> 
            <li className='empresa'>Bootcamp con certificación como Developer Front-end</li>
            <li className='cargo'>Laboratoria</li> 
            <li>Santiago – Chile </li> <br/>
            
            <li className='empresa'>Ingeniero Industrial</li>
            <li className='cargo'>Instituto Universitario Politecnico “Santiago Mariño”</li>
            <li>Maturín – Estado Monagas</li><br/>
            <li className='empresa'>Técnico Superior Universitario en Informática</li>
            <li className='cargo'>Universidad Politecnica Territorial del Nortes de Monagas "Ludovico
            Silva"</li>
            <li>Caripito – Estado Monagas</li><br/>
            </div>
          
            <h2> Experiencia Profesional </h2>
          
            <div className="jobs">
              <li className='empresa'>Business and Life School. Departamento de Ventas Online</li>
              <li>Enero 2019 – Actualmente. México</li>
              <li className='cargo'>Asesor Comercial</li>
              <p>Funciones: Diseño y publicación de estrategias de marketing en RRSS,
              captación y atención de clientes, cierre de ventas y seguimiento a través
              plataformas remotas.</p> <br/>
              <li className='empresa'>PDVSA Petróleos de Venezuela S.A. Departamento de Planificación, Control y
              Gestión. Gerencia de Mantenimiento</li>
              <li>Octubre 2017 – Septiembre 2019. Venezuela</li>
              <li className='cargo'>Planificador de Proyecto</li>
              <p>Funciones: Planificación y seguimiento planes de mantenimiento, mediante la
              estimación de los recursos requeridos como; planes de contratación, procura,
              coordinación logística.</p><br/>
              <li className='empresa'>PDVSA Petróleos de Venezuela S.A. Departamento de Planificación, Control y
              Gestión. Gerencia de Mantenimiento</li>
              <li>Enero 2010 – Octubre 2017. Venezuela</li>
              <li className='cargo'>Analista de Presupuesto</li>
              <p>Funciones: Preparar y cargar en sistema Sap el presupuesto, analizar y
              presentar los indicadores de gestión, elaborar y controlar el Plan de
              Capitalización, realizar seguimiento al perfil de desembolso de la gerencia de
              Mantenimiento.</p><br/>
            </div>
          </div>

            <h2> Habilidades y Herramientas </h2>  
          
          <div className='habilidades'>   
               
            <img src={HTML} alt='html'/>
            <img src={CSS} alt='css'/>
            <img src={JS} alt='js'/>
            <img src={REACT} alt='react'/>
            <img src={NODE} alt='node'/>
            <img src={firebase} alt='node'/>
            <img src={github} alt='node'/>
            <img src={slack} alt='node'/>
            <img src={invision} alt='node'/>
            <img src={figma} alt='node'/>
            
          </div> 
      
      <di>
        <h2>Intereses</h2>
      </di>
      </div>
      
    </Layout>
  )
}