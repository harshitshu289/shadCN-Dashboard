"use client";
import Link from "next/link";
import React from "react";
import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "./ui/sidebar";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4">
      {/* LEFT */}
      <div className="flex justify-between sm:justify-start items-center gap-4">
        <SidebarTrigger />
        <Link href="/" className="text-sm font-medium">
          Dashboard
        </Link>
      </div>

      {/* CENTER */}
      <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Articles</h1>

        {/* Toggle Group: hidden on small screens */}
        <ToggleGroup
          type="single"
          className="hidden sm:flex border rounded-full overflow-x-auto max-w-full w-full sm:w-fit mx-auto"
          defaultValue="generated"
        >
          <ToggleGroupItem
            value="generated"
            className="rounded-none px-4 py-2 text-sm whitespace-nowrap data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            Generated Articles
          </ToggleGroupItem>
          <ToggleGroupItem
            value="published"
            className="rounded-none px-4 py-2 text-sm whitespace-nowrap data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            Published Articles
          </ToggleGroupItem>
          <ToggleGroupItem
            value="scheduled"
            className="rounded-none px-4 py-2 text-sm whitespace-nowrap data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            Scheduled Articles
          </ToggleGroupItem>
          <ToggleGroupItem
            value="archived"
            className="rounded-none px-4 py-2 text-sm whitespace-nowrap data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            Archived Articles
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-end gap-4">
        {/* Theme toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="rounded-full size-7"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
