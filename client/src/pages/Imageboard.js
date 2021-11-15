import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
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

export const TopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: blue;
  color: white;
  transition: all 0.3s;

  :hover {
    background-color: black;
    transition: all 0.3s;
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

const Imageboard = () => {
  const [isCountryChange, setIsCountryChange] = useState(false);
  const [isHobbyChange, setIsHobbyChange] = useState(false);
  const history = useHistory();

  const ChangeCountrySearchBar = () => {
    if (isCountryChange) {
      setIsCountryChange(false);
    } else if (!isCountryChange) {
      setIsCountryChange(true);
    }
  };

  const ChangeHobbySearchBar = () => {
    if (isHobbyChange) {
      setIsHobbyChange(false);
    } else if (!isHobbyChange) {
      setIsHobbyChange(true);
    }
  };

  const OffSearchBar = () => {
    if (isCountryChange) {
      setIsCountryChange(false);
    }
    if (isHobbyChange) {
      setIsHobbyChange(false);
    }
  };

  const ToScrollTop = (e) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const ToMainPage = () => {
    history.push("/");
  };

  const ToMyPage = () => {
    history.push("/mypage");
  };

  // 이미지 모두 불러오기 GET
  useEffect(() => {
    axios.get("http://jump-to-hobby/images/info").then((res) => {
      console.log(res);
      // res가 어떻게 오는지 보고 useState를 이용해 이미지들을 관리해야할 듯.
    });
  }, []);

  return (
    <>
      <Body onClick={OffSearchBar}>
        <Header>
          <Logo>
            <img src="/images/logo.png" onClick={ToMainPage} />
          </Logo>
          <SideBar>
            <Menu>
              <MenuButton onClick={ToMyPage}>마이페이지</MenuButton>
              <MenuButton onClick={ToMainPage}>로그아웃</MenuButton>
            </Menu>
            <SearchBar>
              <div
                className="search-container"
                onClick={ChangeCountrySearchBar}
              >
                {isCountryChange ? (
                  <div className="search-box black">
                    <input type="text" placeholder="지역" />
                  </div>
                ) : (
                  <div className="search-box gray">
                    <input type="text" placeholder="지역" />
                  </div>
                )}
              </div>
              <div className="search-container" onClick={ChangeHobbySearchBar}>
                {isHobbyChange ? (
                  <div className="search-box black">
                    <input type="text" placeholder="취미" />
                  </div>
                ) : (
                  <div className="search-box gray">
                    <input type="text" placeholder="취미" />
                  </div>
                )}
              </div>
              <Icon>
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </Icon>
            </SearchBar>
          </SideBar>
        </Header>
        <ImagesContainer>
          {/* ul 태그 밑에 서버 이미지파일 넣기, 넣을 때 map활용하기 (key도 꼭 넣기!), key는 뭐로할까? */}
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
            <li>
              <img src="/images/sea.jpeg" />
            </li>
            <li>
              <img src="/images/sea.jpeg" />
            </li>
            <li>
              <img src="/images/sea.jpeg" />
            </li>
          </ul>
        </ImagesContainer>
        <TopButton onClick={ToScrollTop}>
          <Icon>
            <FontAwesomeIcon icon={faAngleDoubleUp} className="search-arrow" />
          </Icon>
        </TopButton>
      </Body>
    </>
  );
};

export default Imageboard;
