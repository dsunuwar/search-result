import SearchResult from "@/app/ui/search-result/cards";
import { searchResults } from "@/app/lib/data";

export default function Home() {
  // assuming this will be dynamic value
  const city = "Sydney";

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <SearchResult results={searchResults.results} city={city} />
      </main>
    </div>
  );
}
