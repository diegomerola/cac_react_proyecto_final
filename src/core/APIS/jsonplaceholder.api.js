import axios from "axios";

export const jsonPlaceHolderAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

/* export const jsonPlaceHolderAPI = {
  baseURL: "https://jsonplaceholder.typicode.com",
}; */

export const jsonPlaceHolder_paths = {
  users: "/users",
};
