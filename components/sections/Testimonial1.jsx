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
const testimonials = [
    {
        id: 1,
        text: "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience.",
        image: "/assets/img/images/testimonial_avatar01.png",
        name: "Loyalista",
        role: "CEO of Company",
    },
    {
        id: 2,
        text: "We had some fun at work together after defining a clear course, and I believe it kept us encouraged.",
        image: "/assets/img/images/testimonial_avatar02.png",
        name: "Dedicate-Kitechen",
        role: "Developer",
    },
    {
        id: 3,
        text: "The developer for Pluginfy Technologies operated largely autonomously...",
        image: "/assets/img/images/testimonial_avatar03.png",
        name: "Members-one",
        role: "Director of Company",
    },
    {
        id: 4,
        text: "The team at Pluginfy Technologies assisted the client in scaling up...",
        image: "/assets/img/images/testimonial_avatar04.png",
        name: "SWAPZ",
        role: "Project Manager",
    },
    {
        id: 5,
        text: "If your company has a tight budget yet you want to construct an e-commerce platform...",
        image: "/assets/img/images/testimonial_avatar02.png",
        name: "Payrexx",
        role: "Founder of Company",
    },
    {
        id: 6,
        text: "They consistently comprehend our viewpoint and collaborate with us...",
        image: "/assets/img/images/testimonial_avatar03.png",
        name: "Misterbrixx",
        role: "Manager of Company",
    },
];
export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-area pt-110 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title">Testimonials</span>
                                <h2 className="title">
                                    We are Trusted 5+ Countries Worldwide
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-item-wrap">
                        <Swiper {...swiperOptions} className="testimonial-active">
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="testimonial-item">
                                        <div className="testimonial-content">
                                            <p>{item.text}</p>
                                        </div>
                                        <div className="testimonial-info">
                                            <div className="thumb">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">{item.name}</h4>
                                                <p>{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
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
