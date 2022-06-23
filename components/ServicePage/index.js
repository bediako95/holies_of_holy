import { Flex, Box, Text } from "@theme-ui/components";
import Image from "next/image";
import { services_information } from "../../service_data";
import ImageSlider from "../ImageSlider";

const Service_Detail = ({ desc, infor, image }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        height: "80vh",
        bg: "white",
        p: "5%",
        mb: "-20%",
        gap: "20%",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          color: "black",
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
              px: 3,
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
