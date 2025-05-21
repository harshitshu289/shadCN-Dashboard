"use client";
import React from "react";
import Link from "next/link";
import { SidebarMenuSubButton } from "@/components/ui/sidebar";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarSeparator,
} from "./ui/sidebar";
import {
  BadgeInfo,
  BellRing,
  ChevronDown,
  ChevronUp,
  DollarSign,
  ExternalLink,
  IdCardIcon,
  Link2,
  MessageCircle,
  Newspaper,
  Plug,
  Star,
  User2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-center">abun</h1>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full border px-12 py-2 text-sm shadow-sm hover:bg-muted">
              <span className="h-5 w-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
              amazon.com
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start"></DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <Newspaper className="mr-2 text-blue-500" />
                <span className="font-bold">Articles</span>
                <ChevronUp className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Create Article
                </SidebarMenuSubButton>
                <SidebarMenuSubButton className="text-xs ml-6">
                  <span className="text-blue-500">Generated Articles</span>
                </SidebarMenuSubButton>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Keyword Projects
                </SidebarMenuSubButton>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Ai keyword to Article
                </SidebarMenuSubButton>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Steal Competitor Keyword
                </SidebarMenuSubButton>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Import Keyword from GSC
                </SidebarMenuSubButton>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <IdCardIcon className="mr-2 text-blue-500" />
                <span className="font-bold">Auto Blog</span>
                <ChevronDown className="ml-auto transition-transform opacity-0 group-data-[state=open]/collapsible:opacity-100" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Create Blog
                </SidebarMenuSubButton>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Generated Blogs
                </SidebarMenuSubButton>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <Link2 className="mr-2 text-blue-500" />
                <span className="font-bold">Internal Links</span>
                <ChevronDown className="ml-auto transition-transform opacity-0 group-data-[state=open]/collapsible:opacity-100" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Create Links
                </SidebarMenuSubButton>
                <SidebarMenuSubButton className="text-xs ml-6">
                  keyword Links
                </SidebarMenuSubButton>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <ExternalLink className="mr-2 text-blue-500" />
                <span className="font-bold">Free BackLinks</span>
                <ChevronDown className="ml-auto transition-transform opacity-0 group-data-[state=open]/collapsible:opacity-100" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Create Links
                </SidebarMenuSubButton>
                <SidebarMenuSubButton className="text-xs ml-6">
                  keyword Links
                </SidebarMenuSubButton>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <Plug className="mr-2 text-blue-500" />
                <span className="font-bold">Integrations</span>
                <ChevronDown className="ml-auto transition-transform opacity-0 group-data-[state=open]/collapsible:opacity-100" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Create Integrations
                </SidebarMenuSubButton>
                <SidebarMenuSubButton className="text-xs ml-6">
                  new Integrations
                </SidebarMenuSubButton>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <Star className="mr-2 text-blue-500" />
                <span className="font-bold">Subscription</span>
                <ChevronDown className="ml-auto transition-transform opacity-0 group-data-[state=open]/collapsible:opacity-100" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSubButton className="text-xs ml-6">
                  All Subscriptions
                </SidebarMenuSubButton>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <DollarSign className="mr-2 text-blue-500" />
                <span className="font-bold">Affiliate Program</span>
                <ChevronDown className="ml-auto transition-transform opacity-0 group-data-[state=open]/collapsible:opacity-100" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Create Affiliate program
                </SidebarMenuSubButton>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <BadgeInfo className="mr-2 text-blue-500" />
                <span className="font-bold">Help Center</span>
                <ChevronDown className="ml-auto transition-transform opacity-0 group-data-[state=open]/collapsible:opacity-100" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Contact Us
                </SidebarMenuSubButton>
                <SidebarMenuSubButton className="text-xs ml-6">
                  About Us
                </SidebarMenuSubButton>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <BellRing className="mr-2 text-blue-500" />
                <span className="font-bold">Updates</span>
                <ChevronDown className="ml-auto transition-transform opacity-0 group-data-[state=open]/collapsible:opacity-100" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Get all Updates
                </SidebarMenuSubButton>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <MessageCircle className="mr-2 text-blue-500" />
                <span className="font-bold">Live Chat Support</span>
                <ChevronDown className="ml-auto transition-transform opacity-0 group-data-[state=open]/collapsible:opacity-100" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSubButton className="text-xs ml-6">
                  Connect live Chat
                </SidebarMenuSubButton>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarSeparator />

      <SidebarFooter>
        <SidebarMenuSubButton>
          <div className="flex gap-2 my-6 font-semibold">
            <User2 className="mr-2 text-blue-500" />
            Profile
          </div>
        </SidebarMenuSubButton>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
