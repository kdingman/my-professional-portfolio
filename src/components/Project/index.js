import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBIcon } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';


function Project (props) {
    return (
            <MDBCard style={{ width: '18rem' }}>
            <MDBCardImage src={props.image} alt='...' position='top' />
            <MDBCardBody>
            <MDBCardText>
                {props.name}
                <a className="icon" href={props.github}><MDBIcon fab icon="github" /></a>
                <a className="icon" href={props.live}><MDBIcon icon="code" /></a>
            </MDBCardText>
            </MDBCardBody>
        </MDBCard>


        // <div className="projects">
        //     <div className="projectContainer">
        //         <h3 className="projectTitle">{props.name}</h3>
        //             <img src={require(`../../assets/${props.image}.png`)} alt="myprojects" />
        //             <a className="icon" href={props.github}><MDBIcon fab icon="github" /></a>
        //             <a className="icon" href={props.live}><MDBIcon icon="code" /></a>
        //     </div>
        // </div>
    );
};

export default Project;