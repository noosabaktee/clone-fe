import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import sharedCourseAtom from "../../atoms/sharedCourseAtom";
import userAtom from "../../atoms/userAtom";

const courses = [
  {
    id: 1,
    title: "Belajar Gitar Bersama Roby",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aliquid blanditiis quaerat voluptas praesentium harum aperiam ipsam omnis quidem laborum? Quia ipsam temporibus dolor porro ab, ipsum ex quasi minus!",
  },
  {
    id: 2,
    title: "Belajar gitar bersama Rolis",
    url: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aliquid blanditiis quaerat voluptas praesentium harum aperiam ipsam omnis quidem laborum? Quia ipsam temporibus dolor porro ab, ipsum ex quasi minus!",
  },
  {
    id: 3,
    title: "Gitar kupetik, bass kubetot",
    url: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aliquid blanditiis quaerat voluptas praesentium harum aperiam ipsam omnis quidem laborum? Quia ipsam temporibus dolor porro ab, ipsum ex quasi minus!",
  },
];

const CoursePage = () => {
  const { id } = useParams();
  const user = useRecoilValue(userAtom);
  const sharedCourse = useRecoilValue(sharedCourseAtom);
  const course = courses.find(course => course.id === parseInt(id)) || sharedCourse;

  if (!course) {
    return <Text>Course not found</Text>;
  }

  return (
    <>
    {user ? (
      <VStack spacing={4} align="stretch">
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Text fontSize="4xl" textAlign="center" as={"b"}>{course.title}</Text>
      </Flex>
      <Box position="relative" paddingTop="56.25%" width="100%" bg="black">
        <Box position="absolute" top="0" left="0" width="100%" height="100%">
          <ReactPlayer 
            url={course.url} 
            width="100%" 
            height="100%"
            controls
            />
        </Box>
      </Box>
      <Box justifyContent={"center"} alignItems={"center"}>
        <Text as={"b"} fontSize={"3xl"} mt={20}>Dasar-Dasar Gitar</Text>
        <Text fontSize={"1xl"}>{course.description}</Text>
      </Box>
    </VStack>
      ) : <Box position={"fixed"}>
        <VStack >
        <Flex>
          <Text>
            Belum punya akun? 
          </Text>
          <Link as={RouterLink} to="/signup" color={"orange.medium"}>Sign up</Link>
          </Flex>
        </VStack>
      <VStack spacing={4} align="stretch" filter={"blur(40px)"} pointerEvents='none' >
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Text fontSize="4xl" textAlign="center" as={"b"}>{course.title}</Text>
      </Flex>
      <Box position="relative" paddingTop="56.25%" width="100%" bg="black">
        <Box position="absolute" top="0" left="0" width="100%" height="100%">
          <ReactPlayer 
            url={course.url} 
            width="100%" 
            height="100%"
            controls
            />
        </Box>
      </Box>
      <Box justifyContent={"center"} alignItems={"center"}>
        <Text as={"b"} fontSize={"3xl"} mt={20}>Dasar-Dasar Gitar</Text>
        <Text fontSize={"1xl"}>{course.description}</Text>
      </Box>
    </VStack>
    </Box>
    }

    </>
  );
};

export default CoursePage;
