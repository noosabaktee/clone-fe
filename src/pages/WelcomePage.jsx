import { Box, Button, Flex, Stack, Text, Link, Container } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Post from "../assets/image/icon.png";
import { useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom';
import Main from "../assets/image/main.png"

const WelcomePage = () => {
    const user = useRecoilValue(userAtom);

    return (
        <Container maxW={"1440px"}>
        <Box p={4}>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="center"
                mt={10}
                mb={30}
            >
                <Box flex={1} p={4} textAlign={{ base: 'center', md: 'left' }}>
                    <img src={Post} alt="Post" style={{ width: '100%', height: 'auto' }} />
                </Box>
                <Box flex={1} p={4}>
                    <Text fontSize='2xl' mb={4} textAlign={{ base: 'center', md: 'left' }}>
                        Selamat Datang di JagoGitar
                    </Text>
                    <Text fontSize='5xl' mb={4} as='b' noOfLines={[1, 2, 3]} textAlign={{ base: 'center', md: 'left' }}>
                        Platform Terbaik untuk Belajar Gitar Online!
                    </Text>
                    <Text mb={4} noOfLines={[1, 2, 3]} textAlign={{ base: 'center', md: 'left' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorum fugiat minus numquam! Error non, aut quo sit pariatur hic eligendi id doloribus rem quis possimus quidem nemo dignissimos commodi?
                    </Text>
                    {!user && (
                        <Stack direction="row" spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
                            <Link as={RouterLink} to='/login'>
                                <Button bg={"orange.medium"} color={"white"}>Login</Button>
                            </Link>
                            <Link as={RouterLink} to='/signup'>
                                <Button bg={"transparent"}>Sign up</Button>
                            </Link>
                        </Stack>
                    )}
                    {user && (
                        <Link as={RouterLink} to='/forum'>
                            <Button bg={"orange.medium"} color={"white"}>Forum</Button>
                        </Link>
                    )}
                </Box>
            </Flex>

            <Flex
                direction={{ base: 'column', md: 'row' }}
                p={4}
                align="center"
                justify="center"
                mt={10}
                mb={30}
            >
                <Box flex={1} p={4} textAlign={{ base: 'center', md: 'left' }}>
                    <Text fontSize={"2xl"} mb={4} noOfLines={[1, 2, 3]}>
                        Belajar dengan kelas terstruktur dan ditemani oleh gitaris-gitaris nasional pro 
                    </Text>
                </Box>
                <Box flex={1} p={4} textAlign={{ base: 'center', md: 'left' }}>
                    <img src={Main} alt="Main" style={{ width: '300px', height: 'auto' }} />
                </Box>
            </Flex>
        </Box>
        </Container>
    );
}

export default WelcomePage;
