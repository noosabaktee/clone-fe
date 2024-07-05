import { Button, Flex, Icon, Image, Link, Container } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import { BsFillChatQuoteFill } from "react-icons/bs";
import Logo from "../assets/image/Logo.png";
import { VscAccount } from "react-icons/vsc";
import { getUser } from "../libs/Methods";
import { useEffect, useState } from "react";

const Navbar = () => {
    // const user = useRecoilValue(userAtom);
    const logout = useLogout();
    const setUser = useSetRecoilState(userAtom);
    let [users, setUsers] = useState()

   getUser({ _id: localStorage.getItem("user_id") })
   .then(data => {
       setUsers(data.data[0])
   })


    return (
        <Container maxW="1440px" w="full" >
            <Flex justifyContent={"center"} mt={6}>
                <Link as={RouterLink} to='/'>
                    <Image src={Logo} />
                </Link>
            </Flex>
            <Flex justifyContent={"space-between"} mt={9} mb='12vh'>
                <Flex color="white" justify="center">
                    <Flex justify="space-between" maxW="120vh" w="full" align="center" gap={1}>
                        <Link as={RouterLink} to="/" mx={4}>
                            <Button _hover={"transparent"} bg={"orange.medium"} color={"white"}>
                                Home
                            </Button>
                        </Link>
                        <Link as={RouterLink} to="/course/list" mx={4}>
                            <Button _hover={"transparent"}>
                                Courses
                            </Button>
                        </Link>
                        <Link as={RouterLink} to="/about" mx={4}>
                            <Button _hover={"transparent"}>
                                About Us
                            </Button>
                        </Link>
						{users && (
							<Link as={RouterLink} to="/contact" mx={4}>
                            <Button _hover={"transparent"}>
                                Contact
                            </Button>
                        </Link>
						)}
                        <Button _hover={"transparent"}>
                            <a href="/tuner.html" rel="noopener noreferrer">
                            Tuner
                            </a>
                        </Button>
                    </Flex>
                </Flex>
                {users && (
                    <Flex alignItems={"center"} gap={4}>
                        <Link as={RouterLink} to={`/chat`}>
                            <BsFillChatQuoteFill size={20} />
                        </Link>
                        {/* <Button size={"xs"} onClick={logout}>
                            <FiLogOut size={20} />
							</Button> */}
							<Link as={RouterLink} to={`/user/${users.username}`} mx={4}>
                                <RxAvatar size={24} />
                            </Link>
                    </Flex>
                )}

                {!users && (
                    <Flex>
                        <Button bg={"orange.medium"} color={"white"}>
                            <Link as={RouterLink} to="/signup">
                                Sign up
                            </Link>
                        </Button>

                        <Button bg={"transparent"}>
                            <Link as={RouterLink} to={"/login"}>
                                Login
                            </Link>
                        </Button>
                    </Flex>
                )}
            </Flex>
        </Container>
    );
};

export default Navbar;
