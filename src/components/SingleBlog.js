import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useBlogContext } from "../context/blogsContext"
import PageNavigation from "./pageNavigation";
import MyImages from "./MyImages";
import AuthorImage from './author.jpg'

const API = "http://127.0.0.1:8000/articles/get";

const SingleBlog = () => {

    const { getSingleBlog, isSingleLoading, singleBlog } = useBlogContext();
    const { id } = useParams();
    console.log("debug single blog",singleBlog)
    // singleBlog && singleBlog[id] ? console.log("Data exists", id, singleBlog[id]) : console.log("Data does not exist")
    const { title, thumb, body, date, author_name, author_image  } = singleBlog ? singleBlog : {};

    const formattedDate = new Date(date).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
  });
  const formattedTime = new Date(date).toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });


    useEffect(() => {
        getSingleBlog(`${API}/${id}`);
    }, [])

    if (isSingleLoading) {
        return <div>Single page Loading......</div>
    }

    return (
        <Wrapper>
            <PageNavigation title={title} />
                <div className="grid grid-two-column">
                    <div className="product-images">
                        <MyImages imgs={[{url: thumb}]} />
                    </div>
                    <div className="blog-data">
                        <h2 className="title">{title}</h2>
                        <div className="author-data">
                          <img className="author-img" src={AuthorImage} alt="Author" />
                          <div className="author">
                            <div className="name">
                              <p className="author-name">{author_name}</p>
                              <span>.</span>
                              <p className="follow">Follow</p>
                            </div>
                            <p className="date">{formattedDate} . {formattedTime}</p>
                          </div>
                        </div>
                        <p className="body">{body}</p>
                    </div>
                </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .title {
    font-size: 52px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: -0.011em;
    line-height: 52px;
    margin-bottom: 32px;
    margin-top: 1.19em;
    font-weight: 800;
  }
  .body {
    letter-spacing: -0.003em;
    word-spacing: 1px;
    line-height: 36px;
    margin-top: 2em;
    font-weight: 400;
    font-size: 21px;
    color: rgba(41, 41, 41, 1);
    margin-bottom: -0.46em;
    font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif;
  }
  .author-data {
    display: flex;
  }
  .author-img {
    width: 50px;
    height: 50px;
    border-radius: 55%;
    margin: auto 0px;
  }
  .author {
    margin-left: 20px;
  }
  .name {
    display: flex;
    font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    font-size: 18px;
  }
  .author-name {
    margin: 0px 15px 7px 0px;
  }
  .follow {
    margin: 0px 0px 7px 15px;
    color: rgba(26, 137, 23, 1);
  }
  .date {
    margin: 7px 0px 0px 0px;
    color: rgba(117, 117, 117, 1);
    font-size: 17px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .blog-data {
    // display: flex;
    // flex-direction: column;
    // align-items: flex-start;
    // justify-content: center;
    // gap: 2rem;
    margin: auto;
    width: 40%;
  }
`;

export default SingleBlog;
