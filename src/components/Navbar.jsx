import { Button, Flex, Icon, Image, Link, useColorMode, Container } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import Logo from "../assets/image/Logo.png";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useRecoilValue(userAtom);
    const logout = useLogout();

    return (
        <Container maxW="1440px" w="full">
            <Flex justifyContent={"center"} mt={7}>
                <Link as={RouterLink} to='/'>
                    <Image src={Logo} />
                </Link>
            </Flex>
            <Flex justifyContent={"space-between"} mt={6} mb='12'>
                <Flex color="white" justify="center">
                    <Flex justify="space-between" maxW="1200px" w="full" align="center" gap={3}>
                        {/* {user && (
                            <Link as={RouterLink} to={`/${user.username}`} mx={4}>
                                <RxAvatar size={24} />
                            </Link>
                        )} */}
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
						{user && (
							<Link as={RouterLink} to="/contact" mx={4}>
                            <Button _hover={"transparent"}>
                                Contact
                            </Button>
                        </Link>
						)}
                    </Flex>
                </Flex>

                {/* <Icon //dark or light mode
                    as={colorMode === "dark" ? GoSun : FaMoon}
                    cursor={"pointer"}
                    w={6}
                    h={6}
                    onClick={toggleColorMode}
                /> */}

                {user && (
                    <Flex alignItems={"center"} gap={4}>
                        <Link as={RouterLink} to={`/chat`}>
                            <BsFillChatQuoteFill size={20} />
                        </Link>
                        {/* <Button size={"xs"} onClick={logout}>
                            <FiLogOut size={20} />
							</Button> */}
							<Link as={RouterLink} to={`/${user.username}`} mx={4}>
                                <RxAvatar size={24} />
                            </Link>
                    </Flex>
                )}

                {!user && (
                    <Flex>
                        <Button bg={"orange.medium"} color={"white"}>
                            <Link as={RouterLink} to={"/signup"}>
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
