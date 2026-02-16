// import Layout from "@/components/layout/Layout"
// import Link from "next/link"

// export default function ProjectDetails() {
//     return (
//         <Layout footerStyle={2}>
//             <section className="blog-details-area pt-175 pb-120">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-xl-10">
//                             <div className="blog-details-wrap">
                                
//                                 {/* Top Content */}
//                                 <div className="bd-content-top text-center">
//                                     <div className="blog-meta-two">
//                                         <ul className="list-wrap">
//                                             <li className="tag">
//                                                 <Link href="#">{blogData.category}</Link>
//                                             </li>
//                                             <li>
//                                                 <i className="fal fa-clock" />
//                                                 {blogData.readTime}
//                                             </li>
//                                         </ul>
//                                     </div>

//                                     <h2 className="title">{blogData.title}</h2>
//                                     <p>{blogData.description}</p>

//                                     <div className="blog-meta-two bottom">
//                                         <ul className="list-wrap">
//                                             <li className="avatar">
//                                                 <Link href="#">
//                                                     <img src={blogData.author.image} alt="" />
//                                                     {blogData.author.name}
//                                                 </Link>
//                                             </li>
//                                             <li>
//                                                 <i className="fal fa-calendar" />
//                                                 {blogData.date}, {new Date().getFullYear()}
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 {/* Image */}
//                                 <div className="blog-details-img">
//                                     <img src={blogData.image} alt="" />
//                                 </div>

//                                 {/* Bottom Content */}
//                                 <div className="bd-content-bottom">
//                                     <h2 className="title">{blogData.contentTitle}</h2>

//                                     {blogData.paragraphs.map((para, index) => (
//                                         <p key={index}>{para}</p>
//                                     ))}

//                                     <ul className="list-wrap">
//                                         {blogData.indicators.map((item, index) => (
//                                             <li key={index}>
//                                                 <span>{item.title}</span> {item.text}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
 
//               {/* comments-form */}
//                     <div className="post-comments-form">
//                         <div className="post-comments-title">
//                             <h2 className="title">I Leave Your Comment</h2>
//                         </div>
//                         <div className="comment-form">
//                             <form action="#">
//                                 <div className="row">
//                                     <div className="col-md-6">
//                                         <div className="form-grp">
//                                             <input type="text" placeholder="Name" />
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="form-grp">
//                                             <input type="email" placeholder="Email" />
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="form-grp">
//                                             <input type="text" placeholder="Your Number" />
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="form-grp">
//                                             <input type="text" placeholder="Subject" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="form-grp">
//                                     <textarea name="message" placeholder="Write your message here" />
//                                 </div>
//                                 <button type="submit" className="btn">Send Message <span /></button>
//                             </form>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//         </Layout>
//     )
// }



// const blogData = {
//     category: "Sector",
//     readTime: "5 Min",
//     title: "How to Post a Classified Ad Online or in Newspapers",
//     description:
//         "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet.",
//     author: {
//         name: "Victor Pacheco",
//         image: "/assets/img/blog/blog_avatar01.png",
//     },
//     date: "March 17",
//     image: "/assets/img/blog/blog_details_img.jpg",
//     contentTitle:
//         "Pilotage de la performance : vos indicateurs dans le même viseur",
//     paragraphs: [
//         "Un tableau de bord est un outil de gestion et d'évaluation de l’organisation d'une entreprise.",
//         "Le pilotage de la performance par Skello est une interface développée spécialement pour nos clients.",
//         "Voici le détail des indicateurs que les clients pourront analyser pour optimiser leur gestion."
//     ],
//     indicators: [
//         {
//             title: "Chiffre d’affaires.",
//             text: "Il correspond à la somme des ventes de biens ou de services hors taxes."
//         },
//         {
//             title: "Masse salariale chargée.",
//             text: "Cet indicateur correspond à la masse salariale additionnée aux cotisations patronales."
//         },
//         {
//             title: "Ratio de masse salariale chargée / CA.",
//             text: "Indique le ratio entre le coût de la masse salariale et le revenu."
//         },
//         {
//             title: "Heures travaillées et heures d’absences.",
//             text: "Correspond à la somme des heures travaillées et des absences."
//         }
//     ]
// }
