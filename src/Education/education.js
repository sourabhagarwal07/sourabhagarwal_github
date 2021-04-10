import React, { Fragment } from 'react';
import { db } from '../firebase/firebase';
import { Card,Image, CardContent, Grid} from 'semantic-ui-react';
import './education.css'

export class Education extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            education_university: []
        };
    }

    componentDidMount() {
        var y = db.ref('/study');
        y.on('value', (snapshot) => {
            const edu_data = snapshot.val();
            let newstate_edu = [];
            for (let ed in edu_data) {
                newstate_edu.push({
                    name: ed,
                    course: edu_data[ed].course,
                    start: edu_data[ed].start,
                    end: edu_data[ed].end,
                    currently: edu_data[ed].currently,
                    level: edu_data[ed].level
                });
            }
            this.setState({
                education_university: newstate_edu
            });
        });
        console.log("this array"+this.state.education_university);
    }

    render() {
        return (
            <Fragment id="education_fragment">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#0099ff" fill-opacity="1" d="M0,256L80,229.3C160,203,320,149,480,117.3C640,85,800,75,960,69.3C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                <h1 className="education_header">Education</h1>
            <Grid id="education_grid" stackable>
            {this.state.education_university.map((e) =>{
            return(
                <Grid.Column container floated='left' computer={4} mobile={2}>
                <Card key={e.name}>
                    <Image src="" height="100px" width="100px" alt="no_image" wrapped ui={false}/>
                <CardContent>
                    <Card.Header>{e.name}</Card.Header>
                    <Card.Meta>{e.course}</Card.Meta>
                </CardContent>
                </Card>
                </Grid.Column>
            );
        })}
        </Grid>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#0099ff" fill-opacity="1" d="M0,224L120,218.7C240,213,480,203,720,170.7C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </Fragment>
        );
        }
}
export default Education;       