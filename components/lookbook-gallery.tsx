"use client";

import { useEffect, useMemo, useState } from "react";

const filters = [
  { id: "all", label: "全部" },
  { id: "women", label: "新中式" },
  { id: "qipao", label: "旗袍" },
  { id: "men", label: "男士正装" },
  { id: "craft", label: "手作细节" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const works = [
  { number: "01", title: "新中式", meta: "MODERN CHINESE · I'm_", className: "lb-modern-chinese", size: "tall", filter: "women" },
  { number: "02", title: "旗袍", meta: "HERITAGE QIPAO · I'm_", className: "lb-qipao", size: "short", filter: "qipao" },
  { number: "03", title: "男士正装", meta: "MENS TAILORING · I'm_", className: "lb-men", size: "short", filter: "men" },
  { number: "04", title: "手作细节", meta: "HANDCRAFT DETAILS · I'm_", className: "lb-detail", size: "tall", filter: "craft" },
] as const;

const qipaoImages = [
  "ChatGPT Image Jul 14, 2026, 12_56_35 PM.png",
  "ChatGPT Image Jul 14, 2026, 01_30_58 PM.png",
  "ChatGPT Image Jul 14, 2026, 01_34_19 PM (1).png",
  "ChatGPT Image Jul 14, 2026, 01_34_19 PM (2).png",
  "ChatGPT Image Jul 14, 2026, 02_05_57 PM (2).png",
  "ChatGPT Image Jul 14, 2026, 02_05_57 PM (1).png",
  "ChatGPT Image Jul 14, 2026, 12_49_56 PM.png",
  "ChatGPT Image Jul 14, 2026, 02_11_07 PM.png",
] as const;

const mensImages = [
  "ChatGPT Image Jul 18, 2026, 03_19_09 PM.png",
  "mmexport1778844480119_Copy.jpg",
  "mmexport1778869742349.jpg",
  "mmexport1778869750932_Copy.jpg",
  "mmexport1778870082316.jpg",
  "mmexport1778869756705.jpg",
  "mmexport1778870071408.jpg",
  "mmexport1778869770168.jpg",
  "mmexport1778869778414.jpg",
  "mmexport1778869762177.jpg",
  "mmexport1778869857191_Copy.jpg",
] as const;

const craftsmanshipImages = [
  "ChatGPT Image Jul 14, 2026, 02_56_43 PM (1).png",
  "ChatGPT Image Jul 14, 2026, 02_56_43 PM (3).png",
  "ChatGPT Image Jul 14, 2026, 02_56_43 PM (5).png",
  "ChatGPT Image Jul 14, 2026, 02_56_43 PM (2).png",
  "ChatGPT Image Jul 14, 2026, 02_56_43 PM (4).png",
] as const;

const qipaoDetailImages = [
  "ChatGPT Image Jul 14, 2026, 02_32_51 PM (2).png",
  "ChatGPT Image Jul 14, 2026, 03_17_55 PM (1).png",
  "ChatGPT Image Jul 14, 2026, 02_32_51 PM (1).png",
  "ChatGPT Image Jul 14, 2026, 02_32_53 PM (7).png",
  "ChatGPT Image Jul 14, 2026, 02_32_53 PM (8).png",
  "ChatGPT Image Jul 14, 2026, 03_17_55 PM (2).png",
  "ChatGPT Image Jul 14, 2026, 02_32_51 PM (3).png",
  "ChatGPT Image Jul 14, 2026, 02_32_51 PM (4).png",
  "ChatGPT Image Jul 14, 2026, 02_32_52 PM (5).png",
  "ChatGPT Image Jul 16, 2026, 02_46_07 PM (1).png",
  "ChatGPT Image Jul 16, 2026, 02_46_08 PM (2).png",
  "ChatGPT Image Jul 14, 2026, 02_32_52 PM (6).png",
] as const;

const mensDetailImages = [
  "mmexport1778844467251_Copy.jpg",
  "mmexport1778869828144_Copy.jpg",
  "mmexport1778869784557.jpg",
  "mmexport1778869792636.jpg",
  "mmexport1778869789146.jpg",
  "mmexport1778869904735_Copy.jpg",
  "mmexport1778869873810_Copy.jpg",
  "mmexport1778844477348_Copy.jpg",
] as const;

const modernChineseImages = [
  "lookbook-modern-chinese-01.png",
  "lookbook-modern-chinese-02.png",
  "lookbook-modern-chinese-03.png",
  "lookbook-modern-chinese-04.png",
  "lookbook-modern-chinese-05.png",
  "lookbook-modern-chinese-06.png",
  "lookbook-modern-chinese-07.png",
  "lookbook-modern-chinese-08.png",
  "lookbook-modern-chinese-09.png",
] as const;

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function LookbookGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<"main" | "details">("main");
  const galleryImages = activeFilter === "qipao" ? qipaoImages : activeFilter === "men" ? mensImages : activeFilter === "craft" ? craftsmanshipImages : modernChineseImages;
  const galleryLabel = activeFilter === "qipao" ? "旗袍" : activeFilter === "men" ? "男士正装" : activeFilter === "craft" ? "手作细节" : "新中式";
  const detailImages = activeFilter === "men" ? mensDetailImages : qipaoDetailImages;
  const lightboxImages = selectedGallery === "details" ? detailImages : galleryImages;
  const visibleWorks = useMemo(
    () => works.filter((work) => activeFilter === "all" || work.filter === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImageIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedImageIndex((currentIndex) => currentIndex === null ? 0 : (currentIndex - 1 + lightboxImages.length) % lightboxImages.length);
      }
      if (event.key === "ArrowRight") {
        setSelectedImageIndex((currentIndex) => currentIndex === null ? 0 : (currentIndex + 1) % lightboxImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImages.length, selectedImageIndex]);

  return (
    <>
      <section className="shell lookbook-index">
        <nav aria-label="作品分类">
          {filters.map((filter) => (
            <button
              aria-pressed={activeFilter === filter.id}
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </nav>
        <p>SELECTED STORIES · 2026</p>
      </section>
      {(activeFilter === "women" || activeFilter === "qipao" || activeFilter === "men" || activeFilter === "craft") && (
        <section aria-label={galleryLabel + "作品图集"} className="shell modern-chinese-gallery">
          <div className="modern-chinese-gallery-grid">
            {galleryImages.map((image, index) => (
              <figure key={image}>
                <button aria-label={"放大查看" + galleryLabel + "服装作品 " + String(index + 1).padStart(2, "0")} onClick={() => { setSelectedGallery("main"); setSelectedImageIndex(index); }} type="button">
                  <img alt={galleryLabel + "服装作品 " + String(index + 1).padStart(2, "0")} loading="lazy" src={siteBasePath + "/images/" + image} />
                </button>
              </figure>
            ))}
          </div>
        </section>
      )}
      {(activeFilter === "qipao" || activeFilter === "men") && (
        <section aria-label="Details" className="shell modern-chinese-gallery lookbook-detail-section">
          <div className="lookbook-detail-heading"><p>Details</p></div>
          <div className="modern-chinese-gallery-grid">
            {detailImages.map((image, index) => (
              <figure key={image}>
                <button aria-label={"放大查看" + galleryLabel + "细节 " + String(index + 1).padStart(2, "0")} onClick={() => { setSelectedGallery("details"); setSelectedImageIndex(index); }} type="button">
                  <img alt={galleryLabel + "细节 " + String(index + 1).padStart(2, "0")} loading="lazy" src={siteBasePath + "/images/" + image} />
                </button>
              </figure>
            ))}
          </div>
        </section>
      )}
      {activeFilter === "all" && (
        <section aria-live="polite" className="shell lookbook-gallery">
          {visibleWorks.map((work) => (
            <article className={`gallery-work ${work.size}`} key={work.title}>
              <button
                aria-label={`选择${work.title}作品`}
                className="gallery-work-select"
                onClick={() => setActiveFilter(work.filter)}
                type="button"
              />
              <div className={`gallery-image ${work.className}`} role="img" aria-label={`${work.title}系列示例图`}>
                <span>{work.number}</span>
              </div>
              <div><p>{work.meta}</p><h2>{work.title}</h2></div>
            </article>
          ))}
        </section>
      )}
      {selectedImageIndex !== null && (
        <div aria-label={galleryLabel + "服装作品预览"} aria-modal="true" className="modern-chinese-lightbox" onClick={() => setSelectedImageIndex(null)} role="dialog">
          <button aria-label="关闭图片预览" className="modern-chinese-lightbox-close" onClick={() => setSelectedImageIndex(null)} type="button">×</button>
          <button
            aria-label="查看上一张图片"
            className="modern-chinese-lightbox-nav previous"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImageIndex((currentIndex) => currentIndex === null ? 0 : (currentIndex - 1 + lightboxImages.length) % lightboxImages.length);
            }}
            type="button"
          >
            ←
          </button>
          <div className="modern-chinese-lightbox-image" onClick={(event) => event.stopPropagation()}>
            <img alt={galleryLabel + "服装作品 " + String(selectedImageIndex + 1).padStart(2, "0")} src={siteBasePath + "/images/" + lightboxImages[selectedImageIndex]} />
            <p>{String(selectedImageIndex + 1).padStart(2, "0")} / {String(lightboxImages.length).padStart(2, "0")}</p>
          </div>
          <button
            aria-label="查看下一张图片"
            className="modern-chinese-lightbox-nav next"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImageIndex((currentIndex) => currentIndex === null ? 0 : (currentIndex + 1) % lightboxImages.length);
            }}
            type="button"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
