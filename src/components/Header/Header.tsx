import { Box, Button, Heading, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { HiLogout } from "react-icons/hi";
import { AppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <Box
      bg="#2A0056"
      minH={100}
      w={"full"}
      boxShadow="2xl"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={5}
    >
      <Heading textColor={"#B79ED1"} textAlign={"center"} lineHeight="initial">
        Dio Bank
      </Heading>
      {isLoggedIn ? (
        <>
          <Spacer />
          <Button gap={2} onClick={logout}>
            LogOut <HiLogout />
          </Button>
        </>
      ) : (
        ""
      )}
    </Box>
  );
}
