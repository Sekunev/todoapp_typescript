// import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-div d-flex align-items-center flex-column justify-content-center p-2 fs-6">
      <div>
        <a
          href="https://www.linkedin.com/in/abdullah-ahlatli"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin me-3" />
        </a>
        <a href="https://github.com/Sekunev" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github me-3"></i>
        </a>
      </div>
      <article>© Copyright by Sekunev</article>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import "./Footer.css";
// import designSvg from "../../assets/design.svg";

// const Footer = () => {
//   return (
//     <div className="footer-div">
//       <a
//         href="https://www.clarusway.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{ textDecoration: "none" }}
//       >
//         <code className="brand">{"<Clarusway/> "}</code>
//       </a>
//       <img
//         src={designSvg}
//         alt="design"
//         style={{ width: "40px", margin: "0  25px 0 10px" }}
//       />
//       <span>design</span>
//     </div>
//   );
// };

// export default Footer;
