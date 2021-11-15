// import React from "react";

// const OVERLAY_STYLES = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: "rgba(0,0,0, .7)",
//   //zIndex: 1000,
// };

// const MODAL_STYLES = {
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   backgroundColor: "#FFF",
//   padding: "50px",
//   zIndexL: 1000,
// };

// export default function Signup({ Signup, notSignup }) {
//   if (!Signup) return null;

//   return (
//     <>
//       <div style={OVERLAY_STYLES}></div>
//       <div style={MODAL_STYLES}>
//         <div>
//           <input type="text" placeholder="username"></input>
//         </div>
//         <div>
//           <input type="text" placeholder="password"></input>
//         </div>
//         <div>
//           <input type="text" placeholder="username"></input>
//         </div>
//         <button onClick={notSignup}>회원가입하기</button>
//       </div>
//     </>
//   );
// }
