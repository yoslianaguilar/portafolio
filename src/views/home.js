import React from 'react';
import { Layout } from '../components/Layout';
import yoslianaguilar from '../images/yoslianaguilar.jpg';

 

export const HomePage = () =>{
  return(
    <Layout>
<div>

       
      <img className='photo' src={yoslianaguilar} alt="yoslianaguilar" width='360px' />   

      <p className='home' >  Soy Developer Front End, Ingeniero Industrial y Técnico en Informática. Me caracterizo por ser una profesional emprendedora, perseverante y con una mentalidad de crecimiento constante. Un ejemplo de lo anterior, es que decidí ingresar al mundo de la programación, lo que me ha permitido potenciar mis skills de auto aprendizaje, trabajo en equipo y rápida adaptación a diferentes situaciones en el contexto laboral. </p>

      <p className='home' >  Pertenezco a la familia de Laboratoria, pues soy una de las miles de mujeres a nivel mundial que decidió emprender un viaje sin retorno de aprendizaje constante, desafiándome a mi misma para adentrarme a un mundo de evolución constante. </p>

      <p className='home'>  Me caracterizo por ser muy responsable, amable, carismática, y muy familiar, en la actualidad me gustaría pertenecer a una empresa que me permita seguir afianzados mis conocimientos en HTML, CSS, JavaScript, Github, React, Node.js y que me permita seguir creciendo personal y profesionalmente. </p>
</div>

    </Layout>
   
  )
}