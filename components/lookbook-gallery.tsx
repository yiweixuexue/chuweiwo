"use client";

import { useMemo, useState } from "react";

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

export function LookbookGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const visibleWorks = useMemo(
    () => works.filter((work) => activeFilter === "all" || work.filter === activeFilter),
    [activeFilter],
  );

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
    </>
  );
}
