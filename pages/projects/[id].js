import { useRouter } from "next/router";
import projects from "../../util/projects.json";
import Layout from "@/components/layout/Layout";

export default function ProjectDetails() {
  const router = useRouter();

  if (!router.isReady) return null;

  const { slug } = router.query;

  // Find project by slug
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <Layout footerStyle={2}>
        <div className="container pt-120 pb-120">
          <h2>Project Not Found</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout footerStyle={2}>
      <section className="project-details-area pt-175 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">

              <h2 className="title mb-20">{project.title}</h2>

              <p className="author mb-30">By {project.author}</p>

              <p className="mb-40" style={{ whiteSpace: "pre-line" }}>
                {project.contentTop}
              </p>

              <div className="blog-details-img mb-40">
                <img
                  src={`/assets/img/project/${project.img}`}
                  alt={project.title}
                  className="w-100"
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
              </div>

              <div className="project-meta mb-20">
                <span>{project.metaTag}</span> |{" "}
                <span>{project.date}</span> |{" "}
                <span>{project.readingTime}</span>
              </div>

              {project.contentBottom?.map((section, index) => (
                <div key={index} className="mb-40">
                  <h3 className="mb-20">{section.heading}</h3>

                  {section.paragraphs?.map((para, i) => (
                    <p key={i} className="mb-15">{para}</p>
                  ))}

                  {section.list && (
                    <ul className="list-style-two mt-20">
                      {section.list.map((item, liIndex) => (
                        <li key={liIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
