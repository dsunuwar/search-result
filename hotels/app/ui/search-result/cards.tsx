"use client";

import { useEffect, useState } from "react";
import { HotelsT } from "@/app/lib/definitions";
import { sortHotelsBy } from "@/app/lib/utils";
import Card from "@/app/ui/search-result/card";
import Dropdown from "@/app/ui/dropdown";

type Props = {
  results: HotelsT[];
  city: string;
};

/**
 *
 * Assumption:
 * - This component may be a part of search component.
 * Where it receives results prop from parent. Hence im not storing it in local state.
 */

const sortOptions = [
  { text: "Price (high-low)", value: "high-low" },
  { text: "Price (low-high)", value: "low-high" },
];

export default function Results({ results = [], city }: Props) {
  const [hotels, setHotels] = useState<HotelsT[]>(results);
  const [sortBy, setSortBy] = useState("high-low");

  const hotelCount = results.length;

  useEffect(() => {
    const sortedByDefault = sortHotelsBy(results, sortOptions[0].value);
    setHotels(sortedByDefault);
  }, [results]);

  const handleChange = (e) => {
    const sortOption = e.target.value;
    setSortBy(sortOption);

    const sortedHotels = sortHotelsBy(hotels, sortOption);
    setHotels(() => sortedHotels);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h3 data-testid="result-count" style={{ margin: "0 5px" }}>
        {hotelCount} hotels in <strong>{city}</strong>.
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }}
      >
        <Dropdown
          label="Sort by"
          selectedSortValue={sortBy}
          data={sortOptions}
          handleChange={handleChange}
        />
      </div>
      <ul>
        {hotels.map((hotel) => (
          <li
            key={hotel.id}
            style={{
              height: "135px",
              padding: "5px",
              display: "flex",
            }}
          >
            <Card property={hotel.property} offer={hotel.offer} />
          </li>
        ))}
      </ul>
    </div>
  );
}
