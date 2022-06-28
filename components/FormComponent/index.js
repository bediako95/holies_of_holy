import {
  Label,
  Box,
  Input,
  Button,
  Flex,
  Textarea,
  Text,
} from "@theme-ui/components";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { server } from "../server";

const Index = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //validate data

  //send email function
  const SendEmail = async (e) => {
    const url = server;
    console.log(`Url of submit function is ${url}`);
    e.preventDefault();
    console.log("Mail sent");

    const data = {
      email,
      fullname,
      subject,
      message,
    };
    console.log(url);
    console.log(data);

    axios
      .post(`${url}/api/email`, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        alert("Send message");

        console.log(`Status:${res.status}`);
        //console.log(`Body:${res.data}`);
      })
      .catch((e) => console.log(`The error : ${e}`));
  };

  return (
    <Box as="form" onSubmit={(e) => e.preventDefault()}>
      <Box
        sx={{
          textAlign: "center",
          alignContent: "center",
          mb: "5%",
        }}
      >
        <Text
          sx={{
            fontSize: "1.3rem",
            fontWeight: 700,
            textDecoration: "underline",
          }}
        >
          Send a message
        </Text>
      </Box>
      <Label htmlFor="fullname">
        Fullname
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      </Label>

      <Input
        type="text"
        required
        value={fullname}
        name="fullname"
        mb={3}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
      />

      <Label htmlFor="email">
        Email
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      </Label>
      <Input
        type="email"
        name="email"
        required
        value={email}
        mb={3}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <Label htmlFor="subject">
        Subject
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      </Label>

      <Input
        name="subject"
        required
        value={subject}
        type="text"
        mb={3}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      />

      <Label htmlFor="message">
        Message
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      </Label>

      <Textarea
        name="message"
        required
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        rows={6}
        mb={3}
      />
      <Flex mb={3}></Flex>

      <Button
        sx={{
          bg: "#F4CA16",
          width: "100%",
          cursor: "pointer",
        }}
        onClick={SendEmail}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default Index;
