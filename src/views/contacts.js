import React from 'react';
import { Layout } from '../components/Layout';
import '../styles/main.css'

export const ContactsPage = () =>{
  return(
    <Layout>
      <div className='information'>
        <i class="fas fa-id-card-alt"></i>
        <h3 className='contact'>¡Contáctame!</h3>
      <p class="fas fa-envelope-open-text"> yoslianaguilar@gmail.com</p>
      <p class="fas fa-map-marker-alt"> Santiago centro, Santiago</p>
      <p class="fas fa-phone-volume"> +56-931-08-2593</p>
      <p class="fab fa-github"> yoslianaguilar</p>
      <p class="fab fa-linkedin"> yoslianaguilar</p>
      </div>
            
    </Layout>
  )
}