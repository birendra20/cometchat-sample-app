import { Box, Heading, Input, Text } from "@chakra-ui/react";
import { CometChat } from "@cometchat-pro/chat";
import React, { useState } from "react";

export default function Login(props) {
  const [phone, setPhone] = useState("");
  const setUser = props.setUser;
  console.log(props.setUser);
  const handleSubmit = (e) => {
    e.preventDefault();

    var UID = phone;
    var authKey = "76cf7a8e05c8b3e3751912cebfa80f9e037d7318";

    CometChat.login(UID, authKey).then(
      (User) => {
        // console.log("Login Successful:", { User });
        // // User loged in successfully.
        // console.log(User.uid);
        setUser(User);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
        // User login failed, check error and take appropriate action.
      }
    );
  };

  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <Text fontSize="3xl" fontWeight="bolder">
          Login
        </Text>
        <Text fontSize="1xl" fontWeight="bolder">
          Phone Number
        </Text>{" "}
        <Input
          type="tel"
          required
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />{" "}
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
