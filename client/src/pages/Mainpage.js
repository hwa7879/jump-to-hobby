import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import axios from "axios";
import ImageModalView from "../component/ImageModalView";

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
  z-index: 3;
`;

export const ModalView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  position: absolute;
  width: 500px;
  height: 200px;
  z-index: 4;
  border: 1px solid blue;

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
    background-color: blue;
  }
`;

export const Logo = styled.img`
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0);
  width: 200px;
  height: 200px;
  margin-left: 20px;
  cursor: pointer;
  position: absolute;
  z-index: 999;
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
  margin-right: 80px;
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
  /* background-color: black; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  /* border: 1px; */
  /* float: right; */

  /* width: 500px;
  height: 600px;
  object-fit: cover;
  border-radius: 50px;
  line-height: 200px;
  height: 200px;
  border: 3px; */

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
  const [isOpen, setIsOpen] = useState(false);
  const [img_url, setImageUrl] = useState("");

  const history = useHistory();

  const openModalHandler = (e) => {
    setImageUrl(e.target.src);
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
  // 이미지 랜덤 렌더링
  // 서버에 모든 이미지 가져오기 요청 GET
  // 컴포넌트가 처음 생성되거나, props가 업데이트되거나, 상태(state)가 업데이트될 때
  useEffect(() => {
    axios.get("http://localhost:80/imageInfo").then((res) => {
      console.log(res);
      // res가 어떻게 오는지 보고 useState를 이용해 이미지들을 관리해야할 듯. // const [images, setImages] = useState("")
    });
  });

  // 이미지 더미 데이터입니다.
  const data = [
    { img_url: "/images/soupe.jpg", posts_id: 0 },
    { img_url: "/images/reading.jpg", posts_id: 1 },
    { img_url: "/images/game.jpg", posts_id: 2 },
    { img_url: "/images/baseketball.jpg", posts_id: 3 },
    { img_url: "/images/mario.jpg", posts_id: 4 },
    { img_url: "/images/pigure.jpg", posts_id: 5 },
    { img_url: "/images/coffie.jpg", posts_id: 6 },
    { img_url: "/images/sea.jpeg", posts_id: 7 },
    { img_url: "/images/travel.jpg", posts_id: 8 },
    { img_url: "/images/trip.jpg", posts_id: 9 },
  ];

  const RandomImage = (data) => {
    let newArr = [];
    while (newArr.length < 6) {
      let number = Math.floor(Math.random() * data.length);
      if (newArr.indexOf(data[number]) === -1) {
        newArr.push(data[number]);
      }
    }
    return newArr;
  };

  /////여기서 모달창 추가

  return (
    <>
      <ModalContainer>
        {isOpen ? (
          <>
            <ModalBackdrop>
              <ModalView>
                <ImageModalView url={img_url} />
                <div className="modal-btn">
                  <div className="btn cancel" onClick={closeModalHandler}>
                    취소
                  </div>
                </div>
              </ModalView>
            </ModalBackdrop>
          </>
        ) : null}
      </ModalContainer>

      <Header>
        <Logo src="/images/logo.png" />
      </Header>

      <Body>
        <Button>
          <MenuButton onClick={ToLogin}>로그인</MenuButton>
          <MenuButton onClick={ToSignup}>회원가입</MenuButton>
          <MenuButton onClick={ToMyPage}>마이페이지</MenuButton>
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
            {/* data대신에 imgaes */}
            {RandomImage(data).map((image) => (
              <li key={image.posts_id} onClick={openModalHandler}>
                <img src={image.img_url} />
              </li>
            ))}
          </ul>
        </div>
      </Body>
    </>
  );
}
