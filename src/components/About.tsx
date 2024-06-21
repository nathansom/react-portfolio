import Image from "next/image";

import profilepic from "../../public/images/profilepic.webp";

export const About = ({
  data,
}: {
  data: { image?: string; bio?: string; resumedownload?: string };
}) => {
  const bio = data.bio,
    resumeDownload = data.resumedownload;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          {profilepic && (
            <Image src={profilepic} alt="Nathan's profile picture" style={{borderRadius: "50%"}} />
          )}
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          {bio && <p>{bio}</p>}
          <div className="row">
            <div className="columns download">
              <p>
                {resumeDownload && (
                  <a
                    href={resumeDownload}
                    target="_blank"
                    rel="noreferrer"
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
