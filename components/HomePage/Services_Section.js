import { Flex, Text, Box, Heading } from "@theme-ui/components";
import Image from "next/image";
import { Service_data } from "../../service_data";
import Services_List from "../Services_List";

const Services_Section = () => {
  console.log(Service_data);
  return (
    <Flex
      sx={{
        flexDirection: "column",
        bg: "#F4CA16",
        height: "60vh",

        mb: 30,
        "@media screen and (max-width:450px)": {
          height: "50vh",
        },
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
            fontSize: "2rem",
            fontFamily: 700,

            "@media screen and (max-width:720px)": {
              fontSize: "1.6rem",
            },
          }}
        >
          Services
        </Text>
        <Text
          sx={{
            color: "#DBA800",
            fontWeight: "bold",
            fontSize: "35px",
            mt: "-15px",
          }}
        >
          _____
        </Text>
      </Flex>

      <Services_List data={Service_data} />
    </Flex>
  );
};

export default Services_Section;
