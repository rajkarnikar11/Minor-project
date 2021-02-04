import React from 'react'
import '../../App.css'

import Footer from "../Footer";
import Slider from "./Slider";
import "./Slider.scss"
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Bhaktapur from './bhaktapur.jpg'
import Chitwan from './chitwan.jpg'
import Pokhara from './pokhara.jpg'
import './home.css'
import CardSection from './CardSection';


export default function Home() {
    
           
         return(
            <>
                
                <Slider />
                <CardSection />

                <Footer />
            </>    
       
        )
}    
            

