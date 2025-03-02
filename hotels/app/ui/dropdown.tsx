"use client";

type Props = {
  label: string;
  selectedSortValue: string;
  data: {
    text: string;
    value: string;
  }[];
  handleChange: (e) => void;
};

export default function Dropdown({
  label,
  data,
  handleChange,
  selectedSortValue,
}: Props) {
  return (
    <label>
      {label}
      <select value={selectedSortValue} onChange={handleChange}>
        {data.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </label>
  );
}
