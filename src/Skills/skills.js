import React from 'react';
import {db} from '../firebase/firebase';

export class Skills extends React.Component
{
    constructor(props){
        super(props);
        this.state={
           skills:[]
        };
    }

    componentDidMount(){
        var x = db.ref('/skills');
        x.on('value', (snapshot)=>{
            const data = snapshot.val();
            let newstate = [];
            for (let d in data){
                newstate.push({
                    name:d,
                    value:data[d].value,
                });
            }
            this.setState({
                skills:newstate
            });
        });
    }

    render()
    {
        return(
        <div>this is test
        {this.state.skills.map((e) => {
            return(
                <li key={e.name}>{e.name}</li>
            );
        })}
        </div>
        );
    }

}
export default Skills;