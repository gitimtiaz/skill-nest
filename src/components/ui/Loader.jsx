export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4">
      <div
        className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin"
        style={{ borderColor: "#E3DBBB", borderTopColor: "#41431B" }}
      />
      <p className="text-sm font-medium" style={{ color: "rgba(65,67,27,0.55)" }}>
        {text}
      </p>
    </div>
  );
}
