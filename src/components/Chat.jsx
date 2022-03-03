import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { ChatEngine } from "react-chat-engine";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const Chat = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };
//   useEffect(() => {
//     if (!user) {
//       navigate("/");
//       return null;
//       fetch('https://api.chatengin.io/user/me')
//     }
//   }, [user]);
  console.log("user in....", user);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/chat">Live Chat</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ChatEngine
        height="calc(100vh-60px)"
        projectID="e40f984b-e116-4588-82bd-f9d0e8808a2a"
        userName="."
        userSecret="."
      />
    </>
  );
};
export default Chat;
