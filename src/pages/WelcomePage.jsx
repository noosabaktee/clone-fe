import { Box, Button, Flex, Stack, Text, Link, Container, VStack, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Post from "../assets/image/icon.png";
import { useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom';
import Main from "../assets/image/main.png"
import Logo from "../assets/image/Logo.png";

const WelcomePage = () => {
    const user = useRecoilValue(userAtom);

    return (
      <>
        {/* // <Container maxW="1440px" w="full"> */}
        <Box p={4} justifyItems={"center"} alignItems={"center"} justifyContent={"center"}>
          {/* <Flex justify="center" align="center">
            <Link as={RouterLink} to="/">
              <Image src={Logo} alt="JagoGitar Logo" />
            </Link>
          </Flex> */}
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
        <VStack spacing={8} p={8} align="center">
      <Box textAlign="center">
        <Text color="orange.400" fontWeight="bold">Our Services</Text>
        <Heading fontSize="2xl">Apa yang Bisa Kami Lakukan Untuk Mu</Heading>
      </Box>
      <Flex justify="center" wrap="wrap" spacing={8} maxW="1200px">
        <Box 
          bg="gray.50" 
          p={8} 
          borderRadius="md" 
          boxShadow="md" 
          maxW="325px" 
          minH="332px"
          textAlign="center"
          m={4}
        >
          <Heading fontSize="xl" mb={4}>Pelajaran Gitar yang Dipersonalisasi</Heading>
          <Text>
            Kami menawarkan kursus gitar yang disesuaikan dengan kebutuhan dan tujuan Anda
          </Text>
        </Box>
        <Box 
          bg="gray.50" 
          p={8} 
          borderRadius="md" 
          boxShadow="md" 
          maxW="325px" 
          minH="332px"
          textAlign="center"
          m={4}
        >
          <Heading fontSize="xl" mb={4}>Materi Pembelajaran Berkualitas</Heading>
          <Text>
            Anda dapat mengakses berbagai materi pembelajaran berkualitas tinggi, seperti lembaran musik, video tutorial, dan latihan interaktif
          </Text>
        </Box>
        <Box 
          bg="gray.50" 
          p={8} 
          borderRadius="md" 
          boxShadow="md" 
          maxW="325px" 
          minH="332px"
          textAlign="center"
          m={4}
        >
          <Heading fontSize="xl" mb={4}>Dukungan dan Komunitas</Heading>
          <Text>
            Gabung dengan komunitas gitaris kami untuk berbagi pengalaman, saran, inspirasi, dan acara.
          </Text>
        </Box>
      </Flex>
    </VStack>
        {/* // </Container> */}
        </>
    );
}

export default WelcomePage;
