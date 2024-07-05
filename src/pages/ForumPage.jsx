import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";
import { getPost } from "../libs/Methods";

const ForumPage = () => {
	const [posts, setPosts] = useRecoilState(postsAtom);
	const [loading, setLoading] = useState(true);
	const showToast = useShowToast();

	useEffect(() => {
		setLoading(true);
		getPost({ _id: posts })
			.then(data => {
				if (data.error) {
					showToast("Error", data.error, "error");
					setLoading(false); 
					return;
				}
				console.log(data);
				setPosts(data.posts || []);
			})
			.catch(error => {
				showToast("Error", error.message, "error");
			})
			.finally(() => {
				setLoading(false); 
			});
	}, [showToast, setPosts]);

	return (
		// <Flex gap='10' alignItems={"flex-start"}>
		// 	<Box flex={70}>
		// 		{!loading && posts.length === 0 && <h1>Follow some users to see the feed</h1>}

		// 		{loading && (
		// 			<Flex justify='center'>
		// 				<Spinner size='xl' />
		// 			</Flex>
		// 		)}

		// 		{!loading && posts.map((post) => (
		// 			<Post key={post.id} post={post} postedBy={post.postedBy} />
		// 		))}
		// 	</Box>
		// 	<Box
		// 		flex={30}
		// 		display={{
		// 			base: "none",
		// 			md: "block",
		// 		}}
		// 	>
		// 		{/* <SuggestedUsers /> */}
		// 	</Box>
		// </Flex>
		<>
		 <Flex gap='10' alignItems={"flex-start"}>
		 	<Box flex={70}>
		 		{!loading && posts.length === 0 && <h1>Follow some users to see the feed</h1>}

		 		{loading && (
					<Flex justify='center'>
						<Spinner size='xl' />
					</Flex>
				)}

				{!loading && posts.map((post) => (
					<Post key={post.id} post={post} postedBy={post.postedBy} />
				))}
		 	</Box>
		 	<Box
		 		flex={30}
		 		display={{
		 			base: "none",
		 			md: "block",
				}}
			>
		 	</Box>
		</Flex>
		</>
	);
};

export default ForumPage;
