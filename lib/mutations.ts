import fetcher from "./fetcher";

export const signupAuth = (
  mode: "signup",
  body: { username: string; email: string; password: string }
) => {
  return fetcher(`/${mode}`, body);
};

export const signinAuth = (
  mode: "signin",
  body: { email: string; password: string }
) => {
  return fetcher(`/${mode}`, body);
};
