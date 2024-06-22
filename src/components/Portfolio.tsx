import Image from "next/image";
import Link from "next/link";

export const Portfolio = ({ data }: { data: any }) => {
  const projects = data?.projects?.map(
    (project: {
      title: string;
      category: string;
      image: string;
      url: string;
      github?: string;
      paid?: boolean;
      description: string;
      tags?: string[];
    }) => {
      const projectImage = "images/portfolio/" + project.image;

      return (
        <div
          key={project.title}
          className="portfolio-wrapper"
        >
          <Image
            alt={project.title}
            src={projectImage}
            width="400"
            height="200"
            style={{ boxShadow: "8px 8px 10px 2px rgba(250,250,250,0.3)" }}
          />
          <div style={{ marginLeft: 20 }}>
            <h3 style={{ color: "silver" }}>{project.title}</h3>
            <p>{project.description}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 5,
                marginTop: 25,
              }}
            >
              {project.tags?.length &&
                project.tags.map((tag: string) => (
                  <div
                  key={tag}
                    style={{
                      backgroundColor: "aquamarine",
                      color: "#020202",
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      paddingLeft: 4,
                      paddingRight: 4,
                    }}
                  >
                    {tag}
                  </div>
                ))}
            </div>
            <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
              {project.github && (
                <Link href={project.github} target="_blank" title="Go to source code">
                  <i className="fa fa-github" style={{ fontSize: "2.5rem" }} />
                </Link>
              )}
              {project.url && (
                <Link href={project.url} target="_blank" title="Go to live landing page">
                  <i className="fa fa-globe" style={{ fontSize: "2.5rem" }} />
                </Link>
              )}
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h2 style={{ color: "white", textAlign: "center", marginBottom: 75, textDecoration: "underline", textDecorationColor: "aquamarine" }}>My Portfolio</h2>

          {projects && (
            <div
              style={{display: "flex", flexDirection: "column", gap: 50}}
            >
              {projects}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
