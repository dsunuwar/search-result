"use client";

import { searchResults } from "@/app/lib/data";
import Card from "@/app/ui/search-result/card";

/**
 *
 * Assumption:
 * - This component may be a part of search component.
 * Where it receives results prop from parent. Hence im not storing it in local state.
 */
export default function Results() {
  console.log(searchResults);
  const hotelCount = searchResults.results.length;
  const hotels = searchResults.results;

  // assuming this will be dynamic value
  const city = "Sydney";

  return (
    <div>
      <h3>
        {hotelCount} hotels in <strong>{city}</strong>
      </h3>
      <ul>
        {hotels?.map((hotel) => (
          <li
            key={hotel.id}
            style={{
              height: "135px",
              padding: "5px",
              display: "flex",
            }}
          >
            <Card property={hotel.property} />
          </li>
        ))}
      </ul>
    </div>
  );
}
