import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// 로그아웃 부분은 App.js에서 props로 받아서 써야 할 듯.

export const Body = styled.div`
  background-color: #f2ead3;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  > img {
    width: 200px;
    height: 200px;
    margin-left: 20px;
    cursor: pointer;
  }
`;

export const SideBar = styled.div`
  display: flex;

  justify-content: right;
  flex-direction: column;
  margin-top: 200px;
  margin-right: 50px;
  .search-box {
    width: 200px;
    height: 43px;
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

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f49c1f;
  font-size: 1.5rem;
  color: white;
  /* width: 300px; */
  height: 60px;
  /* border-style: none; */
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  border-radius: 10px;
  background-color: #f49c1f;

  :hover {
    background-color: black;
    transition: all 0.3s;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin: 100px 500px;
`;

export const SearchBar = styled.div`
  display: flex;
  margin: 40px 0px;
`;

export const ImagesContainer = styled.div`
  margin-top: 80px;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
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
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 1260px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;
export const ProfileImages = styled.div`
  margin-top: 30px;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    list-style: none;
  }

  img {
    cursor: pointer;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 100px;
  }

  @media only screen and (max-width: 1900px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 1260px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

export const Icon = styled.div`
  .search-icon {
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: #afafaf;
    transition: all 0.3s;
    transform: translate(20%, 40%);
  }

  .search-arrow {
    width: 25px;
    height: 25px;
    color: white;
    transform: translate(0%, -15%);
    transition: all 0.3s;
  }

  .search-icon:hover {
    color: black;
    transition: all 0.3s;
  }
`;

export const Inputbox = styled.div`
  display: flex;
  margin: 40px 0px;
`;

const Input = styled.input`
  font-size: 1.2rem;
  width: 350px;
  height: 50px;
  padding-left: 5px;
  color: ${(props) => props.inputColor || "red"};
  background: papayawhip;

  /* display: flex; */
  padding: 0.5em;
  margin: 0.5em;

  background: papayawhip;
  border-color: #ffff;
  border-radius: 10px;
`;

export const Button = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .upload-btn {
    margin: 10px;
    cursor: pointer;
    width: 80px;
    height: 30px;
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

export default function Login({ handleResponseSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("이메일과 비밀번호를 입력하세요");
      return;
    }

    axios
      .post(
        "http://localhost:80/login",
        {
          email,
          password,
        },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then((res) => {
        // console.log(res.data.data.access_token);
        // console.log(res);
        // handleResponseSuccess(res.data.data.access_token);
        console.log(res);
        handleResponseSuccess(res);
        history.push("/mypage");
      });
  };

  const ToMainPage = () => {
    history.push("/");
  };
  return (
    <>
      <Body>
        <Header>
          <Logo>
            <img src="/images/logo.png" onClick={ToMainPage} />
          </Logo>
          <SideBar></SideBar>
        </Header>
        <Profile>
          <ProfileImages>
            <ul>
              <li></li>
              <li>
                <Menu>
                  <div>
                    <Input
                      placeholder="email"
                      type="text"
                      inputColor="black"
                      value={email}
                      onChange={handleChangeEmail}
                    />
                    <br />
                    <Input
                      placeholder="password"
                      type="password"
                      inputColor="black"
                      value={password}
                      onChange={handleChangePassword}
                    />
                    <br />
                  </div>

                  <MenuButton onClick={handleLogin}>Login</MenuButton>
                </Menu>
              </li>
            </ul>
          </ProfileImages>
        </Profile>
        <SideBar>
          <Menu>
            <div></div>
          </Menu>
        </SideBar>
      </Body>
    </>
  );
}
