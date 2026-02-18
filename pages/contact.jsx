import Layout from "@/components/layout/Layout"
import SEO from "@/components/SEO"
import Link from "next/link"
export default function Contact() {

    return (
        <>
            <SEO
                title="Start Your Project with a Leading Software Development Company"
                description="Looking for a reliable software development company? Get in touch with our expert team to discuss your project, explore innovative solutions, and turn your ideas into reality."
                keywords="digital solutions company, custom software development , digital transformation services"
                url="https://pluginfy"
            />
            <Layout breadcrumbTitle="Contact Us" footerStyle={2} bShape breadcrumbCls="breadcrumb-area-four pt-175 pb-160">
                <section className="inner-contact-area">
                    <div className="container">
                        <div className="inner-contact-wrap">
                            <div className="row">
                                <div className="col-xl-9 col-lg-10">
                                    <div className="section-title title-style-two mb-50">
                                        <h2 className="title">Have a <span>Cool Project?</span> Get in touch!</h2>
                                    </div>
                                    <div className="inner-contact-form-wrap">
                                        <form action="#">
                                            <div className="form-grp">
                                                <label htmlFor="name"><i className="fas fa-user" /></label>
                                                <input type="text" id="name" placeholder="Name" />
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="phone"><i className="fas fa-phone" /></label>
                                                <input type="text" id="phone" placeholder="Phone" />
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="email"><i className="fas fa-envelope" /></label>
                                                <input type="email" id="email" placeholder="Email Address" />
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="subject"><i className="fas fa-book-alt" /></label>
                                                <input type="text" id="subject" placeholder="Subject" />
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="comment"><i className="fas fa-user-edit" /></label>
                                                <textarea name="comment" id="comment" placeholder="How can we help you? Feel free to get in touch!" />
                                            </div>
                                            <button type="submit" className="btn">Send Message <span /></button>
                                        </form>
                                    </div>
                                    <div id="contact-map">
                                        <iframe src="https://www.google.com/maps/dir//Maulana+Shaukat+Ali+Rd,+Lahore,+Pakistan/@31.4826186,74.2974482,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391906aa17d13639:0x8195e498b38efc0c!2m2!1d74.2974482!2d31.4826186?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                    <div className="inner-contact-info">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="contact-info-item">
                                                    <div className="icon">
                                                        <img src="/assets/img/icon/loction_icon03.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Address</h6>
                                                        <p>307 Madina Heights, Lahore,<br /> Pakistan</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="contact-info-item">
                                                    <div className="icon">
                                                        <img src="/assets/img/icon/mail_icon03.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Email</h6>
                                                        <Link href="mailto:hello@pluginfy.com">hello@pluginfy.com</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="contact-info-item">
                                                    <div className="icon">
                                                        <img src="/assets/img/icon/phone_icon03.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Phone</h6>
                                                        <Link href="tel:+923004801494">+92-300-4801494</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}