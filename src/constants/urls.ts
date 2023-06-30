const baseUrl = "https://www.codewars.com/api/v1";

const getUserUrl = (user: string) => `/users/${user}`;

export { baseUrl, getUserUrl };
