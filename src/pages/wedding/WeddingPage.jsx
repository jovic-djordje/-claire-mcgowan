import { Link, useParams } from "react-router-dom";
import { works } from "../../assets/images";
import CurvedGallery from "../../components/CurvedGallery";
import "./wedding.style.css";

const WeddingPage = () => {
  const { slug } = useParams();
  const wedding = works.find((work) => work.slug === slug);

  if (!wedding) {
    return (
      <main className="wedding-page">
        <p>Wedding not found.</p>
        <Link to="/">Back to portfolio</Link>
      </main>
    );
  }

  return (
    <main className="wedding-page">
      <header className="wedding-header">
        <span>{String(wedding.id).padStart(2, "0")}</span>
        <h2 className="subtitle">{wedding.couple}&apos;s Wedding</h2>
        <Link className="back-link" to="/">
          Close
        </Link>
      </header>

      {/* Fluid WebGL Curved Gallery */}
      <section className="wedding-gallery-container">
        <CurvedGallery images={wedding.images} />
      </section>
    </main>
  );
};

export default WeddingPage;
