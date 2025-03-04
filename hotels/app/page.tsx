import SearchResult from "@/app/ui/search-result/cards";
import { searchResults } from "@/app/lib/data";
import Image from "next/image";
import logoImg from "../public/logo.png";

export default function Home() {
  // assuming this will be dynamic value
  const city = "Sydney";

  return (
    <div
      style={{
        maxWidth: "860px",
        margin: "15px auto",
      }}
    >
      <header
        style={{
          padding: "5px",
        }}
      >
        <Image
          src={logoImg}
          alt="logo"
          style={{ width: "170px", height: "100%" }}
        />
      </header>
      <main>
        <SearchResult results={searchResults.results} city={city} />
      </main>
    </div>
  );
}
