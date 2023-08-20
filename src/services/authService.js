const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
  let res = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  let jsonResult = await res.json();

  if (res.ok) {
    return jsonResult;
  } else {
    throw jsonResult.message;
  }
};

export const getUser = () => {
  let username = localStorage.getItem("username");

  return username;
};

export const isAuthenticated = () => {
  return Boolean(getUser());
};

export const logout = (token) => {
  return fetch(`${baseUrl}/logout`, {
    method: "GET",
    headers: {
      "X-Authorization": token,
    },
  });
};

export const register = (email, password) => {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json());
};
