import React from 'react'
// import Home from './Home'
import   './Intro.css'

function Intro (){
    return(
        <div className="bg">
           <h1>    </h1>
            <div className="box">
                
                
                <h1 className='adv'>Adventure Awaits!!!</h1>
                <ul className="space">
                    <li className="buttons" ><a href="signup">SignUp</a></li>
                    <li className="buttons" ><a href="login">LogIn</a></li>
                    <li className="buttons" ><a href="home">Skip >></a></li>
                </ul>
            </div>
        </ div>
    )
}
export default Intro;