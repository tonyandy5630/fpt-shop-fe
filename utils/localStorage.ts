export const getTokenFromLS = () => {
  if (typeof window === "undefined") return "";
  const token = localStorage.getItem("token");
  return token;
};

export const setTokenToLS = (token: string) => {
  if (typeof window === "undefined") return "";

  localStorage.setItem("token", token);
};

export const removeTokenFromLS = () => {
  if (typeof window === "undefined") return "";

  localStorage.removeItem("token");
};
