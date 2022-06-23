import Layout from "../components/Layout";
import { Flex, Text } from "@theme-ui/components";

const Mission = () => {
  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: "column",
          p: 20,
          m: "0% 10% -15% 10%",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            m: 100,
            width: "auto",
            "@media screen and (max-width:720px)": {
              mx: 30,
            },
          }}
        >
          <Text
            sx={{
              fontSize: "1.3rem",
              fontWeight: 700,
              "@media screen and (max-width:720px)": {
                fontSize: "1.2rem",
              },
            }}
          >
            OUR MISSION
          </Text>
          <Text
            sx={{
              color: "#F4CA16",

              mt: "-5px",
              mb: 30,
            }}
          >
            _______________________
          </Text>

          <Text
            sx={{
              fontSize: "1.2rem",
              lineHeight: 2,
              "@media screen and (max-width:720px)": {
                fontSize: "1rem",
                textAlign: "center",
              },
            }}
          >
            Holy of Holies Concept is a privately owned fully integrated firm to
            with the mission of provide quality branding solutions to our
            clients to help their businesses to grow significantly
          </Text>
        </Flex>

        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            m: 100,
            mt: "-1%",
            width: "auto",
            "@media screen and (max-width:720px)": {
              mx: 5,
            },
          }}
        >
          <Text
            sx={{
              fontSize: "1.3rem",
              fontWeight: 700,
              "@media screen and (max-width:720px)": {
                fontSize: "1.2rem",
              },
            }}
          >
            OUR VISION
          </Text>
          <Text
            sx={{
              color: "#F4CA16",

              mb: 30,
            }}
          >
            _______________________
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
            To be the number one and top branding Agency in the world
          </Text>
        </Flex>

        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            m: 100,
            mt: "-1%",
            width: "auto",
            "@media screen and (max-width:720px)": {
              mx: 30,
            },
          }}
        >
          <Text
            sx={{
              fontSize: "1.3rem",
              fontWeight: 700,
              "@media screen and (max-width:720px)": {
                fontSize: "1.2rem",
              },
            }}
          >
            OUR CORE VALUES
          </Text>
          <Text
            sx={{
              color: "#F4CA16",

              mb: 30,
            }}
          >
            _______________________
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
            Our core values are excellence, passion, and quality delivery
          </Text>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Mission;
