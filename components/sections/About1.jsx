import Link from "next/link"

export default function About1() {
    return (
        <>
            <section className="about-area">
                <div className="container custom-container">
                    <div className="about-inner">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-46 order-0 order-lg-2">
                                <div className="about-img text-end">
                                    <img src="/assets/img/images/about_img.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-54">
                                <div className="about-content">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">About Company</span>
                                        <h2 className="title">Your Partner for Software Innovation</h2>
                                    </div>
                                    <p>We are a rapidly expanding firm in the software sector. Our partners’ difficult websites, mobile apps, and modules or plugins allow us to step outside of our comfort zone and reconsider our strategy and methods for software design, development, and delivery.</p>
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon01.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Product Design</h4>
                                                <p>Our product design services enables users to instantly and enthusiastically adopt a company product.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon02.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Development</h4>
                                                <p>Enable customers to access applications while on the go and provide value right at their fingertips.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="about-content-bottom">
                                        <span>Think Creative Agency Are a Full Service Design</span>
                                        <div className="read-more-btn">
                                            <Link href="/about-us" className="btn">Read More <span /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
