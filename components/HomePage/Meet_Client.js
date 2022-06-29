import { Flex, Box, Text } from "@theme-ui/components";
import Image from "next/image";
import { Clients } from "../../service_data";
import style from "../../styles/Home.module.css";

const Meet_Client = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        py: "120px",
      }}
    >
      <Flex
        sx={{
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            fontSize: "32px",
            "@media screen and (max-width:720px)": {
              fontSize: "25px",
            },
          }}
        >
          Meet Our{" "}
          <span
            style={{
              fontWeight: 700,
            }}
          >
            Clients
          </span>
        </Text>
        <Text
          sx={{
            color: "#F4CA16",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          ____________
        </Text>
      </Flex>

      <Flex
        sx={{
          gap: 20,
          // m: 20,
          // p: 20,
          alignContent: "center",

          "@media screen and (max-width:720px)": {
            gap: 10,
            m: 10,
            // p: 10,
          },
        }}
      >
        {Clients.map((client, index) => (
          <div key={index}>
            <Image
              src={client.client_image}
              alt=""
              width={250}
              height={250}
              className={style.client_image}
            />
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

export default Meet_Client;
