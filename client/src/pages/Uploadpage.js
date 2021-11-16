import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const MainWrapper = styled.div`
  display: flex;
`;

export const ModalContainer = styled.div`
  position: relative;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(140, 140, 140, 0.5); */
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
  height: 200px;
  z-index: 2;
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

  .img-btn-container {
    width: 700px;
    height: 40px;
    background-color: gray;
  }

  > img {
    margin-top: 30px;
    width: 700px;
    height: 400px;
    object-fit: cover;
    background-color: #efefef;
  }
  > .content {
    font-size: 1rem;
    height: 150px;
    padding-top: 10px;
    padding-left: 5px;
  }

  .input-hobby {
    font-size: 1rem;
    width: 120px;
    height: 40px;
    padding-left: 5px;
  }
`;

export const Button = styled.div`
  input {
    display: none;
  }

  .side-btn {
    display: flex;
    justify-content: end;
  }
  .upload-btn {
    cursor: pointer;
    width: 100px;
    height: 35px;
    background-color: blue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cancel {
    cursor: pointer;
    background-color: gray;
  }

  .input-file-btn {
    cursor: pointer;
    display: flex;
    margin-right: 20px;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    border-radius: 50px;
    color: white;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  display: flex;
  width: 100px;
  height: 30px;
  margin: 5px 9px;
  .search-icon {
    display: flex;
    color: white;
    width: 29px;
    height: 29px;
  }
  .icon-text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 30px;
    margin: 10px 5px;
  }
`;

const Uploadpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState(""); // img src 값.
  const [inputContent, setInputContent] = useState("");
  const [inputHobby, setInputHobby] = useState("");
  const history = useHistory();

  const openModalHandler = () => {
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

  const handleChangeHobbyContent = (e) => {
    setInputHobby(e.target.value);
  };

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
    if (imgUrl === "" || inputContent === "" || inputHobby === "") {
      alert("양식을 채워주세요!");
      return;
    }

    // 이미지 업로드 POST 입니다
    axios
      .post(
        "http://jump-to-hobby/images/upload",
        {
          imgUrl,
          inputHobby,
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
      <ModalContainer>
        {isOpen ? (
          <>
            <ModalBackdrop>
              <ModalView>
                <div>글 작성을 취소하시겠습니까?</div>
                <div className="modal-btn">
                  <div className="btn cancel" onClick={closeModalHandler}>
                    취소
                  </div>
                  <div className="btn comfirm" onClick={ToMainPage}>
                    확인
                  </div>
                </div>
              </ModalView>
            </ModalBackdrop>
          </>
        ) : null}
      </ModalContainer>
      <MainWrapper>
        <Logo>
          <img src="/images/logo.png" onClick={ToMainPage} />
        </Logo>
        <UploadWrapper>
          <img src={imgUrl} />
          <div className="img-btn-container">
            <Button>
              <Icon>
                <label className="input-file-btn" for="input-file">
                  <FontAwesomeIcon icon={faImage} className="search-icon" />
                  <div className="icon-text">이미지</div>
                </label>
                <input
                  type="file"
                  id="input-file"
                  accept="image/*"
                  onChange={handleChangeFile}
                />
              </Icon>
            </Button>
          </div>
          <div className="img-btn-container">
            <input
              type="text"
              className="input-hobby"
              placeholder="취미"
              onChange={handleChangeHobbyContent}
              value={inputHobby}
            />
            {/* 취미 적는 칸 기능 구현하기! */}
          </div>
          <textarea
            rows="10"
            cols="50"
            className="content"
            value={inputContent}
            onChange={handleChangeContent}
          />
          <Button>
            <div className="side-btn">
              <div className="upload-btn cancel" onClick={openModalHandler}>
                취소
              </div>
              <div className="upload-btn" onClick={handleUpload}>
                업로드
              </div>
            </div>
          </Button>
        </UploadWrapper>
      </MainWrapper>
    </>
  );
};

export default Uploadpage;
