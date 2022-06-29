import { Flex, Text, Box } from "@theme-ui/components";
import Layout from "../components/Layout";
import FormComponent from "../components/FormComponent";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <Layout>
      <Flex
        sx={{
          justifyContent: "space-between",
          gap: 25,

          width: "100%",

          "@media screen and (max-width:1024px)": {
            flexWrap: "wrap",
          },
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            m: "5% 10% 5% 5%",

            width: "90%",

            "@media screen and (max-width:1024px)": {},
            width: "100%",
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",

              width: "100%",
              "@media screen and (max-width:720px)": {
                width: "80%",
              },
            }}
          >
            <Text
              sx={{
                textAlign: "center",
                fontSize: "1.3rem",
                fontWeight: 700,
              }}
            >
              CONTACT US
            </Text>
            <Text
              sx={{
                color: "#F4CA16",

                mt: "-5px",
                mb: 30,
              }}
            >
              __________________
            </Text>
          </Flex>

          <Flex
            sx={{
              flexDirection: "column",
              m: "0% 0% 0% 5%",
            }}
          >
            <Flex
              sx={{
                flexDirection: "column",
                lineHeight: 3,
              }}
            >
              <Text
                sx={{
                  fontWeight: 700,
                  textDecoration: "underline",
                  fontSize: "1.2rem",
                  "@media screen and (max-width:720px)": {
                    fontSize: "1.1rem",
                  },
                }}
              >
                Address
              </Text>
              <Text sx={{}}>Ablekuma NIC Top Accra, Ghana</Text>
              <Text>Tel : 0551655728</Text>
              <Text>Email : holyofholiesconcepts@gmail.com</Text>
              <Text>Instagram : holyofholiesconcepts_</Text>
            </Flex>

            <Flex
              sx={{
                flexDirection: "column",
                lineHeight: 3,
                fontSize: "1.1rem",
                mt: 50,
                "@media screen and (max-width:720px)": {
                  fontSize: "1rem",
                },
              }}
            >
              <Text
                sx={{
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  textDecoration: "underline",
                  "@media screen and (max-width:720px)": {
                    fontSize: "1.1rem",
                  },
                }}
              >
                Working Hours
              </Text>
              <Text>
                Mondays - Fridays{" "}
                <span
                  style={{
                    marginLeft: 40,
                  }}
                >
                  8:00am-6:00pm
                </span>
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Box
          sx={{
            border: "1px solid  #ccc",
            boxShadow: " 3px 0px 5px #ccc",
            px: "5%",
            py: "3%",
            m: "5% 15% 5% 5%",
            width: "100%",

            "@media screen and (max-width:1024px)": {},
            width: "80%",
          }}
        >
          <FormComponent />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Contact;
