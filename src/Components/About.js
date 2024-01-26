import { useContext, useEffect } from "react";
import { IOContext } from "../context/IOContextProvider";

export const About = ({ data }) => {
  const observer = useContext(IOContext);

  useEffect(() => {
    observer.observe(document.getElementById("about"));
  }, []);

  if (data) {
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Sonny's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns download">
              <p>
                <a
                  href={resumeDownload}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
