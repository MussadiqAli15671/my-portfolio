import { Helmet } from "react-helmet-async";

export default function PersonSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mussadiq Ali",
          "jobTitle": "Full Stack & AI Developer",
          "url": "https://mussadiqali15671.github.io/my-portfolio/",
          "sameAs": [
            "https://www.linkedin.com/in/mussadiqaliprogrammer/"
          ],
          "knowsAbout": [
            "Web Development",
            "Full Stack Development",
            "AI Solutions",
            "Chatbot Development",
            "Machine Learning",
            "Software Engineering"
          ]
        })}
      </script>
    </Helmet>
  );
}
