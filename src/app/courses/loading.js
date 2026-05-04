export default function CoursesLoading() {
  return (
    <div style={{ background: "#F8F3E1" }} className="min-h-screen">

      {/* Header skeleton */}
      <div style={{ background: "#41431B" }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-3 w-32 rounded-full mb-3 animate-pulse"
               style={{ background: "rgba(248,243,225,0.20)" }} />
          <div className="h-8 w-48 rounded-xl mb-3 animate-pulse"
               style={{ background: "rgba(248,243,225,0.20)" }} />
          <div className="h-4 w-80 rounded-full animate-pulse"
               style={{ background: "rgba(248,243,225,0.15)" }} />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search bar skeleton */}
        <div className="h-12 rounded-xl mb-8 animate-pulse"
             style={{ background: "#E3DBBB" }} />

        {/* Category tabs skeleton */}
        <div className="flex gap-2 mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i}
                 className="h-8 rounded-full animate-pulse"
                 style={{ background: "#E3DBBB", width: `${60 + i * 15}px` }} />
          ))}
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}
                 className="rounded-2xl border overflow-hidden"
                 style={{ background: "#fff", borderColor: "#E3DBBB" }}>
              {/* Image placeholder */}
              <div className="h-44 animate-pulse" style={{ background: "#E3DBBB" }} />
              {/* Content placeholder */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex gap-2">
                  <div className="h-5 w-24 rounded-full animate-pulse"
                       style={{ background: "#F8F3E1" }} />
                  <div className="h-5 w-20 rounded-full animate-pulse"
                       style={{ background: "#F8F3E1" }} />
                </div>
                <div className="h-4 w-full rounded animate-pulse"
                     style={{ background: "#F8F3E1" }} />
                <div className="h-4 w-3/4 rounded animate-pulse"
                     style={{ background: "#F8F3E1" }} />
                <div className="h-4 w-1/2 rounded animate-pulse"
                     style={{ background: "#F8F3E1" }} />
                <div className="h-9 rounded-xl mt-2 animate-pulse"
                     style={{ background: "#E3DBBB" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
