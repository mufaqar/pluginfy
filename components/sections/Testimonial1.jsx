import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
};

export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-area pt-110 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title">Testimonials</span>
                                <h2 className="title">We are Trusted 5+ Countries Worldwide</h2>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item-wrap">
                        <Swiper {...swiperOptions} className="testimonial-active">
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <p>Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.“</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src="/assets/img/images/testimonial_avatar01.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Loyalista </h4>
                                            <p>CEO of Company</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <p>We had some fun at work together after defining a clear course, and I believe it kept us encouraged.“</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src="/assets/img/images/testimonial_avatar02.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Dedicate-Kitechen</h4>
                                            <p>Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <p>The developer for Pluginfy Technologies operated largely autonomously. The web application functions as intended, and the code is written in accordance with best practices. With a team that was extremely motivated, they took the project seriously. “</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src="/assets/img/images/testimonial_avatar03.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Members-one</h4>
                                            <p>Director of Company</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <p>The team at Pluginfy Technologies assisted the client in scaling up. They work diligently and are adaptable and effective. They could be more straightforward, but they have a highly skilled and adaptable crew.“</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src="/assets/img/images/testimonial_avatar04.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">SWAPZ</h4>
                                            <p>Project Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <p>If your company has a tight budget yet you want to construct an e-commerce platform, I suggest Pluginfy Technologies.“</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src="/assets/img/images/testimonial_avatar02.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Payrexx</h4>
                                            <p>Founder of Company</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <p>They consistently comprehend our viewpoint and collaborate with us to arrive at sensible options. “</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src="/assets/img/images/testimonial_avatar03.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Misterbrixx</h4>
                                            <p>Manager of Company</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="mt-30 text-center">
                            <div className="swiper-pagination3"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
