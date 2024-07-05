import { useState } from "react";
import useShowToast from "./useShowToast";
import userAtom from "../atoms/userAtom";
import { useRecoilValue } from "recoil";
import { getFollow, deleteFollow } from "../libs/Methods";

const useFollowUnfollow = (user) => {
  const currentUser = useRecoilValue(userAtom);
  const showToast = useShowToast();
  // const [following, setFollowing] = useState(user.followers.includes(currentUser?._id));
  const [updating, setUpdating] = useState(false);

  const useFollow = () => {
    getFollow({ id: user.id })
      .then(data => {
        if (data.error) {
          showToast("Error", data.error, "error");
        } else {
          showToast("Success", `Followed ${user.name}`, "success");
          // setFollowing(true);
        }
      })
      .catch(error => {
        showToast("Error", error.message, "error");
      })
      .finally(() => {
        setUpdating(false);
      });
  };

  const useUnfollow = () => {
    deleteFollow({ id: user.id })
      .then(data => {
        if (data.error) {
          showToast("Error", data.error, "error");
        } else {
          showToast("Success", `Unfollowed ${user.name}`, "success");
          // setFollowing(false);
        }
      })
      .catch(error => {
        showToast("Error", error.message, "error");
      })
      .finally(() => {
        setUpdating(false);
      });
  };

  const handleFollowUnfollow = () => {
    if (!currentUser) {
      showToast("Error", "Please login to follow", "error");
      return;
    }
    if (updating) return;

    setUpdating(true);
    // if (following) {
    //   useUnfollow();
    // } else {
    //   useFollow();
    // }
  };

  return { handleFollowUnfollow, updating };
};

export default useFollowUnfollow;
