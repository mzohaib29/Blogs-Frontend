import React, { useState } from 'react'
import Styled from 'styled-components';

const MyImages = ({ imgs = [{ url: " " }] }) => {

  const [mainImage, setMainImage] = useState(imgs[0]);
  console.log("Hello main",mainImage)

  const origin = "https://zohaib-app-two-dot-cloud-work-314310.ew.r.appspot.com"
  return (
    <Wrapper>
      <div className='grid grid-four-columns'>
        {
          imgs.map((curElm, index) => {
            // console.log("Hello element" , curElm, index)
            return (
              <figure>
                <img
                  className='box-image--style'
                  key={index}
                  src={origin + curElm.url}
                  alt={curElm.filename} 
                  onClick = {() => setMainImage(curElm)}
                />
                {/* {console.log("Images", ))} */}
              </figure>
            );
          })
        }
      </div>
    </Wrapper>
  )
}
const Wrapper = Styled.section`
display: flex;
align-items: center;
gap: 1rem;

.grid {
  flex-direction: row;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  width: 30%;

  img {
    margin-left: -30%;
    margin-top: 50px;
    background-size: cover;
    object-fit: contain;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }
}

.main-screen {
  display: grid;
  place-items: center;
  order: 1;

  img {
    max-width: 100%;
    height: auto;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }
}

.grid-four-column{
  grid-template-columns: 1fr;
  grid-template-rows: repeat (4, 1fr);
}

@media (max-width: ${({ theme }) => theme.media.mobile} ) {
  display: flex;
  flex-direction : column;
  order: 1;
  .grid-four-column{
    grid-template-rows: 1fr;
    grid-template-columns: repeat (4, 1fr);
  }
}
`;
export default MyImages