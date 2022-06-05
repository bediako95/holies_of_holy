import { Flex, Text, Box, Heading } from "@theme-ui/components";

const Services_Section = ({ image, desc }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        bg: "#F4CA16",
        height: "40vh",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          textAlign: "center",
          mb: 50,
          p: 20,
        }}
      >
        <Text
          sx={{
            fontSize: "32px",
          }}
        >
          Services
        </Text>
        <Text
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "30px",
            mt: "-15px",
          }}
        >
          _____
        </Text>
      </Flex>

      <Flex
        sx={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      ></Flex>

      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <Text>{image}</Text>
        <Text>{desc}</Text>
      </Flex>
    </Flex>
  );
};

export default Services_Section;
