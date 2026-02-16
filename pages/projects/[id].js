import Link from "next/link";
import projects from "../../util/projects.json";

const Projects = () => {
  return (
    <section className="inner-project-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-65">
              <h2 className="title">Case Studies</h2>
              <p>
                Explore our detailed case studies showcasing real-world projects,
                innovative solutions, and measurable results.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {projects.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="inner-project-item">
                <div className="inner-project-thumb">
                  <Link href={`/projects/${item.id}`}>
                    <img
                      src={`/assets/img/project/${item.img}`}
                      alt={item.title}
                    />
                  </Link>
                </div>

                <div className="inner-project-content">
                  <h3 className="title">
                    <Link href={`/projects/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


