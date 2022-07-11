import React from "react";
import Typist from "react-typist";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const MainBody = React.forwardRef(
    ({ gradient, title, message, icons }, ref) => {
        return (
            <Jumbotron
                fluid
                id="home"
                style={{
                    background: `linear-gradient(136deg,${gradient})`,
                    backgroundSize: "1200% 1200%",
                }}
                className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
            >
                <div id = "stars"/>
                <Container className="text-center" style = {{}}>
                    <h1 ref={ref} className="display-1" style = {{}}>
                        {title}
                    </h1>
                    <Typist className="lead typist" cursor={{ show: false }}>
                        {" "}
                        {message}
                    </Typist>
                    <div className="p-5">
                        {icons.map((icon, index) => (
                            <a
                                key={`social-icon-${index}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={icon.url}
                                aria-label={`My ${icon.image.split("-")[1]}`}
                            >
                                <i className={`fab ${icon.image}  fa-3x socialicons`} />
                            </a>
                        ))},

                    </div >
                    {/*<a*/}
                    {/*    className="btn btn-outline-light btn-lg "*/}
                    {/*    href="/../../editable-stuff/SaralinZassman_Resume.pdf"*/}
                    {/*    role="button"*/}
                    {/*    target="_blank"*/}
                    {/*    aria-label="Resume"*/}
                    {/*    style = {{margin: '5px'}}*/}
                    {/*>*/}
                    {/*    Resume*/}
                    {/*</a>*/}
                    <a
                        className="btn btn-outline-light btn-lg "
                        href="#projects"
                        role="button"
                        aria-label="Portfolio"
                        style = {{margin: '5px'}}
                    >
                        Portfolio
                    </a>
                    <a
                        className="btn btn-outline-light btn-lg "
                        href="#leadership"
                        role="button"
                        aria-label="Leadership"
                        style = {{margin: '5px'}}
                    >
                        Projects
                    </a>
                    <a
                        className="btn btn-outline-light btn-lg "
                        href="#art"
                        role="button"
                        aria-label="Art"
                        style = {{margin: '5px'}}
                    >
                        Art
                    </a>
                    <a className="btn btn-outline-light btn-lg"
                    role="button"
                       style = {{margin: '5px'}}
                    href="mailto:zsaralin@gmail.com"> Email me </a>
                </Container>
            </Jumbotron>
        );
    }
);

export default MainBody;
