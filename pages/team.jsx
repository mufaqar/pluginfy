import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Team() {

    return (
        <>
            <Layout breadcrumbTitle="Our Leadership Team" footerStyle={2} breadcrumbCls=" breadcrumb-area-two pt-175">
                {/* community-area */}
                <div className="community-area pt-30">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="community-img">
                                    <img src="/assets/img/images/community_img.png" alt="" />
                                </div>
                                <div className="community-content">
                                    <p>We have experienced Tech Professionals that spent their lives in crafting custom Softwares.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* community-area-end */}
                {/* team-area */}
                <section className="team-area-two pt-110 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <img src="/assets/img/team/khadim.jpeg" alt="" />
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title">Khadim Raath</h2>
                                        <span>CEO OF COMPANY</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/fida.jpeg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Fida Raath</Link></h2>
                                        <span>Co-Founder of company</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/talib.png" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Talib Raath</Link></h2>
                                        <span>Co-Founder of company</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/Saad-Meer.jpeg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Saad Mir</Link></h2>
                                        <span>Sr. Software Engineer</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/Toheed-Ahmed.jpeg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Toheed Ahmed</Link></h2>
                                        <span>Principal Software Engineer</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/arsalan-rasheed.jpeg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Arsalan Rasheed</Link></h2>
                                        <span>Full Stack Developer</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* team-area-end */}
                {/* newsletter-area */}
                <section className="newsletter-area-two">
                    <div className="container">
                        <div className="newsletter-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-7 col-lg-9">
                                    <div className="section-title title-style-two white-title text-center mb-30">
                                        <span className="sub-title">Get update</span>
                                        <h2 className="title">Get latest updates and deals</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="newsletter-form">
                                        <form action="#">
                                            <input type="email" placeholder="Enter your email address" />
                                            <button type="submit" className="btn">Subscribe <span /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="newsletter-shape-wrap-two">
                                <img src="/assets/img/images/h3_newsletter_shape01.png" alt="" />
                                <img src="/assets/img/images/h3_newsletter_shape02.png" alt="" />
                                <img src="/assets/img/images/h3_newsletter_shape03.png" alt="" />
                                <img src="/assets/img/images/h3_newsletter_shape04.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* newsletter-area-end */}
                {/* brand-area */}
                <section className="brand-area-two pt-110">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center mb-80">
                                    <span className="sub-title">Our Partners</span>
                                    <h2 className="title">People Who Trust Us</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row brand-active">
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img01.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img02.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img03.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img04.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img05.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img06.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* brand-area-end */}


            </Layout>
        </>
    )
}