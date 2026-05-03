"use client";

import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <Search
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: "rgba(65,67,27,0.45)" }}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search courses by title..."
        className="w-full pl-11 pr-10 py-3 rounded-xl border text-sm outline-none
                   transition-colors duration-150"
        style={{
          background: "#fff",
          borderColor: "#E3DBBB",
          color: "#41431B",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#AEB784")}
        onBlur={(e) => (e.target.style.borderColor = "#E3DBBB")}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full
                     hover:opacity-70 transition-opacity"
          aria-label="Clear search"
        >
          <X size={14} style={{ color: "#41431B" }} />
        </button>
      )}
    </div>
  );
}
