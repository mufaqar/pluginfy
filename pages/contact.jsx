import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

    return (
        <>
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
                                        <iframe src="https://maps.app.goo.gl/KDSprsKvi5o7h3Gf9" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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