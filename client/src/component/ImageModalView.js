import React from "react";
import styled from "styled-components";

export const Image = styled.div`
  display: flex;
  img {
    width: 800px;
    height: 650px;
    object-fit: cover;
    background-color: #efefef;
  }
  .side-wrapper {
    width: 500px;
    height: 650px;
    background-color: white;
    font-weight: bold;
    font-size: 1rem;
  }
  .side-wrapper div {
    margin: 30px;
  }
`;

const ImageModalView = ({ url }) => {
  return (
    <>
      <div>
        <Image>
          <img src={url} />
          <div className="side-wrapper">
            <div>프로필 사진</div>
            <div>닉네임</div>
            <div>이미지 상세 내용</div>
          </div>
        </Image>
      </div>
    </>
  );
};

export default ImageModalView;
