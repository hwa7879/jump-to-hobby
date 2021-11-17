import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// 로그아웃 부분은 App.js에서 props로 받아서 써야 할 듯.
export const Body = styled.div``;

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
  margin-top: 20px;
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
  justify-content: right;
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f49c1f;
  font-size: 1rem;
  color: white;
  width: 120px;
  height: 250px;
  border-style: none;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: black;
    transition: all 0.3s;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin: 60px 30px;
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
  font-size: 1rem;
  width: 150px;
  height: 70px;
  padding-left: 5px;
  color: ${(props) => props.inputColor || "red"};
  background: papayawhip;
`;

export const ProfileView = styled.div`
  /* background-color: black; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;
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

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSignup = () => {
    if (email === "" || password === "" || username === "") {
      alert("모든 항목은 필수입니다");
      return;
    }

    axios
      .post("http://localhost:80/signup", {
        email,
        password,
        username,
      })
      .then(() => {
        history.push("/");
      });
    // .catch((err) => alert(err));
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
                      inputColor="gray"
                      value={email}
                      onChange={handleChangeEmail}
                    />
                    <br />
                    <Input
                      placeholder="password"
                      type="text"
                      inputColor="gray"
                      value={password}
                      onChange={handleChangePassword}
                    />
                    <br />
                    <Input
                      placeholder="username"
                      type="text"
                      inputColor="gray"
                      value={username}
                      onChange={handleChangeUsername}
                    />
                    <br />
                  </div>

                  <MenuButton onClick={handleSignup}>Signup</MenuButton>
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
