const blogReducer = (state, action) => {

    switch(action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case "SET_API_DATA":
            const blogs = action.payload.filter ((curElement) => {
                return curElement.featured === true;
            });
            return {
                ...state,
                isLoading: false,
                blogs: action.payload,
                // featureblogs: blogs,
            }

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        
            case "SET_SINGLE_LOADING":
                return {
                    ...state,
                    isSingleLoading: true,
                }
            case "SET_SINGLE_BLOG":
                return {
                    ...state,
                    isSingleLoading: false,
                    singleBlog: action.payload,
                };
            case "SINGLE_ERROR":
                return {
                    ...state,
                    isSingleLoading: false,
                    isError: true,
                }
        default:
            return state;
    } 
}

export default blogReducer;
