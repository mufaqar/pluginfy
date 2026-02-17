import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link";
import projects from "@/util/projects";

const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function ServiceDetails({ item }) {

    return (
        <>
            <Layout breadcrumbTitle="We Offer a Wide Variety of IT Services" breadcrumbCls=" breadcrumb-area-two pt-175">
                {/* services-details-area */}
                <div className="services-details-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="services-details-img text-center">
                                    <img src="/assets/img/images/services_details_img.png" alt="" />
                                </div>
                                <div className="services-details-content text-center">
                                    <p>We provide a comprehensive range of IT services designed to help businesses thrive in the digital age. From network management and cybersecurity to software development and cloud solutions, our expert team delivers customized technology solutions that enhance productivity, streamline operations, and drive growth. Whatever your IT needs, we have the expertise to keep your systems secure, efficient, and future-ready.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-details-shape">
                        <img src="/assets/img/images/services_details_shape.png" alt="" />
                    </div>
                </div>
                {/* services-details-area-end */}
                {/* counter-area */}
                <section className="counter-area-four pt-100 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="counter-item-wrap-four">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="counter-item-four">
                                                <h2 className="count"><CounterUp className="odometer" count={15} />K+</h2>
                                                <p>Entries in <span>Accunting</span></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter-item-four">
                                                <h2 className="count"><CounterUp className="odometer" count={120} />+</h2>
                                                <p>International <span>Programs</span></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter-item-four">
                                                <h2 className="count"><CounterUp className="odometer" count={46} />+</h2>
                                                <p>Countries in<span>The World</span></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter-item-four">
                                                <h2 className="count"><CounterUp className="odometer" count={17} />+</h2>
                                                <p>Awards <span>Programs</span></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* counter-area-two */}
                {/* company-area */}
                <section className="company-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-9">
                                <div className="section-title white-title text-center mb-65">
                                    <span className="sub-title">Our Company</span>
                                    <h2 className="title">We Are Trusted Across 5+ Countries Worldwide</h2>
                                    <p>Our expertise and commitment to excellence have earned the trust of clients in over five countries. We deliver reliable, innovative IT solutions that help businesses succeed globally, ensuring quality, security, and seamless service no matter where you are.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="company-img">
                                    <img src="/assets/img/images/company_img01.png" alt="" />
                                    <img src="/assets/img/images/company_img02.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="company-content">
                                    <h2 className="title">All Your Questions Are Here</h2>
                                    <div className="company-list">
                                        <ul className="list-wrap">
                                            <li>
                                                <img src="/assets/img/icon/check_icon.png" alt="" />
                                                Seo quotes to inspire your campaign
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/check_icon.png" alt="" />
                                                Much easier to double your business
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/check_icon.png" alt="" />
                                                Free page speed insights tool to find out exactly
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/check_icon.png" alt="" />
                                                Seo quotes to inspire your campaign
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="/about-me" className="btn">Discover More <span /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="company-shape-wrap">
                        <img src="/assets/img/images/company_shape.png" alt="" />
                    </div>
                </section>
                {/* company-area-end */}
                {/* services-area */}
                <section className="inner-services-area-two pt-110 pb-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8">
                                <div className="section-title text-center mb-65">
                                    <h2 className="title">We Create Creative Designs For Every Web Page</h2>
                                    <p>We create creative designs for every web page, combining modern aesthetics, user-friendly layouts, and innovative ideas to deliver engaging and high-performing digital experiences that help your brand stand out.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inner-services-wrap-two">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                    <div className="services-item-five">
                                        <div className="services-icon-five">
                                            <img src="/assets/img/icon/inner_two_services_icon01.png" alt="" />
                                        </div>
                                        <div className="services-content-five">
                                            <h2 className="title">App for Virtual Reality <span>Design, Ideas</span></h2>
                                            <p>A cutting-edge VR app that brings ideas to life through immersive and engaging experiences.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                    <div className="services-item-five">
                                        <div className="services-icon-five">
                                            <img src="/assets/img/icon/inner_two_services_icon02.png" alt="" />
                                        </div>
                                        <div className="services-content-five">
                                            <h2 className="title">Mobile Coin View App <span>Development</span></h2>
                                            <p>Stay updated with live coin prices, trends, and portfolio insights — all in one smart mobile app.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                    <div className="services-item-five">
                                        <div className="services-icon-five">
                                            <img src="/assets/img/icon/inner_two_services_icon03.png" alt="" />
                                        </div>
                                        <div className="services-content-five">
                                            <h2 className="title">Analysis of Security <span>Ideas, Technology</span></h2>
                                            <p>Advanced security insights designed to detect risks, strengthen systems, and ensure data protection.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                    <div className="services-item-five">
                                        <div className="services-icon-five">
                                            <img src="/assets/img/icon/inner_two_services_icon04.png" alt="" />
                                        </div>
                                        <div className="services-content-five">
                                            <h2 className="title">Ecommerce Website <span>Design, Ideas</span></h2>
                                            <p>A powerful online store built for seamless shopping experiences and maximum conversions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* services-area-end */}
                {/* project-area */}
                <section className="inner-project-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="section-title text-center mb-65">
                                    <h2 className="title">Case Studies</h2>
                                    <p>
                                        Explore our detailed case studies showcasing real-world projects,
                                        innovative solutions, and measurable results that highlight our expertise and impact.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="inner-project-item-wrap">
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
                                                <p>{item.des}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* project-area-end */}
                {/* newsletter-area */}
                <section className="newsletter-area pt-110 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center mb-80">
                                    <span className="sub-title">Get update</span>
                                    <h2 className="title">Get latest updates <br /> and dealsi</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="newsletter-form">
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email address" />
                                        <button type="submit" className="btn">Subscribe <span /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter-shape-wrap">
                        <img src="/assets/img/images/newsletter_bg_shape.png" alt="" className="bg-shape" />
                        <img src="/assets/img/images/newsletter_shape01.png" alt="" className="shape-one" />
                        <img src="/assets/img/images/newsletter_shape02.png" alt="" className="shape-two" />
                        <img src="/assets/img/images/newsletter_shape03.png" alt="" className="shape-three" />
                        <img src="/assets/img/images/newsletter_shape04.png" alt="" className="shape-four" />
                        <img src="/assets/img/images/newsletter_shape05.png" alt="" className="shape-five" />
                        <img src="/assets/img/images/newsletter_shape06.png" alt="" className="shape-six" />
                    </div>
                </section>
                {/* newsletter-area-end */}

            </Layout>
        </>
    )
}