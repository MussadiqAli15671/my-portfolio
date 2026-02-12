import { Helmet } from "react-helmet-async";
import Resume from "../components/Resume/Resume";

export default function ResumePage() {
  return (
    <>
   <Helmet>
  <title>
    Resume | AI & Full Stack Developer – New Zealand & Global
  </title>

  <meta
    name="description"
    content="Resume of AI & Full Stack Developer with experience in AI systems, Website & Custom Software, SaaS development, cloud architecture and enterprise software projects across New Zealand, UAE, Dubai, Saudi Arabia and globally."
  />

  <meta
    name="keywords"
    content="AI Developer Resume NZ, Full Stack Resume UAE, Website & Custom Software, Machine Learning Engineer CV Dubai, Software Engineer Saudi Arabia"
  />

  <link
    rel="canonical"
    href="https://mussadiqali15671.github.io/my-portfolio/resume"
  />
</Helmet>

    <main className="main">
      <Resume />
    </main>
    </>
  );
}
