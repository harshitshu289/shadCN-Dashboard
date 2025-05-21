"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-4 px-2 sm:px-0">
      <Input
        type="text"
        placeholder="Search for Title & Keywords..."
        value={query}
        onChange={handleChange}
        className="w-full px-4 py-2 text-sm"
      />
    </div>
  );
}
