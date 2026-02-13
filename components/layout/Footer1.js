import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="" /></Link>
                                        </div>
                                        <div className="footer-social">
                                            <ul className="list-wrap">
                                                <li><Link href="https://www.facebook.com/pluginfy"><i className="fab fa-facebook-f" /></Link></li>
                                                <li className="active"><Link href="https://twitter.com/pluginfy"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="https://www.youtube.com/channel/UCoW1Ip3gM6YjBtluhSCJpBA"><i className="fab fa-youtube" /></Link></li>
                                                <li><Link href="https://www.linkedin.com/company/pluginfy-technologies"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="footer-contact">
                                            <span>For Support</span>
                                            <h2 className="title"><Link href="tel:0123456789">+92-300-4801494</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Primary Pages</h4>
                                        <div className="fw-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about-us">About</Link></li>
                                                <li><Link href="/contact">Contact</Link></li>
                                                <li><Link href="/blog">Blog</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Services</h4>
                                        <div className="fw-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/">Plugin & Integration Development</Link></li>
                                                <li><Link href="/">Web Development & Maintenance</Link></li>
                                                <li><Link href="/">AI Development & Automation</Link></li>
                                                <li><Link href="/">Software Development</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">About Store</h4>
                                        <div className="footer-about">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icon/phone_icon.svg" alt="" /><Link href="tel:923004801494">+92-300-4801494</Link></li>
                                                <li><img src="/assets/img/icon/mail_icon.svg" alt="" /><Link href="mailto:hello@pluginfy.com">hello@pluginfy.com</Link></li>
                                                <li><img src="/assets/img/icon/loction_icon.svg" alt="" /><span>307 Madina Heights, Lahore, Pakistan</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="footer-bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="cart-img">
                                        <img src="/assets/img/images/cart_img.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="copyright-text text-end">
                                        <p>© {new Date().getFullYear()} Xolio - NextJS template by AliThemes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </footer>

        </>
    )
}
