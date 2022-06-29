import { Flex, Box, Text } from "@theme-ui/components";
import Image from "next/image";
import { services_information } from "../../service_data";
import ImageSlider from "../ImageSlider";

const Service_Detail = ({ desc, infor, image }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",

        py: "120px",
        px: "20px",
        bg: "white",

        gap: "0%",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          color: "black",
          maxWidth: "700px",
          mx: "auto",
        }}
      >
        <Text
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: 500,
            p: 3,
            "@media screen and (max-width:720px)": {
              fontSize: "1.3rem",
              fontWeight: 500,
              p: 1.5,
            },
          }}
        >
          {desc}
        </Text>
        <Text
          sx={{
            m: "-1% 0% 5% 0%",
            textAlign: "center",
            color: "#F4CA16",
            fontWeight: "bold",
          }}
        >
          ____________________________
        </Text>
        <Text
          sx={{
            fontSize: "1.3rem",
            lineHeight: 2,
            textAlign: "center",

            "@media screen and (max-width:720px)": {
              fontSize: "1.1rem",
            },
          }}
        >
          {infor}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Service_Detail;
