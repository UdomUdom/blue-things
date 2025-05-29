// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-blue-400 flex flex-col items-center justify-center">
      <div className="animate-fadeInContent"> {/* Apply animation here */}
        <div className="text-white text-4xl font-bold text-center"> {/* Added text-center */}
          About Page
        </div>
        <p className="text-white text-lg mt-4 text-center"> {/* Added text-center */}
          This is the about page.
        </p>
      </div>
    </div>
  );
}
