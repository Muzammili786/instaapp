import "./profile.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import GroupExample from "../../components/gridimg";

const Profile = () => {
return (
    <>
    <div className="naav">
    <Navbar bg="black">
        <Container>
          <Navbar.Brand href="/"><FaAngleLeft /></Navbar.Brand>
          <h3>Muzammil.pm</h3>
          <Nav.Link href="#deets"></Nav.Link>
        </Container>
      </Navbar>
      <div className="timeline">
        <Container>
      <div className="main">
        <img
          className="image"
          src="https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/640X309/mt-15-2-062e4b1493f453.jpg"
        />
        <ul>
          <li>
            <b>13.7 K</b>
          </li>
          <li>
            <b>2.2 M</b>
          </li>
          <li>
            <b>2</b>
          </li>
          <br></br>
          <li>Post</li>
          <li>Followers</li>
          <li>Following</li>
        </ul>
      </div>
      <div className="text">
        <div className="text1">
          <h3>
            <strong>Muzammil Iqbal</strong>
          </h3>
          <h3>Developer</h3>
          <p>
          Software development is a process of writing and maintaining the source code, but in a broader sense, it includes all that is involved 
          </p>
        </div>
      </div>
      <GroupExample />
        </Container>
      </div>
    </div>
    </>
)
}

export default Profile;