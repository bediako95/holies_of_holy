import { Flex, Box, Text } from "@theme-ui/components";
import Image from "next/image";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <Flex
      sx={{
        mt: "20%",
        justifyContent: "space-around",
        bg: "black",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          width: "20%",
          lineHeight: 3,
        }}
      >
        <Text
          sx={{
            color: "#F4CA16",
            fontWeight: 700,
          }}
        >
          Tech Solutions
        </Text>
        <Text
          sx={{
            color: "white",
          }}
        >
          A creative and technological hub focusing on providing quality and
          cost effective solutions
        </Text>
      </Flex>

      <Flex
        sx={{
          flexDirection: "column",
          lineHeight: 3,
        }}
      >
        <Text
          sx={{
            color: "#F4CA16",
            fontWeight: 700,
          }}
        >
          Services
        </Text>
        <Text
          sx={{
            color: "white",
          }}
        >
          Social Media Management
        </Text>
        <Text
          sx={{
            color: "white",
          }}
        >
          Web development
        </Text>
        <Text
          sx={{
            color: "white",
          }}
        >
          SVideography & Editing
        </Text>
        <Text
          sx={{
            color: "white",
          }}
        >
          2D & 3D Animation
        </Text>
        <Text
          sx={{
            color: "white",
          }}
        >
          Printing
        </Text>
        <Text
          sx={{
            color: "white",
          }}
        >
          Magazines, Brochures, Calenders{" "}
        </Text>
      </Flex>

      <Flex
        sx={{
          flexDirection: "column",
          lineHeight: 3,
        }}
      >
        <Text
          sx={{
            color: "#F4CA16",
            fontWeight: 700,
          }}
        >
          Company
        </Text>
        <Text
          sx={{
            color: "white",
          }}
        >
          About us
        </Text>
        <Text
          sx={{
            color: "white",
          }}
        >
          Mission
        </Text>
        <Text
          sx={{
            color: "white",
          }}
        >
          Contact
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
