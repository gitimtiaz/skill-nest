export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4"
         style={{ background: "#F8F3E1" }}>
      <div
        className="w-12 h-12 rounded-full border-4 animate-spin"
        style={{ borderColor: "#E3DBBB", borderTopColor: "#41431B" }}
      />
      <p className="text-sm font-medium" style={{ color: "rgba(65,67,27,0.50)" }}>
        Loading...
      </p>
    </div>
  );
}
