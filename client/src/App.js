import React, { useState } from "react";
import styled from "styled-components";
import Mainpage from "./pages/Mainpage";

const button_style = {
  position: "absolute",
  zIndex: 1,
};

const content_box = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "skyblue",
  padding: "120px",
};

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Logo src="/images/logo.png" />
      <div style={button_style} onClick={() => console.log("clicked")}>
        <button onClick={() => setIsOpen(true)}>Signup</button>
        <button onClick={() => setIsOpen(true)}>Login / Logout</button>
        <div style={content_box}>이미지추가</div>
        <div style={content_box}>이미지추가</div>
        <button>이미지게시판</button>
        <button>업로드게시판</button>

        <Mainpage open={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            <input type="text" placeholder="email"></input>
          </div>
          <div>
            <input type="text" placeholder="password"></input>
          </div>
        </Mainpage>
      </div>
    </>
  );
}
