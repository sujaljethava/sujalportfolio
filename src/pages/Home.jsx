import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  return (
    <AnimatedSection>
      <div className="min-h-[70vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">Sujal</span>
        </h1>

        <p className="mt-4 text-xl text-gray-400">
          React.js & ERPNext Developer
        </p>
      </div>
    </AnimatedSection>
  );
}
