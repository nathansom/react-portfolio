import React from "react";

export const Footer = ({ data }) => {
  const networks = data?.social?.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          {networks && <ul className="social-links">{networks}</ul>}

          <ul className="copyright">
            <li>
              Made by{" "}
              <a title="Nathan Somsa-ard" href="https://nathancodes.dev/">
                Nathan Somsa-ard
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
