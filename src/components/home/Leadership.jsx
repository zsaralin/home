import React, { useState, useEffect, Profiler } from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import LeadershipCard from "./LeadershipCard";
import Skeleton from "react-loading-skeleton";
import chatbot from "./886_Chatbot_Paper8_pages.pdf"

import coral from "./Written-Report-Zassman-665.pdf"
import mindful from "./CS889_PaperFinal.pdf"
import network from "./CS_854_Group_Project_Paper__Copy_.pdf"
import {Jumbotron} from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const leadArr = [
    {
        name: 'Exploring the Impact of User Interface Design in the Human-Chatbot Interaction',
        description: 'Course Project for Affective Computing (CS 886 - Advanced Topics in Artificial Intelligence)',
        svn_url: chatbot},
    {
        name: 'Why people are not mindful: An explorative interview study',
        description: 'Course Project for Publishing HCI Research (CS 889 - Advanced Topics in Human-Computer Interaction)',
        svn_url: mindful},
    {
        name: 'The Hyperbolic Structure of Corals',
        description: 'Course Project for Synergy between Computer Science and Biology (CS 898 - Advanced Special Topics in Computer Science)',
        svn_url: coral},
    {
        name: 'A Comparative Analysis of Network Overhead Produced By Popular Software-Defined Networking Controllers',
        description: 'Course Project for Experimental Performance Evaluation (CS 854 - Advanced Topics in Computer Systems) ',
        svn_url: network},
]
const Leadership = ({ heading, message }) => {
  return (
      <Jumbotron fluid id="leadership" className="bg-light m-0">
        <Container className="">
          <h2 className="display-4 pb-5 text-center">{heading}</h2>
          <Row>
              {leadArr.length
                  ?
                  leadArr.map((project, index) => (
                      <LeadershipCard
                          key={`leadership-card-${index}`}
                          id={`leadership-card-${index}`}
                          value={project}
                      />
                  )):console.log(leadArr)
              }
          </Row>
        </Container>
      </Jumbotron>
  );
};


export default Leadership;
