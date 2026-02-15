import { Helmet } from "react-helmet-async";

export default function ServiceSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "AI & Full Stack Development Services",
          "provider": {
            "@type": "Person",
            "name": "Mussadiq Ali"
          },
          "areaServed": "Worldwide",
          "serviceType": [
            "Website Development",
            "Full Stack Development",
            "AI Solutions",
            "Chatbot Development",
            "Software Development"
          ],
          "url": "https://my-portfolio-mu-liard-vgt5886y18.vercel.app/#services"
        })}
      </script>
    </Helmet>
  );
}
