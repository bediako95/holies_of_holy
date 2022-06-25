import { Flex, Text, Box, Heading } from "@theme-ui/components";
import Image from "next/image";
import { Service_data } from "../../service_data";
import Services_List from "../../components/Services_List";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";
import { server } from "../../components/server";

const Services = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: "column",
          bg: "#F4CA16",
          height: "100vh",
          mb: "-20%",
        }}
      >
        <Flex
          sx={{
            height: "45vh",
            textAlign: "center",

            flexDirection: "column",
          }}
          className={styles.HomeImage}
        >
          <Text
            sx={{
              color: "white",
              mt: "10%",
              mb: 2,
              fontSize: "2.5rem",
              fontWeight: "bold",
              textDecoration: "underline",
              "@media screen and (max-width:1024px)": {
                fontSize: "2rem",
                lineHeight: 2,
              },
              "@media screen and (max-width:720px)": {
                fontSize: "1.5rem",
                lineHeight: 2,
              },
              "@media screen and (max-width:447px)": {
                fontSize: "1.2rem",
                lineHeight: 2,
                mt: "20%",
              },
            }}
          >
            Our passion is your success
          </Text>
          <Text
            sx={{
              color: "white",
              fontSize: "1.3rem",
              m: "1% 13% 10%",
              "@media screen and (max-width:720px)": {
                fontSize: "1rem",
                lineHeight: 1.5,
              },
            }}
          >
            Design your succcess around our talent. We are focused on offering
            the best of service. Our passion is your success.We only work to
            theh highest standard to achive exceptional quality and finish
            across the service we provide
          </Text>
        </Flex>

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
              fontWeight: 500,
              "@media screen and (max-width:720px)": {
                fontSize: "20px",
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

        <Services_List data={data} />
      </Flex>
    </Layout>
  );
};

export default Services;

export async function getServerSideProps() {
  const url = server;
  console.log(url);
  const res = await fetch(`${url}/api/services`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
