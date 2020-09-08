import React from 'react';
import { Layout } from '../components/Layout';
import yoslianaguilar from '../images/yoslianaguilar.jpg';
 

export const HomePage = () =>{
  return(
    <Layout>

       
      <img src={yoslianaguilar} alt="yoslianaguilar" width='220px' />    
      <p>Soy Developer Front End, Ingeniero Industrial y Técnico en Informática. Me caracterizo por ser una profesional emprendedora, perseverante y con una mentalidad de crecimiento constante. Un ejemplo de lo anterior, es que decidí ingresar al mundo de la programación, lo que me ha permitido potenciar mis skills de auto aprendizaje, trabajo en equipo y rápida adaptación a diferentes situaciones en el contexto laboral.</p>
    </Layout>
  )
}