import Link from "next/link"

export default function Team1() {
    return (
        <>
            <section className="team-area pt-130 pb-130">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="team-img-wrap">
                                <img src="/assets/img/team/team_img_shape.png" alt="" className="img-shape" />
                                <img src="/assets/img/team/team_img01.png" alt="" className="img-one" />
                                <img src="/assets/img/team/team_img02.png" alt="" className="img-two" />
                                <img src="/assets/img/team/team_img03.png" alt="" className="img-three" />
                                <img src="/assets/img/team/team_img04.png" alt="" className="img-four" />
                                <img src="/assets/img/team/team_img05.png" alt="" className="img-five" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team-content">
                                <div className="section-title mb-25">
                                    <span className="sub-title">Our Team</span>
                                    <h2 className="title">What We Actually Do</h2>
                                </div>
                                <p>You may build and deploy unique Websites that automate business processes and client-focused workflows with the aid of Pluginfy Technologies. We build websites from the ground up and integrate them with your IT infrastructure.</p>
                                <Link href="/team" className="btn">Meet Our Team <span /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-shape-wrap">
                    <img src="/assets/img/images/team_shape01.png" alt="" className="ribbonRotate" />
                    <img src="/assets/img/images/team_shape02.png" alt="" className="float-bob-x" />
                </div>
            </section>

        </>
    )
}
