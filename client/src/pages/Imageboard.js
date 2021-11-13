import React, { useState } from "react";
import styled from "styled-components";

export const Body = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  > .logout-button {
    margin-top: 30px;
    margin-right: 100px;
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-left: 20px;
  cursor: pointer;
`;
export const LogoutBtn = styled.button`
  background-color: blue;
  font-size: 1rem;
  color: white;
  width: 100px;
  height: 50px;
  border-style: none;
  cursor: pointer;
  transition: all 0.4s;

  :hover {
    background-color: black;
    transition: all 0.4s;
  }
`;

export const SearchBar = styled.div`
  /* position: fixed; */
  display: flex;
  justify-content: right;
  margin-right: 70px;
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
    transition: all 0.4s;
  }
  input:focus::-webkit-input-placeholder {
    color: black;
    transition: all 0.4s;
  }
  .black {
    border-bottom: 2px solid black;
    transition: all 0.4s;
  }
  .gray {
    border-bottom: 2px solid #afafaf;
    transition: all 0.4s;
  }
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 700px;
  background-color: red;
`;

const Imageboard = () => {
  const [isCountryChange, setIsCountryChange] = useState(false);
  const [isHobbyChange, setIsHobbyChange] = useState(false);

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

  return (
    <>
      <Body onClick={OffSearchBar}>
        <Header>
          <Logo src="/images/logo.png" />
          <div className="logout-button">
            <LogoutBtn>로그아웃</LogoutBtn>
          </div>
        </Header>
        <SearchBar>
          <div className="search-container" onClick={ChangeCountrySearchBar}>
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
          <div>돋보기아이콘</div>
        </SearchBar>
        <ImageContainer>
          <img src="/images/notimage.png" />
          <img src="/images/notimage.png" />
        </ImageContainer>
      </Body>
    </>
  );
};

export default Imageboard;
