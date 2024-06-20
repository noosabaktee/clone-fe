import { VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    title: "Belajar gitar bersama Rolis",
    totalHours: "40 total jam",
    updated: "Diperbarui 5/2024",
    rating: 4.6,
    students: 297254,
    profile: "Rolis Liu",
    video: "", // Replace with actual image URLs
  },
  {
    id: 2,
    title: "Belajar Gitar bersama Roby",
    totalHours: "25 total jam",
    updated: "Diperbarui 6/2022",
    rating: 4.8,
    students: 23992,
    profile: "Roby Aryanata",
    video: "",
  },
  {
    id: 3,
    title: "Gitar kupetik, bass kubetot",
    totalHours: "15 jam",
    updated: "Diperbarui 3/2021",
    rating: 4.7,
    students: 89358,
    profile: "Rio Haryanto",
    video: "",
    link: "https://youtu.be/pDc-6UKdUI0?si=dKEmJwKESrZTO0Hw"
  },
  // Add more courses as needed
];

const CourseListPage = (props) => (
  <VStack align="stretch" spacing={4} w="full">
    {courses.map((course) => (
      <Link key={course.id} to={`/course/${course.id}`}>
        <CourseCard course={course} />
      </Link>
    ))}
  </VStack>
);

export default CourseListPage;
