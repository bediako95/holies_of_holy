import { Flex, Text, Box, Heading } from "@theme-ui/components";
import Image from "next/image";
import { Service_data } from "../../service_data";
import Services_List from "../../components/Services_List";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";
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
              mt: "5%",
              fontSize: "2.5rem",
              "@media screen and (max-width:600px)": {
                fontSize: "1.5rem",
                lineHeight: 2,
              },
            }}
          >
            Our passion is your success
          </Text>
          <Text
            sx={{
              color: "white",
              fontSize: "1.3rem",
              m: "1% 13% 0%",
              "@media screen and (max-width:600px)": {
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
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
