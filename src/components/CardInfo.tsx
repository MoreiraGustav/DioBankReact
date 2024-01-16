import { Box, Text } from "@chakra-ui/react";

interface CardInfoProps {
  text?: string;
  mainContent: string;
  content: string | any;
}

export default function CardInfo({
  mainContent,
  content,
  text
}: CardInfoProps) {
  return (
    <>
      <Box
        bg={"#ffffff"}
        borderRadius={"10px"}
        p={4}
        w={"full"}
        maxW={"500px"}
        h={150}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Text fontSize='2xl' fontWeight={'bold' } textAlign={'center'}>{mainContent}</Text>
        <Text fontSize='xl' textAlign={'center'}>{content} </Text>
        <Text textAlign={"center"}>{text}</Text>
      </Box>
    </>
  );
}
