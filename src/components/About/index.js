import React from 'react';
import bootstrap from "bootstrap";
import personalpic from "../../assets/personalpic.jpg";

function About() {
    return (
        <section className='title'>
            <h1 class="about-me justify-content-center">a little bit ABOUT me</h1>
            <div className='row justify-content-center'>
                <div className='col-10' id='about-me'>
                    <img class="mb-5" src={personalpic} alt="personalpic" />
                    <p class="justify-content-center">
                        Oh Hello!
                    </p>
                    <p>    
                        My name is Kelly Dingman. I live in Zionsville, IN with my husband, two children and a very spastic rescue dog.
                    </p>
                    <p>
                        I have a Bachelor of Arts in Telecommunications from Ball State University, Chirp Chrip!
                    </p>
                    <p>
                        I started my career in the promotions department at Emmis Communications with WIBC and WYXB. 
                        After radio, I ended up in the medical field and work as a billing coordinator doing medical billing.
                    </p>
                    <p>
                        I am looking forward to change of pace in my career and ready to put my creative side back to work.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;