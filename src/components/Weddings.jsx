// Weddings.jsx
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import HomeImage from "../../optimized/HomeWedding/1t3a5538.webp";
import "./Weddings.css";
import Footer from "./Footer";

const Weddings = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [theme, setTheme] = useState("all");
  const [allImages, setAllImages] = useState([]);

  // Static VALID vite glob imports
  const engagementImgs = Object.values(
    import.meta.glob("../../optimized/engagement/*.{jpg,jpeg,png,webp}", { eager: true })
  ).map((m) => m.default);

  const preWeddingImgs = Object.values(
    import.meta.glob("../../optimized/pree-shoot/*.{jpg,jpeg,png,webp}", { eager: true })
  ).map((m) => m.default);

  const weddingBrideImgs = Object.values(
    import.meta.glob("../../optimized/wedding-bride/*.{jpg,jpeg,png,webp}", { eager: true })
  ).map((m) => m.default);

  const weddingImgs = Object.values(
    import.meta.glob("../../optimized/wedding/*.{jpg,jpeg,png,webp}", { eager: true })
  ).map((m) => m.default);

  const receptionImgs = Object.values(
    import.meta.glob("../../optimized/reception/*.{jpg,jpeg,png,webp}", { eager: true })
  ).map((m) => m.default);

  // ❌ Saree Ceremony intentionally excluded from Weddings page

  useEffect(() => {
    const combined = [
      ...engagementImgs.map((src) => ({ src, cat: "engagement" })),
      ...preWeddingImgs.map((src) => ({ src, cat: "pree-shoot" })),
      ...weddingBrideImgs.map((src) => ({ src, cat: "wedding-bride" })),
      ...weddingImgs.map((src) => ({ src, cat: "wedding" })),
      ...receptionImgs.map((src) => ({ src, cat: "reception" })),
    ];

    // Shuffle results
    const shuffled = combined.sort(() => Math.random() - 0.5);
    setAllImages(shuffled);
  }, []);

  // Lazy loader component
  const LazyImage = ({ src }) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={ref}
        style={{
          minHeight: "200px",
          background: "#eee",
          borderRadius: "10px",
          marginBottom: "10px",
          overflow: "hidden",
        }}
      >
        {visible ? (
          <img src={src} alt="" style={{ width: "100%", display: "block" }} loading="lazy" />
        ) : (
          <p style={{ textAlign: "center", paddingTop: "80px" }}>Loading…</p>
        )}
      </div>
    );
  };

  const filteredImages =
    theme === "all" ? allImages.slice(0, 40) : allImages.filter((i) => i.cat === theme);

  return (
    <>
      <Navbar />

      <div className="Hero">
        <div className="firstImage">
          <img src={HomeImage} alt="Wedding Hero" />
          <div className="heroText">
            <h1>Celebrate Love. Forever.</h1>
            <p>Engagements, Pre-Weddings, Weddings & Receptions.</p>
            <a href="/contact-us" className="contact-btn">Book Your Event</a>
          </div>
        </div>
      </div>

      <div className="home-serives">
        <div className="Service-section">
          <div className="head">
            <div className="head-content">
              <h1>Wedding Collections</h1>
              <p>Browse categories below.</p>
            </div>
          </div>

          <div className="specialties">
            {["all", "engagement", "pree-shoot", "wedding-bride", "wedding", "reception"].map(
              (cat) => (
                <button
                  key={cat}
                  className={`specialities-btn ${theme === cat ? "active" : ""}`}
                  onClick={() => setTheme(cat)}
                >
                  {cat === "pree-shoot"
                    ? "Pre Wedding"
                    : cat
                        .replace("-", " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <div className="gallery">
        {filteredImages.map((item, i) => (
          <div key={i} className="gallery-item" onClick={() => setModalOpen(item)}>
            <LazyImage src={item.src} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={() => setModalOpen(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalOpen(null)}>✖</button>
            <img src={isModalOpen.src} className="modal-img" />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Weddings;
