import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBContainer, MDBFooter, MDBRow, MDBCol, MDBIcon } from 'mdbreact';



function Footer() {
    return (


        <MDBFooter color="black" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                <MDBCol md="12">
                    <h5 className="title">Kelly Dingman | 2022</h5>
                    <p>
                    <a className="center" href="https://github.com/kdingman"><MDBIcon fab icon="github" size="3x" /></a>
                    <a className="center" href="https://www.linkedin.com/in/kelly-dingman-a1786769/"><MDBIcon fab icon="linkedin" size="3x"/></a>
                    <a className="center" href="https://twitter.com/kcdinger"><MDBIcon fab icon="twitter-square" size="3x" /></a>
                    </p>
                </MDBCol>
                </MDBRow>
                </MDBContainer>
        </MDBFooter>
    );
};

export default Footer;