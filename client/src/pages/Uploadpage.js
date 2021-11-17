import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: #f2ead3;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: #f2ead3;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: 1px solid #f49c1f;

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

export const Logo = styled.div`
  position: absolute;
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
    background-color: #f49c1f;
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
    border: 1px solid #f49c1f;
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
    background-color: #f49c1f;
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
  const [img_url, setImgUrl] = useState(""); // img src 값.
  const [content, setInputContent] = useState("");
  const [hobby, setInputHobby] = useState("");
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
    if (img_url === "" || content === "" || hobby === "") {
      alert("양식을 채워주세요!");
      return;
    }

    // 이미지 업로드 POST 입니다
    axios
      .post(
        "http://localhost:80/imageUpload",
        {
          img_url,
          content,
          hobby,
        },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then((res) => {
        console.log(res);
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
          <img src={img_url} />
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
              value={hobby}
            />
            {/* 취미 적는 칸 기능 구현하기! */}
          </div>
          <textarea
            rows="10"
            cols="50"
            className="content"
            value={content}
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
