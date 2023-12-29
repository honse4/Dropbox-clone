"use client"
import { FileType } from "@/typings"
import { Button } from "../ui/button"
import { DataTable } from "./Table"
import { columns } from "./columns"
import { useUser } from "@clerk/nextjs"
import { useState } from "react"

function TabbleWrapper({skeletonFiles}: {skeletonFiles: FileType[]}) {
  const {user} = useUser();
  const [initializeFiles, setInitialFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  return (
    <div>
        <Button
        onClick={() => setSort(sort === "desc" ? "asc" : "desc")}>
          Sort by {sort === "desc" ? "Newest" : "Oldest"}
          </Button>

        <DataTable columns={columns} data={skeletonFiles} />
        
    </div>
  )
}

export default TabbleWrapper