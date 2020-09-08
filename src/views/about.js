import React from 'react';
import { Layout } from '../components/Layout';
import css from '../images/css.png'

export const AboutPage = () =>{
  return(
    <Layout>
      Proyectos 

      GitHub


      Cococimientos     
      <img src={css} alt='css' width='50px' /> 
    </Layout>
  )
}