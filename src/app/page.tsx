"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import ArticleTable from "@/components/ArticleTable";
import { articleData } from "@/data/articleData";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const [query, setQuery] = useState("");
  const [pageSize, setPageSize] = useState(9);

  // Filter by search query
  const filtered = articleData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.keyword.toLowerCase().includes(query.toLowerCase())
  );

  // Slice data for current "Show X entries" (pagination can come later)
  const paginatedData = filtered.slice(0, pageSize);

  return (
    <div className="p-4 space-y-4">
      <SearchBar onSearch={setQuery} />
      <ArticleTable data={paginatedData} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 flex-wrap px-2 text-sm">
        <span>
          Total <strong>{filtered.length}</strong> Article Titles
        </span>

        <div className="flex items-center gap-2 flex-wrap">
          <span>Show</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {pageSize}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((size) => (
                <DropdownMenuItem
                  key={size}
                  onClick={() => setPageSize(size)}
                  className={pageSize === size ? "font-semibold" : ""}
                >
                  {size}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <span>entries per page</span>
        </div>
      </div>
    </div>
  );
}
