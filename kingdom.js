 import React from "react";
 
import Lion from './lion.js';
import Deer from './deer.js';
import Fox from './fox.js';
import Horse from './horse.js';
import Tiger from './tiger.js';
import Monkey from './monkey.js';
import Crow from './crow.js';
import Cuckoo from './cuckoo.js';
import Duck from './duck.js';
import Parrot from './parrot.js';
import Peacock from './peacock.js';
import Swan from './swan.js';

 
 class Kingdom extends React.Component {
    render(){
        return(
           <div>
            <h2>Kingdom</h2>

       <Lion/>
       <Deer/>
       <Fox/>
       <Horse/>
       <Tiger/>
       <Monkey/>
       <Crow/>
       <Cuckoo/>
       <Duck/>
       <Parrot/>
       <Peacock/>
       <Swan/>

           </div>
            
   
           
           
          
            )
           }
           
       }
       export default Kingdom;

 