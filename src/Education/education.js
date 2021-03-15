import React, { Fragment } from 'react';
import {db} from '../firebase/firebase';
import { Card,Image, CardContent, CardDescription, Grid,Segment } from 'semantic-ui-react';
import university from '../images/university_ottawa.png';
import cognizant from '../images/cognizant.png';
import stat from '../images/statistics.png';
import lem from '../images/lemay.png';

class Education extends React.Component
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
            <Fragment>
            <Segment>
            <Grid>
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
                <Grid.Column container floated='right' columns='equal' width={4}>
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
        </Segment>
        </Fragment>
        );
        
            
}}

export default Education;