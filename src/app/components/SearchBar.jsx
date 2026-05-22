

"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = ({ queryKey = "searchTerm", placeholder }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set(queryKey, search);
    } else {
      params.delete(queryKey);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-blue-600 transition-all overflow-hidden w-full">

      <div className="pl-3 sm:pl-5 text-slate-400">
        <Search className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder={placeholder || "Search..."}
        className="flex-1 h-12 sm:h-14 px-3 sm:px-4 outline-none bg-transparent text-sm sm:text-base text-slate-700 placeholder:text-slate-400 min-w-0"
      />

      <button
        onClick={handleSearch}
        className="h-9 sm:h-10 px-3 sm:px-4 mr-2 rounded bg-[#163161] text-white text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;