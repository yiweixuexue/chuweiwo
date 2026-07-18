"use client";

import { useMemo, useState } from "react";

const filters = [
  { id: "all", label: "全部" },
  { id: "women", label: "女士新中式" },
  { id: "qipao", label: "旗袍" },
  { id: "men", label: "男士正装" },
  { id: "craft", label: "手作细节" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const works = [
  { title: "兰影", meta: "旗袍定制 · HERITAGE QIPAO", className: "lb-women", size: "tall", filter: "qipao" },
  { title: "留白", meta: "男士正装 · MODERN CEREMONY", className: "lb-men", size: "short", filter: "men" },
  { title: "见山", meta: "女士新中式 · MODERN CHINESE", className: "lb-hero", size: "wide", filter: "women" },
  { title: "一枚盘扣的时间", meta: "非遗手作细节 · CRAFT", className: "lb-detail", size: "short", filter: "craft" },
  { title: "相见", meta: "婚礼与家庭定制 · OCCASION", className: "lb-ceremony", size: "tall", filter: "women" },
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
        {visibleWorks.map((work, index) => (
          <article className={`gallery-work ${work.size}`} key={work.title}>
            <div className={`gallery-image ${work.className}`} role="img" aria-label={`${work.title}系列示例图`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div><p>{work.meta}</p><h2>{work.title}</h2></div>
          </article>
        ))}
      </section>
    </>
  );
}
