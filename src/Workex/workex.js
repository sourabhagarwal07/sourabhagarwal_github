import React, { Fragment } from 'react';
import {db} from '../firebase/firebase';
import { Card,Image, CardContent, CardDescription, Grid} from 'semantic-ui-react';
import university from '../images/university_ottawa.png';
import cognizant from '../images/cognizant.png';
import stat from '../images/statistics.png';
import lem from '../images/lemay.png';
import './workex.css';

export class WorkEx extends React.Component
{
    constructor(props){
        super(props);
        this.state={
           work_ex:[]
        };
    }

componentDidMount(){
    var x = db.ref('/work');
    x.on('value', (snapshot)=>{
        const data = snapshot.val();
        let newstate = [];
        for (let d in data){
            newstate.push({
                name:d,
                title:data[d].title,
                start:data[d].start,
                end:data[d].end,
                skills:data[d].skills,
                currently:data[d].currently,
                desc:data[d].description
            });
        }
        this.setState({
            work_ex:newstate
        });
    });
}

    render()
    {
        return(
            <Fragment id="workex_fragment">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L80,229.3C160,203,320,149,480,117.3C640,85,800,75,960,69.3C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                <h1 className="workex_header">Work Experience</h1>
            <Grid id="workex_grid" stackable centered>
            {this.state.work_ex.map((e) =>{
                var card_image;
                var alt_text;
                if(e.name==="University of Ottawa")
                {
                  card_image = university;
                  alt_text = "University of Ottawa";   
                }
                else if(e.name==="Cognizant")
                {
                 card_image = cognizant;
                 alt_text = "Cognizant";
                }
                else if(e.name==="Statistics Canada")
                {
                 card_image = stat;
                 alt_text = "Statistics Canada";
                }
                else if(e.name==="Lemay ai")
                {
                    card_image = lem;
                    alt_text = "Lemay ai";
                }
            return(
                <Grid.Column container floated='right' columns='equal' computer={4} mobile={8}>
                <Card key={e.name}>
                    <Image src={card_image} height="100px" width="100px" alt={alt_text} wrapped ui={false}/>
                <CardContent>
                    <Card.Header>{e.name}</Card.Header>
                    <Card.Meta>{e.title}</Card.Meta>
                    <CardDescription>{e.desc}</CardDescription>
                </CardContent>
                <Card.Content extra>
                    {e.skills}
                </Card.Content>
                </Card>
                </Grid.Column>
            );
        })}
        </Grid>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#0099ff" fill-opacity="1" d="M0,224L120,218.7C240,213,480,203,720,170.7C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </Fragment>
        );
        
            
}}

export default WorkEx;