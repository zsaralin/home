import React, { useState, useEffect, Profiler } from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Skeleton from "react-loading-skeleton";
import chatbot from "./886_Chatbot_Paper8_pages.pdf"
import coral from "./Written-Report-Zassman-665.pdf"
import mindful from "./CS889_PaperFinal.pdf"
import network from "./CS_854_Group_Project_Paper__Copy_.pdf"
import {Jumbotron} from "react-bootstrap";

const LeadershipCard = ({ value }) => {
    const {
        name,
        description,
        svn_url,
    } = value;
    return (
        // <div
        //     id="leadership"
        //     className="jumbotron jumbotron-fluid m-0"
        //     style={{ backgroundColor: "white" }}
        // >
        //     <div className="container container-fluid">
        //         <h2 className="display-4 pb-5 text-center">{
        //             heading}</h2>
        //         <Col md={9}>
        //             <div className="">
        //                 <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        //                     <Card.Body>
        //                         <Card.Title as="h5">Exploring the Impact of User Interface Design in
        //                             the Human-Chatbot Interaction </Card.Title>
        //                         <Card.Text> Course Project for Affective Computing (CS 886 - Advanced Topics in Artificial Intelligence) </Card.Text>
        //                         {chatbot? <CardButtons svn_url={chatbot} /> : <Skeleton count={2} />}
        //                         <hr />
        //                     </Card.Body>
        //                 </Card>
        //
        //                 <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        //                     <Card.Body>
        //                         <Card.Title as="h5">Why people are not mindful: An explorative interview study </Card.Title>
        //                         <Card.Text> Course Project for Publishing HCI Research (CS 889 - Advanced Topics in Human-Computer Interaction) </Card.Text>
        //                         {mindful? <CardButtons svn_url={mindful} /> : <Skeleton count={2} />}
        //                         <hr />
        //                     </Card.Body>
        //                 </Card>
        //
        //                 <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        //                     <Card.Body>
        //                         <Card.Title as="h5">The Hyperbolic Structure of Corals </Card.Title>
        //                         <Card.Text> Course Project for Synergy between Computer Science and Biology (CS 898 - Advanced Special Topics in Computer Science) </Card.Text>
        //                         {coral ? <CardButtons svn_url={coral} /> : <Skeleton count={2} />}
        //                         <hr />
        //                     </Card.Body>
        //                 </Card>
        //
        //                 <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        //                     <Card.Body>
        //                         <Card.Title as="h5">A Comparative Analysis of Network Overhead Produced By Popular
        //                             Software-Defined Networking Controllers
        //                         </Card.Title>
        //                         <Card.Text> Course Project for import mindful from Experimental Performance Evaluation (CS 854 - Advanced Topics in Computer Systems) </Card.Text>
        //                         {network ? <CardButtons svn_url={network} /> : <Skeleton count={2} />}
        //                         <hr />
        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //         </Col>
        //     </div>
        // </div>
        <Col md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                    <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
                    <Card.Text>{(!description)?"":description || <Skeleton count={3} />} </Card.Text>
                    {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
                    <hr />
                </Card.Body>
            </Card>
        </Col>
    );
};
const CardButtons = ({ svn_url }) => {
    return (
        <>
            <a href={svn_url} target=" _blank" className="btn btn-outline-secondary" >
                PDF
            </a>
        </>
    );
};

export default LeadershipCard;
