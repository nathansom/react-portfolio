export const About = ({
  data,
}: {
  data: { image?: string; bio?: string; resumedownload?: string };
}) => {
  const profilepic = data.image ? "images/" + data.image : null,
    bio = data.bio,
    resumeDownload = data.resumedownload;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          {profilepic && (
            <img
              className="profile-pic"
              src={profilepic}
              alt="Sonny's Profile Pic"
            />
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
