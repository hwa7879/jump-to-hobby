import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MODAL_STYLES = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 250px;
`;

const OVERLAY_STYLES = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0 0.7);
`;

const loginbutton_style = styled.button`
  // background: "#FFBB00",
  // padding: "15px",
  // border: "none",

  padding: 15px;
  background-color: skyblue;
`;

const button_style = styled.div`
  // background: "#FFBB00",
  position: absolute;
`;

const content_box = styled.div`
  position: relative;

  background-color: skyblue;
  padding: 120px;
`;
const text_box = styled.input`
  padding: 20px;
`;

const button_box = styled.div`
  padding: 8;
  background-color: yellow;
  border-radius: 5;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
`;
export const Menu = styled.div`
  display: flex;
  justify-content: right;
`;
export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  font-size: 1rem;
  color: white;
  width: 100px;
  height: 50px;
  border-style: none;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: black;
    transition: all 0.3s;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
  border: 1px;
  float: right;

  width: 500px;
  height: 600px;
  object-fit: cover;
  border-radius: 50px;
  line-height: 200px;
  height: 200px;
  border: 3px;

  /* ul {
    border: 2px solid #87c1ff;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 5px;
    list-style: none;
  } */
`;

export const ImagesContainer = styled.div`
  margin-top: 80px;
  ul {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 5px;
    list-style: none;
  }

  img {
    cursor: pointer;
    width: 600px;
    height: 600px;
    object-fit: cover;
    border-radius: 50px;
  }

  @media only screen and (max-width: 1900px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (max-width: 1260px) {
    ul {
      grid-template-columns: 1fr;
    }
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

  /////여기서 모달창 추가

  return (
    <>
      <Header>
        <Logo src="/images/logo.png" />
        <Menu>
          <MenuButton>Signup</MenuButton>
          <MenuButton>Login / Logout</MenuButton>
        </Menu>
      </Header>

      <ImagesContainer>
        <ProfileView>
          ""님 환영합니다!
          <MenuButton onClick={ToMyPage}>내정보(Mypage)</MenuButton>
        </ProfileView>
        <ul>
          <li>
            <img src="/images/reading.jpg" />
          </li>
          <li>
            <img src="/images/sea.jpeg" />
          </li>
          <li>
            <img src="/images/logo.png" />
          </li>
        </ul>
      </ImagesContainer>

      <Button>
        <MenuButton onClick={ToImagePage}>이미지게시판</MenuButton>
        <MenuButton onClick={ToUploadPage}>업로드게시판</MenuButton>
      </Button>
    </>
  );
}
