import { Flex, Box, Text } from "@theme-ui/components";
import Image from "next/image";
import creative from "../../assets/creative.png";
import styles from "../../styles/Home.module.css";
const LandPage = () => {
  return (
    <Flex
      sx={{
        height: "50vh",
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
            fontSize: "48px",
            fontWeight: 700,

            lineHeight: "45px",
            mb: 30,
            color: "white",
            textAlign: "center",
          }}
        >
          A Creative hub of excellence
        </Text>
        <Text
          sx={{
            width: "60%",
            lineHeight: "35px",
            fontSize: "1.2rem",
            color: "white",
            textAlign: "center",
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
