import "./skills.css";

const skills = [
  ".NET Core / C#",
  "Entity Framework / LINQ",  
  "React / TypeScript",
  "AI Solutions",
  "Chatbots",
  "NLP",
  "Machine Learning",
  "Neural Networks",
  "JavaScript",
  "Dataverse",
  "GitHub",
  "Azure",
  "Python",
  "Web Scraping",
  "Firebase / Backblaze",
  "SQL / NoSQL",
  "Machine Learning",
  "Neural Networks",
  "Power Apps",
  "CI / CD Pipelines",
];

export default function Skills() {
  return (
    <section id="skills" className="skills3d-section">
      <div className="container">

        <div className="skills3d-title">
          <h2>Skills</h2>
          <p>Technologies and tools I use to build modern scalable systems.</p>
        </div>

        <div className="row g-4">

          {skills.map((skill, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-6">

              <div className="skill3d-card">
                {skill}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}











// export default function Skills() {
//   return (
//      <section id="skills" className="skills section light-background" style={{/* backgroundImage: 'url("assets/img/bg5.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', */
// backgroundColor: 'black'}}>
//       {/* Section Title */}
//       <div className="container section-title" data-aos="fade-up">
//         <h2 style={{color: 'white'}}>Skills</h2>
//         <p style={{color: 'white'}}>
//           I bring a versatile skill set covering both frontend and backend development. My expertise spans scalable APIs, real-time systems, cloud integration, and AI-powered automation—ensuring modern, secure, and high-performance web and mobile solutions.
//         </p>
//       </div>{/* End Section Title */}
//       <div className="container" data-aos="fade-up" data-aos-delay={100}>
//         <div className="row skills-content skills-animation">
//           <div className="col-lg-6">
//             <div className="progress">
//               <span className="skill" style={{color: 'white'}}><span>.NET Core / C#</span>
//                {/* <i className="val">90%</i> */}
//                </span>
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}
//             <div className="progress">
//               <span className="skill" style={{color: 'white'}}><span>Entity Framework / LINQ</span>
//                {/* <i className="val">90%</i> */}
//                </span>
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}
//             <div className="progress">
//               <span className="skill"><span>JavaScript</span>
//                {/* <i className="val">75%</i> */}
//                </span>
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "75%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}
//             <div className="progress">
//               <span className="skill"><span>React / TypeScript</span>
//                {/* <i className="val">85%</i> */}
//                </span>
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}
//             <div className="progress">
//               <span className="skill"><span>Dataverse</span> 
//               {/* <i className="val">60%</i> */}
//               </span>
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}
//             <div className="progress">
//               <span className="skill"><span>Github</span>
//                {/* <i className="val">80%</i> */}
//                </span>
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}
//             <div className="progress">
//               <span className="skill"><span>Azure</span>
//                {/* <i className="val">60%</i> */}
//                </span>
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}
//           </div>
//           <div className="col-lg-6">            
//             <div className="progress">
//               <span className="skill"><span>Python</span>
//                {/* <i className="val">80%</i> */}
//                </span>
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}
//             <div className="progress">
//               <span className="skill"><span>Web Scraping and Automation</span>
//                {/* <i className="val">70%</i> */}
//                </span>
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}
//             <div className="progress">
//               <span className="skill"><span>Firebase / Backblaze B2</span>
//                {/* <i className="val">90%</i> */}
//                </span>
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}
//             <div className="progress">
//               <span className="skill"><span>SQL / NoSQL</span>
//                {/* <i className="val">80%</i> */}
//                </span>
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}
//             <div className="progress">
//               <span className="skill"><span>Machine Learning</span>
//                {/* {/* <i className="val">50%</i> */}
//                </span> 
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}

//              <div className="progress">
//               <span className="skill"><span>Neural Networks</span>
//                {/* {/* <i className="val">50%</i> */}
//                </span> 
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}

//             <div className="progress">
//               <span className="skill"><span>Power Apps</span>
//                {/* <i className="val">60%</i> */}
//                </span>
//               {/* <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar"  style={{ width: "90%" }} />
//               </div> */}
//             </div>{/* End Skills Item */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
