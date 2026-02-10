"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabOptions = [
  { value: "editors-picks", label: "Editor's picks" },
  { value: "in-real-life", label: "In real life" },
  { value: "most-liked", label: "Most-liked" },
  { value: "most-recent", label: "Most-recent" },
  { value: "under-100", label: "Under $100" },
]

export function FeedTabs() {
  const [activeTab, setActiveTab] = useState("editors-picks")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
        {tabOptions.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
