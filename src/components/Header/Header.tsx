import { Box, Center, ChakraProvider, Heading } from "@chakra-ui/react";


export default function Header() {
  return (

<ChakraProvider>
  <Box bg='#2A0056' minH={100} w={'full'} boxShadow='2xl'>
    
<Center>
    <Heading textColor={'#B79ED1'}  mt={25}>Dio Bank</Heading>
</Center>

  </Box>
</ChakraProvider>
  )
}
