import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export const MainWrapper = styled.div`
  display: flex;
`;

export const Logo = styled.div`
  position: fixed;
  > img {
    width: 200px;
    height: 200px;
    margin-left: 20px;
    cursor: pointer;
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  > img {
    margin-top: 30px;
    width: 750px;
    height: 500px;
    object-fit: cover;
    background-color: #efefef;
  }
  > .content {
    height: 200px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .upload-btn {
    margin: 10px;
    cursor: pointer;
    width: 100px;
    height: 50px;
    background-color: blue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cancel {
    background-color: gray;
  }
`;

const Uploadboard = () => {
  const [imgUrl, setImgUrl] = useState(""); // img src 값
  const [inputContent, setInputContent] = useState("");
  const history = useHistory();

  const handleChangeContent = (e) => {
    setInputContent(e.target.value);
  };

  const handleChangeFile = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const url = reader.result;
      if (url) {
        setImgUrl(url.toString());
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleUpload = () => {
    if (imgUrl === "" || inputContent === "") {
      alert("양식을 채워주세요!");
      return;
    }

    // 이미지 업로드 POST 입니다~
    axios
      .post(
        "http://jump-to-hobby/images/upload",
        {
          imgUrl,
          inputContent,
        },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then(() => {
        history.push("/images");
      });
  };

  const ToMainPage = () => {
    history.push("/");
  };

  return (
    <>
      <MainWrapper>
        <Logo>
          <img src="/images/logo.png" onClick={ToMainPage} />
        </Logo>
        <UploadWrapper>
          <img src={imgUrl} />
          <input
            type="text"
            className="content"
            placeholder="내용 입력"
            value={inputContent}
            onChange={handleChangeContent}
          />
        </UploadWrapper>
      </MainWrapper>
      <Button>
        <input type="file" accept="image/*" onChange={handleChangeFile} />
        <div className="upload-btn cancel">취소</div>
        <div className="upload-btn" onClick={handleUpload}>
          업로드
        </div>
      </Button>
    </>
  );
};

export default Uploadboard;
