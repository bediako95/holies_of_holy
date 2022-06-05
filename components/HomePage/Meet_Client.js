import { Flex, Box, Text } from "@theme-ui/components";
import Image from "next/image";
import person from "../../assets/person.jpg";
import person_1 from "../../assets/person_1.jpg";
import person_2 from "../../assets/person_3.jpg";

const Meet_Client = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        height: "30vh",
        p: 10,
      }}
    >
      <Flex
        sx={{
          p: 10,
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            fontSize: "32px",
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
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: 80,
          m: 40,
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box></Box>
          <Image
            style={{
              borderRadius: "50%",
            }}
            src={person}
            alt="Image"
            width={350}
            height={300}
          />
          <Text
            sx={{
              mt: 30,
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            SMITH ALAN
          </Text>
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              borderRadius: "50%",
            }}
            src={person_1}
            alt="Image"
            width={350}
            height={300}
          />
          <Text
            sx={{
              mt: 30,
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            SMITH ALAN
          </Text>
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={person_2}
            alt="Image"
            width={350}
            height={300}
            style={{
              borderRadius: "50%",
            }}
          />
          <Text
            sx={{
              mt: 30,
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            SMITH ALAN
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Meet_Client;
