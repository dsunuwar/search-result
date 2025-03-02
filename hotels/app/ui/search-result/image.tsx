"use client";

import { PreviewImage } from "@/app/lib/definitions";

export default function Image({ caption, url }: PreviewImage) {
  return (
    <div
      style={{
        width: "145px",
        height: "125px",
        border: "1px solid #ccc",
      }}
    >
      <img src={url} alt={caption} />
    </div>
  );
}
