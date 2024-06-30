import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Navbar from "./components/Navbar";
import ForumPage from "./pages/ForumPage";
// import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import CreatePost from "./components/CreatePost";
import ChatPage from "./pages/ChatPage";
import CourseListPage from './pages/course/CourseListPage'
import CoursePage from "./pages/course/CoursePage";
import WelcomePage from "./pages/WelcomePage";
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

import CustomPage from "./tuner/CustomPage";
import Index from "./tuner/Index";
import LightDark from "./components/LightDark";


function App() {
	const user = useRecoilValue(userAtom);
	const { pathname } = useLocation();
	return (
		
		<Box position={"relative"} w='full'>
			{/* <Container maxW={pathname === "/" ? { base: "1440px", md: "1000px" } : "1440"} w={"full"}> */}
			<Container maxW={"1440px"}>
				<Navbar />
				<Routes>
					{/* <Route path='/' element={user ? <ForumPage /> : <Navigate to='/login' />} />
					<Route path='/login' element={!user ? <LoginPage /> : <Navigate to='/' />} /> */}
					<Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/login' />} />
					<Route path='/signup' element={!user ? <SignupPage/> :  <Navigate to='/login' />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/forum" element={<ForumPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/" element={<WelcomePage />} />
					<Route
						path='/:username'
						element={user ? (<> <UserPage /> <CreatePost /> </>) : (<UserPage />)}
					/>
					<Route path='/:username/post/:pid' element={<PostPage />} />
					<Route path='/chat' element={user ? <ChatPage /> : <Navigate to="/login" />} />
					<Route path='/course/list' element={<CourseListPage />} />
					<Route path='/course/:id' element={<CoursePage />} />
				</Routes>
			<LightDark />
				
			</Container>
		</Box>
	);
}

export default App;