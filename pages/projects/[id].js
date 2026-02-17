import Layout from "@/components/layout/Layout";
import Projects from "../../util/projects.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [projectPost, setProjectPost] = useState(null);

  useEffect(() => {
    if (id) {
      const foundProject = Projects.find((item) => item.id == id);
      setProjectPost(foundProject);
    }
  }, [id]);

  if (!projectPost) return null;

  return (
    <Layout footerStyle={2}>
      <section className="blog-details-area pt-175 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="blog-details-wrap">

                {/* Top Content */}
                <div className="bd-content-top text-center">
                  <div className="blog-meta-two">
                    <ul className="list-wrap">
                      <li className="tag">{projectPost.metaTag}</li>
                      <li>
                        <i className="fal fa-clock" />
                        {projectPost.readingTime}
                      </li>
                    </ul>
                  </div>

                  <h2 className="title">{projectPost.title}</h2>

                  {/* Safe Split */}
                  {projectPost.contentTop &&
                    projectPost.contentTop.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}

                  <div className="blog-meta-two bottom">
                    <ul className="list-wrap">
                      <li className="avatar">
                        <img
                          src="/assets/img/blog/blog_avatar01.png"
                          alt={projectPost.author}
                        />
                        {projectPost.author}
                      </li>
                      <li>
                        <i className="fal fa-calendar" />
                        {projectPost.date}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Main Image */}
                <div className="blog-details-img">
                  <img
                    src={`/assets/img/project/${projectPost.img}`}
                    alt={projectPost.title}
                    className="w-100"
                    height={600}
                  />
                </div>

                {/* Bottom Content */}
                {projectPost.contentBottom?.map((section, idx) => (
                  <div key={idx} className="bd-content-bottom">
                    <h2 className="title">{section.heading}</h2>

                    {section.paragraphs?.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}

                    {section.list && (
                      <ul className="list-wrap">
                        {section.list.map((li, i) => (
                          <li key={i}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Comments */}
                {projectPost.comments && (
                  <div className="comment-wrap">
                    <h2 className="title">
                      {projectPost.comments.length} <span>Comments</span>
                    </h2>

                    <div className="latest-comments">
                      <ul className="list-wrap">
                        {projectPost.comments.map((c, i) => (
                          <li key={i}>
                            <div className="comments-box">
                              <div className="comments-avatar">
                                <img
                                  src={`/assets/img/blog/comment_avatar0${i + 1}.png`}
                                  alt={c.name}
                                />
                              </div>
                              <div className="comment-text">
                                <h4 className="title">{c.name}</h4>
                                <span>
                                  <i className="fal fa-calendar-alt" />
                                  {c.date}
                                </span>
                                <p>{c.text}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetails;
