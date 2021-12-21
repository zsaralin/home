import React, { useState } from 'react';
import ExperienceCard from "./ExperienceCard";
import Image from "./Image";
import Modal from "./Modal";

import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const photos = [{
    photo: './Photos/eagle.jpg',
    text:"Penguin + Eagle"
},
    {
        photo: './Photos/stuffedanimal.jpg',
        text:"Porcupine"
    },
    {
        photo: './Photos/koala.jpg',
        text:"koala"
    }
]


const Experience = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <Jumbotron fluid id="art" className="jumbotron jumbotron-fluid m-0">
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        ArtPOOP
                    </h2>
                    <Image setSelectedImg={setSelectedImg} />
                    { selectedImg && (
                        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                    )}
                </Jumbotron>
            </Container>
        </section>
</Jumbotron>
    );
}
 
export default Experience;