import Layout from "../components/Layout";
import { Flex, Text } from "@theme-ui/components";

const About = () => {
  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: "column",

          width: "auto",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            m: 100,
            width: "auto",
            "@media screen and (max-width:720px)": {
              m: 80,
            },
            "@media screen and (max-width:419px)": {
              m: 76,
            },
          }}
        >
          <Text
            sx={{
              fontSize: "1.3rem",
              fontWeight: 700,
              "@media screen and (max-width:720px)": {
                fontSize: "1.1rem",
              },
              "@media screen and (max-width:450px)": {
                fontSize: "1rem",
              },
            }}
          >
            ABOUT HOLY OF HOLIES CONCEPT
          </Text>
          <Text
            sx={{
              color: "#F4CA16",

              mt: "-5px",
              mb: 30,
            }}
          >
            __________________________________________
          </Text>

          <Text
            sx={{
              fontSize: "1.2rem",
              lineHeight: 2,
              "@media screen and (max-width:720px)": {
                fontSize: "1rem",
              },
            }}
          >
            Holy of Holies Concept is a privately owned fully integrated firm
            with specialities in websiite development, 2D and 3D animation,
            brochures, book cover, calender, magazine, social media management,
            videography, and editing prints (Flyers, T-Shirts etc) and many
            more. As part of our essential business strategy, we build strong
            long-term relationships and match our extensive range of services to
            our client needs.{" "}
          </Text>
        </Flex>

        <Flex
          sx={{
            ml: 90,
            flexDirection: "column",
            px: 2,
            "@media screen and (max-width:450px)": {
              mb: 20,
            },
          }}
        >
          <Text
            sx={{
              fontWeight: 700,
              fontSize: "1.2rem",
              mb: 20,
              "@media screen and (max-width:720px)": {
                fontSize: "1.1rem",
              },
            }}
          >
            Philosophy
          </Text>

          <Text
            sx={{
              fontSize: "1.2rem",
              mb: "-70px",
              "@media screen and (max-width:720px)": {
                fontSize: "1rem",
                mb: "-50px",
              },
              "@media screen and (max-width:450px)": {
                fontSize: "1rem",
                lineHeight: 2,
              },
            }}
          >
            Our philosophy is to provide our clients with high quality and
            cost-effective solutions
          </Text>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default About;
