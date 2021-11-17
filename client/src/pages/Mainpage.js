import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Modal } from "./Modal";
import { SignupModal } from "./Signupmodal";

export const Logo = styled.img`
  position: absolute;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0);
  width: 200px;
  height: 200px;
  margin-left: 20px;
  cursor: pointer;
`;
export const Menu = styled.div`
  position: absolute;
  display: flex;
  z-index: 999;
  justify-content: flex-end;
`;
export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  color: white;
  width: 100px;
  height: 50px;
  border-style: none;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.5rem;
  border-radius: 25px;
  margin-top: 50px;
  background-color: #f49c1f;

  :hover {
    background-color: black;
    transition: all 0.3s;
  }
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: #f2ead3;
`;

export const SideBar = styled.div`
  display: flex;
  justify-content: right;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 50px;
  .search-box {
    width: 200px;
    height: 40px;
    margin: 10px;
  }
  input {
    margin: 3px;
    padding-left: 10px;
    font-size: 21px;
    width: 180px;
    height: 30px;
    border-style: none;
    outline: none;
  }
  input::-webkit-input-placeholder {
    color: #afafaf;
    transition: all 0.3s;
  }
  input:focus::-webkit-input-placeholder {
    color: black;
    transition: all 0.3s;
  }
  .black {
    border-bottom: 2px solid black;
    transition: all 0.3s;
  }
  .gray {
    border-bottom: 2px solid #afafaf;
    transition: all 0.3s;
  }
`;

export const Button = styled.div`
  position: absolute;
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

export const ProfileView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;

  .title {
    font-size: 5rem;
    font-weight: bold;
  }
  .title-content {
    font-size: 1.8rem;
    color: #5e5d5d;
  }
`;

export const Body = styled.div`
  /* margin-top: 80px; */
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  background-color: #f2ead3;

  .image-container {
    position: relative;
    width: 50%;
    height: 100vh;
  }

  ul {
    margin-left: 25px;
    position: absolute;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    width: 16vw;
    height: 50vh;
    border-radius: 15px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    padding: 9px;
    cursor: pointer;
    border-radius: 15px;
    object-fit: cover;
    transition: all 1s;
  }

  img:hover {
    transform: scale(1.15);
    transition: all 1s;
  }
`;

export default function Mainpage() {
  const history = useHistory();

  const ToImagePage = () => {
    history.push("/images");
  };

  const ToUploadPage = () => {
    history.push("/upload");
  };

  const ToMyPage = () => {
    history.push("/mypage");
  };

  const ToLogin = () => {
    history.push("/login");
  };

  const ToSignup = () => {
    history.push("/signup");
  };

  return (
    <>
      <Header>
        <Logo src="/images/logo.png" />
      </Header>

      <Body>
        <Button>
          <MenuButton onClick={ToMyPage}>마이페이지</MenuButton>
          <MenuButton onClick={ToLogin}>로그인</MenuButton>
          <MenuButton onClick={ToSignup}>회원가입</MenuButton>
          <MenuButton onClick={ToImagePage}>이미지페이지</MenuButton>
          <MenuButton onClick={ToUploadPage}>업로드</MenuButton>
        </Button>
        <ProfileView>
          <div className="title">Enjoy your hobby</div>

          <div className="title-content">
            Are you enjoying your hobbies by yourself? <br />
            Do you want to share your hobbies with others? <br />
            Share your hobbies on jump-to-hobby.
          </div>
        </ProfileView>
        <div className="image-container">
          <ul>
            <li>
              <img src="/images/sea.jpeg" />
            </li>
            <li>
              <img src="/images/reading.jpg" />
            </li>
            <li>
              <img src="/images/sea.jpeg" />
            </li>
            <li>
              <img src="/images/reading.jpg" />
            </li>
            <li>
              <img src="/images/sea.jpeg" />
            </li>
            <li>
              <img src="/images/reading.jpg" />
            </li>
          </ul>
        </div>
      </Body>
    </>
  );
}
