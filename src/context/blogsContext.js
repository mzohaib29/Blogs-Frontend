// Create a context
// Provider
// Consumer => useContext Hook

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/blogsReducer";

const AppContext = createContext();

const API = "http://127.0.0.1:8000/articles/";
// const API2 = "http://127.0.0.1:8000/articles/get/";

const initialState = {
  isLoading: false,
  isError: false,
  blogs: [],
  featureblogs: [],
  isSingleLoading: false,
  singleBlog: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBlogs = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const blogs = res.data;
      // console.log(blogs)
      dispatch({ type: "SET_API_DATA", payload: blogs });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleBlog = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleBlog = await res.data;
      // console.log(singleBlog, "Hello single")
      dispatch({ type: "SET_SINGLE_BLOG", payload: singleBlog });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getBlogs(API);
    // getSingleBlog(API2);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleBlog }}>
      {children}
    </AppContext.Provider>
  );
};
// Custom Hook
const useBlogContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useBlogContext };
