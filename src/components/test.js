// blogsContext.js

import { createContext, useContext, useState } from 'react';

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  // other context values and functions

  const value = {
    isLoading,
    // other context values and functions
  };

  return <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>;
};

export const useBlogContext = () => useContext(BlogsContext);
