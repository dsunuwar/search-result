"use client";

import { PromotionT } from "@/app/lib/definitions";

export default function PromotionBadge({ title }: PromotionT) {
  return (
    <div style={{ position: "relative" }}>
      <span
        style={{
          backgroundColor: "#fff",
          color: "#E00E00",
          padding: "2px 8px",
          position: "absolute",
          top: "8px",
        }}
      >
        {title}
      </span>
    </div>
  );
}
