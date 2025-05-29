// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-blue-400 flex flex-col items-center justify-center animate-zoomIn"> {/* Added animate-zoomIn here */}
      <div className="text-white text-4xl font-bold">
        About Page
      </div>
      <p className="text-white text-lg mt-4">
        This is the about page.
      </p>
    </div>
  );
}
