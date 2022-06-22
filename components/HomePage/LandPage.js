import { Flex, Box, Text } from "@theme-ui/components";
import Image from "next/image";
import creative from "../../public/service_assets/creative.png";
import styles from "../../styles/Home.module.css";
const LandPage = () => {
  return (
    <Flex
      sx={{
        height: "55vh",
        flexDirection: "row",
        alignItems: "center",
      }}
      className={styles.HomeImage}
    >
      <Flex
        sx={{
          flexDirection: "column",
          p: 10,
          alignItems: "center",
        }}
      >
        <Text
          sx={{
            fontSize: "50px",
            fontWeight: 700,

            lineHeight: "45px",
            mb: 30,
            color: "white",
            textAlign: "center",

            "@media screen and (max-width:1024px)": {
              fontSize: "40px",
            },
            "@media screen and (max-width:720px)": {
              fontSize: "30px",
              mt: 40,
            },
          }}
        >
          A Creative hub of excellence
        </Text>
        <Text
          sx={{
            width: "60%",
            lineHeight: "35px",
            fontSize: "1.6rem",
            color: "white",
            textAlign: "center",
            "@media screen and (max-width:1024px)": {
              fontSize: "1.4rem",
              width: "70%",
            },
            "@media screen and (max-width:720px)": {
              fontSize: "1.2rem",
              lineHeight: "30px",
            },
          }}
        >
          A creative hub providing wide varieties of services such as
          photography, t-shirt printing, flyer printing, 2D and 3D animation,
          web development and many more. Holy of Holies Concepts is your number
          one hub for creatives
        </Text>
      </Flex>
    </Flex>
  );
};

export default LandPage;
