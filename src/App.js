import React from 'react';
import './App.css';
import {WorkEx} from './Workex/workex'
import {Education} from './Education/education'
import {Skills} from './Skills/skills'

class App extends React.Component {
 render()
 {
   return(
       <div class="mainapp">
         <div class="work">
         <WorkEx />
         </div>
        <div class="education">
         <Education />
         </div>
        <div class="skill">
         <Skills />
         </div>
       </div>
   );
 } 
}
export default App;
