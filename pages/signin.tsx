import AuthForm from "../components/authForm";

const Signin = () => {
  return <AuthForm mode="signin" isSignin />;
};

Signin.authPage = true;

export default Signin;
