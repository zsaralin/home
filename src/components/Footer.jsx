import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        Made with lots of <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/zsaralin"
          aria-label="My GitHub"
        >
          Saralin
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
