import React from 'react';
import personalpic from "../../assets/personalpic.jpg";

function About() {
    return (
        <section className='my-5'>
            <h2 id='about'>About Me</h2>
            <div className='info'>
                <img src={personalpic} className="personalpic" alt="personalpic" />

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
        </section>
    );
}

export default About;