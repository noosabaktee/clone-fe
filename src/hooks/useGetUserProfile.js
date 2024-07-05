import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useShowToast from "./useShowToast";
import { getUser } from "../libs/Methods";

const useGetUserProfile = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const { username } = useParams();
	const showToast = useShowToast();

	useEffect(() => {

			getUser({ id: 'user_id' }) 
				.then(data => {
					// console.log('User profile response:', data);
					if (data.error) {
						showToast("Error", data.error, "error");
					} else {
						setUser(data.user);
					}
					// if(data.isFrozen){
					// 	setUser(null)
					// 	return;
					// }
				})
				.catch(error => {
					showToast("Error", error.message, "error");
					console.error('Error fetching user profile:', error);
				})
				.finally(() => {
					setLoading(false); 
				});
	

	}, [username, showToast]);

	return { loading, user };
};

export default useGetUserProfile;
