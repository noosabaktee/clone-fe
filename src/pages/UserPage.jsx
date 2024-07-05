import UserHeader from "../components/UserHeader";
import Post from "../components/Post";
import { getPost, getUser } from "../libs/Methods";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";

const UserPage = () => {
	const { user, loading } = useGetUserProfile();
	const { username } = useParams();
	const showToast = useShowToast();
	const [posts, setPosts] = useRecoilState(postsAtom);
	const [fetchingPosts, setFetchingPosts] = useState(true);
	let [users, setUsers] = useState()

	useEffect(() => {

		setFetchingPosts(true);

		getUser({ "username": username })
		.then(data => {
			setUsers(data.data[0])
		})

		   if (!users || !users.id) {
				setFetchingPosts(false);
				return;
			  }

		getPost({ 'user_id':users._id })
        .then((response) => {
          console.log('User profile response:', response);
          if (response.status === 204) {
            setPosts([]);
            showToast("Info", "User has no posts", "info");
          } else if (response.data && response.data.posts) {
            setPosts(response.data.posts);
          } else if (response.data && response.data.error) {
            showToast("Error", response.data.error, "error");
          }
        })
        .catch((err) => {
          console.error(err);
          showToast("info", "Failed to fetch posts", "info");
        })
        .finally(() => setFetchingPosts(false));


			// if (!user) return;
			// setFetchingPosts(true);
			// try {
			// 	getPost( { _id: 'user.id'} )
			// 	// console.log(data);
			// 	setPosts(data);
			// 	}
			//  catch (error) {
			// 	showToast("Error", error.message, "error");
			// 	showToast("Info", "User has no posts", "info");
			// 	setPosts([]);
			// } finally {
			// 	setFetchingPosts(false);
			// }
	}, []);

	if (!users && loading) {
		return (
			<Flex justifyContent={"center"}>
				<Spinner size={"xl"} />
			</Flex>
		);
	}
	if (!users && !loading) return <h1>User not found</h1>;

	return (
		<>
			<UserHeader user={users} />

			{!fetchingPosts && posts.length === 0 && <h1>User has not posts.</h1>}
			{fetchingPosts && (
				<Flex justifyContent={"center"} my={12}>
					<Spinner size={"xl"} />
				</Flex>
			)}
			
			{posts.map((post) => (
				<Post key={post._id} post={post} postedBy={post.postedBy} />
			))}
		</>
	);
};

export default UserPage;
