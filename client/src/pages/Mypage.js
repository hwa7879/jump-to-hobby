import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// 로그아웃 부분은 App.js에서 props로 받아서 써야 할 듯

export const Body = styled.div`
  background-color: #f2ead3;
`;

export const ModalContainer = styled.div`
  position: relative;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const ModalView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  position: absolute;
  width: 500px;
  height: 700px;
  z-index: 2;
  border: 3px solid #f49c1f;
  img {
    margin-top: 30px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    background-color: #efefef;
  }
  input {
    width: 200px;
    height: 30px;
    margin: 8px 0px;
  }
  #input-file {
    display: none;
  }
  .icon-text {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 40px;
    height: 30px;
    background-color: #f49c1f;
    color: white;
  }
  .modal-btn {
    display: flex;
    margin-top: 20px;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 90px;
    height: 35px;
    color: white;
    margin: 0px 5px;
  }
  .cancel {
    background-color: gray;
  }
  .comfirm {
    background-color: #f49c1f;
  }
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
  background-color: #f49c1f;
  font-size: 1rem;
  color: white;
  width: 100px;
  height: 50px;
  border-style: none;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.5rem;
  border-radius: 25px;
  margin-top: 30px;
  background-color: #f49c1f;

  :hover {
    background-color: black;
    transition: all 0.3s;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 50px;

  .userinfo {
    display: flex;
    width: 550px;
    height: 250px;
    border: 6px solid #f49c1f;
    border-radius: 40px;
  }

  img {
    margin: 30px;
    width: 170px;
    height: 170px;
    border-radius: 100%;
  }
  .userinfo-content {
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .userinfo-content div {
    margin: 10px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  margin: 40px 0px;
`;

export const ImagesContainer = styled.div`
  margin-top: 80px;
  margin-left: 50px;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    list-style: none;
    margin-left: 8em;
    margin-right: 8em;
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
  background-color: #f49c1f;
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

function Mypage({ loginInfo }) {
  const [imgUrl, setImgUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const history = useHistory();

  const { username, email, users_img } = loginInfo;
  //username, email, users_img

  const openModalHandler = (e) => {
    if (isOpen) {
      setIsOpen(false);
    } else if (!isOpen) {
      setIsOpen(true);
    }
  };

  const closeModalHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleInputUsername = (e) => {
    setInputUsername(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const ToScrollTope = (e) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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

  const ToMainPage = () => {
    history.push("/");
  };

  const ToImagePage = () => {
    history.push("/images");
  };

  const ToUploadPage = () => {
    history.push("/upload");
  };

  // 로그아웃 POST
  const handleLogout = () => {
    axios.post("http://localhost:80/logout").then((res) => {
      // setUserinfo(null);
      alert("로그아웃 되었습니다.");
      history.push("/");
    });
  };

  const handleEdit = () => {
    if (
      imgUrl === "" ||
      inputUsername === "" ||
      inputEmail === "" ||
      inputPassword === ""
    ) {
      alert("양식을 채워주세요!");
      return;
    }

    // api 맨뒤에 id는??
    // axios.post(
    //   "http://jump-to-hobby/users/update/:id",
    //   {
    //     inputUsername,
    //     inputEmail,
    //     inputPassword,
    //     // users_img, <<< 유저 이미지도 수정할 때 서버로 보내야 할 것같아요.
    //   },
    //   { "Content-Type": "application/json", withCredentials: true }
    // );
  };

  useEffect(() => {
    axios.post("http://localhost:80/imageUpload").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <ModalContainer>
        {isOpen ? (
          <>
            <ModalBackdrop>
              <ModalView>
                <div>회원 정보 수정</div>
                <div>
                  <img src={imgUrl} />
                  <label className="input-file-btn" for="input-file">
                    <div className="icon-text">수정</div>
                  </label>
                  <input
                    type="file"
                    id="input-file"
                    accept="image/*"
                    onChange={handleChangeFile}
                  />
                </div>
                <input
                  type="text"
                  placeholder="name"
                  value={inputUsername}
                  onChange={handleInputUsername}
                />
                <input
                  type="text"
                  placeholder="email"
                  value={inputEmail}
                  onChange={handleInputEmail}
                />
                <input
                  type="password"
                  placeholder="password"
                  value={inputPassword}
                  onChange={handleInputPassword}
                />
                <div className="modal-btn">
                  <div className="btn cancel" onClick={closeModalHandler}>
                    취소
                  </div>
                  <div className="btn comfirm" onClick={handleEdit}>
                    수정
                  </div>
                </div>
              </ModalView>
            </ModalBackdrop>
          </>
        ) : null}
      </ModalContainer>
      <Body>
        <Header>
          <Logo>
            <img src="/images/logo.png" onClick={ToMainPage} />
          </Logo>
          <SideBar>
            <Menu>
              <MenuButton onClick={handleLogout}>로그아웃</MenuButton>
              <MenuButton onClick={ToImagePage}>이미지페이지</MenuButton>
              <MenuButton onClick={ToUploadPage}>업로드게시판</MenuButton>
            </Menu>
          </SideBar>
        </Header>
        <Profile>
          {/* {users_img}  */}
          <div className="userinfo">
            <img src="/images/coffie.jpg" />
            <div className="userinfo-content">
              <div>{username}</div>
              <div>{email}</div>
              <MenuButton onClick={openModalHandler}>회원정보수정</MenuButton>
            </div>
          </div>
        </Profile>
        <SideBar>
          <Menu></Menu>
        </SideBar>
        <ImagesContainer>
          {/* ul 태그 밑에 서버 이미지파일 넣기, 넣을 때 map활용하기 (key도 꼭 넣기!), key는 뭐로할까? */}
          <ul>
            <li>
              <img src="/images/reading.jpg" />
            </li>
            <li>
              <img src="/images/trip.jpg" />
            </li>
            <li>
              <img src="/images/game.jpg" />
            </li>
            <li>
              <img src="/images/sea.jpeg" />
            </li>
            <li>
              <img src="/images/mario.jpg" />
            </li>
            <li>
              <img src="/images/coffie.jpg" />
            </li>
          </ul>
        </ImagesContainer>
        <TopButton onClick={ToScrollTope}>
          <Icon>
            <FontAwesomeIcon icon={faAngleDoubleUp} className="search-arrow" />
          </Icon>
        </TopButton>
      </Body>
    </>
  );
}

export default Mypage;
