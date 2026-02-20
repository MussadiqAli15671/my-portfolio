import { Helmet } from "react-helmet-async";
import Skills from "../components/Skills/Skills";

export default function SkillsPage() {
  return (
    <>
     <Helmet>
  <title>
    Technical Skills | AI, Machine Learning, Full Stack & Cloud Expertise
  </title>

  <meta
    name="description"
    content="Expertise in AI, Machine Learning, Website & Custom Software, NLP, React, Node.js, SaaS Architecture, Cloud & DevOps. Delivering AI-powered and full stack solutions in New Zealand, UAE, Dubai, Saudi Arabia and globally."
  />

  <meta
    name="keywords"
    content="AI Skills, Machine Learning Expert, NLP Developer, Website & Custom Software, React Developer NZ, Node.js Developer UAE, Cloud Engineer Dubai, DevOps Saudi Arabia"
  />

  <link
    rel="canonical"
    href="https://mussadiq-ali-portfolio.vercel.app/skills"
  />
</Helmet>


      <main className="main">
        <Skills />
      </main>
    </>
  );
}
