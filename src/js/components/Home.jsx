import React from "react";
import { Container, Row } from "react-bootstrap";
import NavbarComponent from "./Navbar";
import Jumbotron from "./Jumbotron";

function Home() {
  return (
    <>
      <NavbarComponent />
      <Container className="mt-4">
        <h1>Bienvenido a mi Landing Page</h1>
      </Container>
    </>
  );
}

export default Home;
