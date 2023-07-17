import styled from "styled-components";
import PageNavigation from "./pageNavigation";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [thumb, setThumb] = useState(null);
    const [authorName, setAuthorName] = useState();
    const [authorImage, setAuthorImage] = useState(null);

    const navigate = useNavigate();

    const update = async () => {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('body', body);
      formData.append('thumb', thumb);
      formData.append('author_name', authorName);
      formData.append('author_image', authorImage);
    
      try {
        const res = await axios.post('http://localhost:8000/articles/create/', formData);
        console.log(res);
    
        // Redirect to the Home page
        navigate('/'); // Replace '/' with the actual path of your Home page
    
      } catch (error) {
        console.error(error);
      }
    };

    const handleThumbChange = (e) => {
        setThumb(e.target.files[0]);
    }
    const handleAuthorImage = (e) => {
      setAuthorImage(e.target.files[0]);
    }

    return (
        <Wrapper>
            <PageNavigation title={'Create Blog'} />
                <div className="Create-blog">
                    <h1 className="write">Write your thoughts</h1>
                    <input className="title" name="title" onChange={(event) => { setTitle(event.target.value) }} placeholder="Title"/>
                    <input className="body" name="body" onChange={(event) => { setBody(event.target.value) }} placeholder="Tell your story…"/>
                    <input className="author_name" name="author" onChange={(event) => { setAuthorName(event.target.value) }} placeholder="Author Name"/>
                    <div className="author">
                        <label className="label" for="author_file">Upload Author Image</label>
                        <input id="author_file" type="file" onChange={handleAuthorImage} name="thumb" label="author_image"/>
                    </div>
                    <div className="main">
                        <label className="label" for="main_file">Upload Blog Image</label>
                        <input id="main_file" type="file" onChange={handleThumbChange} name="thumb" />
                    </div> 
                    <button className="btn" onClick={update}>Publish</button>
                </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
#author_file, #main_file{
  display: none
}
.write {
  margin: 0px auto;
  font-size: 35px;
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 32px;
  color: #000000;
  font-family: gt-super,Georgia,Cambria,"Times New Roman",Times,serif;
}
.author-data {
  display: flex;
}
.label {
  cursor: pointer;
  padding: 10px;
  border-radius: 25px;
  background-color: white;
  color: black;
  outline: auto
}
.Create-blog {
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  height: 650px;
  padding: 30px;
  width: 40%;
}
.title {
  font-size: 50px;
  border: none;
  margin-top: 10px;
  color: #b3b3b1;
  font-family: medium-content-title-font,Georgia,Cambria,"Times New Roman",Times,serif;
  font-style: normal;
  font-weight: 400;
  padding: 10px;
  line-height: 1.25;
  letter-spacing: 0;
  outline: none;
}
.body {
  margin-top: 10px;
  outline: none;
  font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
  border: none;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  height: 240px;
  line-height: 1.58;
  letter-spacing: -.003em;
  word-break: break-word;
  padding: 10px;
  word-wrap: break-word;
  visibility: visible;
}
.author_name {
  margin: 20px 0px;
  outline: none;
  font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
  border: none;
  font-weight: 400;
  font-style: normal;
  font-size: 17px;
  line-height: 1.58;
  letter-spacing: -.003em;
  
}
.author {
  font-size: 16px;
  margin: 30px auto;
  font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
}
.main {
  font-size: 16px;
  margin: auto;
  font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
}

.btn {
  color: white;
  width: 100px;
  height: 35px;
  font-size: 17px;
  margin: auto;
  background-color: green;
  font-weight: 600;
  cursor: pointer;
}

`;

export default CreateBlog;