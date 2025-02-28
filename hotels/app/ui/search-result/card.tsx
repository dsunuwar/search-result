import { Property } from "@/app/lib/definitions";
import Image from "@/app/ui/search-result/image";
type Props = {
  property: Property;
};

export default function Card({ property }: Props) {
  const { title, address, previewImage } = property;

  return (
    <>
      <section
        style={{
          flex: "0 0 150px",
        }}
      >
        <Image
          caption={previewImage.caption}
          url={previewImage.url}
          imageType={previewImage.imageType}
        />
      </section>
      <div
        style={{
          borderTop: "1px solid #ccc",
          flex: "1 1 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <section
          style={{
            flex: "1 1 auto",
          }}
        >
          <h1>{title}</h1>
          <p>{address.join(", ")}</p>
        </section>
        <section
          style={{
            justifyContent: "flex-end",
          }}
        >
          <h1>$329</h1>
        </section>
      </div>
    </>
  );
}
