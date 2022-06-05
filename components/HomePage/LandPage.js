import { Flex, Box, Text } from "@theme-ui/components";

const LandPage = () => {
  return (
    <Flex
      sx={{
        height: "50vh",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          p: 30,
        }}
      >
        <Text
          sx={{
            fontSize: "48px",
            fontWeight: 700,
            width: "50%",
            lineHeight: "45px",
            mb: 30,
          }}
        >
          A Creative hub of excellence
        </Text>
        <Text
          sx={{
            width: "40%",
            lineHeight: "35px",
            fontSize: "1.2rem",
          }}
        >
          A creative hub providing wide varieties of services such as
          photography, t-shirt printing, flyer printing, 2D and 3D animation,
          web development and many more. Holy of Holies Concepts is your number
          one hub for creatives
        </Text>
      </Flex>

      {/******Image here  */}
      <Box>Image here</Box>
    </Flex>
  );
};

export default LandPage;
