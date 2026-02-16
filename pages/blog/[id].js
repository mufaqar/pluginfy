
import Layout from "@/components/layout/Layout";
import data from "../../util/blog.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    if (id) {
      const foundBlog = data.find((item) => item.id == id);
      setBlogPost(foundBlog);
    }
  }, [id]);

  if (!blogPost) return null;

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
                      <li className="tag">{blogPost.metaTag}</li>
                      <li>
                        <i className="fal fa-clock" />{blogPost.readingTime}
                      </li>
                    </ul>
                  </div>

                  <h2 className="title">{blogPost.title}</h2>

                  {blogPost.contentTop.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}

                  <div className="blog-meta-two bottom">
                    <ul className="list-wrap">
                      <li className="avatar">
                        <img
                          src="/assets/img/blog/blog_avatar01.png"
                          alt={blogPost.author}
                        />{" "}
                        {blogPost.author}
                      </li>
                      <li>
                        <i className="fal fa-calendar" />{blogPost.date}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Main Image */}
                <div className="blog-details-img">
                  <img
                    src={`/assets/img/blog/${blogPost.img}`}
                    alt={blogPost.title}
                    className="w-100"
                  />
                </div>

                {/* Bottom Content */}
                {blogPost.contentBottom?.map((section, idx) => (
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
                {blogPost.comments && (
                  <div className="comment-wrap">
                    <h2 className="title">
                      {blogPost.comments.length} <span>Comments</span>
                    </h2>

                    <div className="latest-comments">
                      <ul className="list-wrap">
                        {blogPost.comments.map((c, i) => (
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

export default BlogDetails;
