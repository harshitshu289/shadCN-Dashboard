"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { articleData } from "@/data/articleData";
import { Button } from "@/components/ui/button";
import { Rss } from "lucide-react";

export default function ArticleTable({ data }: { data: typeof articleData }) {
  return (
    <div className="w-full overflow-x-auto rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <input type="checkbox" />
            </TableHead>
            <TableHead className="min-w-[200px]">Article Title</TableHead>
            <TableHead className="min-w-[180px]">Keyword [Traffic]</TableHead>
            <TableHead className="text-center">Words</TableHead>
            <TableHead className="min-w-[120px]">Created On</TableHead>
            <TableHead className="text-center">Action</TableHead>
            <TableHead className="text-center">Publish</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell className="text-sm whitespace-nowrap">
                {item.title}
              </TableCell>
              <TableCell className="text-sm whitespace-nowrap">
                {item.keyword}
              </TableCell>
              <TableCell className="text-center">{item.words}</TableCell>
              <TableCell className="text-sm">{item.createdOn}</TableCell>
              <TableCell className="text-center">
                <Button variant="outline" size="sm">
                  View
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Rss className="h-5 w-5 text-blue-500" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
