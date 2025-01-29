import { CollapsibleTable } from "@/components/table/Table";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <p className="text-4xl font-semibold text-gray-800 my-16">
        Welcome to the Book Generator App!
      </p>

      <div className="w-full max-w-[1200px] p-6 bg-white shadow-lg rounded-lg border border-gray-200 mb-8">
        <CollapsibleTable />
      </div>
    </div>
  );
}
