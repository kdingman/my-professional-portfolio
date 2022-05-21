import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';


function Project (props) {
    return (
            
                <MDBCard style={{ width: '18rem' }}>
                    <MDBCardImage className="img" src={require(`../../assets/${props.image}.png`)} alt="" position='top'/>
                <MDBCardBody>
                {<h3 className="text-center">{props.name}</h3>}
                <br></br>
                <MDBCardText>
                    {<p>{props.description}</p>}
                    <a className="icon" href={props.github}><MDBIcon fab icon="github" size="2x" /> </a>
                    <a className="icon" href={props.live}><MDBIcon fab icon="audible" size="2x" /></a>
                </MDBCardText>
                </MDBCardBody>
                </MDBCard> 
           
    );
};

export default Project;