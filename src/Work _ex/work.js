import React from 'react';
import fire from '../firebase/firebase';

class Workex extends React.Component{

    constructor()
    {
        super();
        this.state={
            email:'sourabh.max01@gmail.com',
            password:'sourabh0795'
        };
        
    }

    test = (e) =>
    {
fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((res)=>{
    console.log("user in firebase",res)
}).catch((e)=>{
    console.log("This is the error:"+e)
})
    }

render(){
    return(
    <div><button onClick={this.test}>Click Me</button></div>
    );
}
}
export default Workex;



