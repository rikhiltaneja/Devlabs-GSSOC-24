import { Button } from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LoginSignupBtn() {
    const navigate = useNavigate()
  return (
    <>
      <Button
        leftIcon={<FaUser />}
        color={"white"}
        backgroundColor={"#6c25be"}
        colorScheme="purple"
        size={["xs", "sm", "md"]}
        onClick={()=>{
            navigate('/login')
        }}
      >
        Login
      </Button>
    </>
  );
}
