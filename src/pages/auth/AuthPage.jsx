import { useRecoilValue } from "recoil";
import LoginPage from "../pages/LoginPage"
import SignupPage from "./SignupPage"
import authScreenAtom from "../../atoms/authAtom";

const AuthPage = () => {
	const authScreenState = useRecoilValue(authScreenAtom);

	return <>{authScreenState === "login" ? <LoginPage /> : <SignupPage />}</>;
};

export default AuthPage;
