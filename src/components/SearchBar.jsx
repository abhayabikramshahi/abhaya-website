import React, { useState } from "react";
import { companiesOwned } from "../Pages/About";

const COMPANY_QUERY = [
  "which company is owned by abhaya bikram shahi",
  "companies owned by abhaya bikram shahi",
  "abhaya bikram shahi companies",
  "abhaya bikram shahi own"
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const normalized = query.trim().toLowerCase();
    if (COMPANY_QUERY.some(q => normalized.includes(q))) {
      setResults(companiesOwned);
    } else {
      setResults(null);
    }
  };

  return (
    <div className="my-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </form>
      {results && (
        <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Companies owned by Abhaya Bikram Shahi:</h3>
          <ul className="list-disc ml-6">
            {results.map(company => (
              <li key={company}>{company}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
