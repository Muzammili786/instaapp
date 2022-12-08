import React, { useState } from "react";
import "./comment.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaAngleLeft } from "react-icons/fa";
import Coment from "../../components/coments";
import FormFloatingTextareaExample from '../../components/searchbar';


const Comments = () => {

  const [Comments, setComments] = useState([
    {
      username: "Muzammil Iqbal",
      shotdisc: "Original Audion",
    },
    {
      username: "Husnan Rasheed",
      shotdisc: "Have a good",
    },
    {
        username: "Agha Ahmed",
      },
  ]);


return (
    <>
    <div className="naav">
    <Navbar bg="black">
        <Container>
          <Navbar.Brand href="/"><FaAngleLeft /></Navbar.Brand>
          <h3>Comments</h3>
          <Nav.Link href="#deets"></Nav.Link>
        </Container>
      </Navbar>

      <div className="timeline">
        {Comments.map((comment) => (
          <Coment
            username={comment.username}
            shotdisc={comment.shotdisc}
          />
        ))}
      </div>
      <div className="timeline">
          <FormFloatingTextareaExample />
      </div>

    </div>
    </>
)
}

export default Comments;