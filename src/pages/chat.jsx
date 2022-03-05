import React from "react";
import {Helmet} from "react-helmet";
import ChatComponrt from "../components/Chat";


const Chat = () => {
  return (
    <>
    <Helmet>
    <title>messange</title>
    </Helmet>
      <ChatComponrt />
    </>
  );
};
export default Chat;
