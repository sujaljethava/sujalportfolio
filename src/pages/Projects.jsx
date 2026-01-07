import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>

      <Link
        to="/projects/sample-project"
        className="text-blue-400 underline"
      >
        Sample Project
      </Link>
    </div>
  );
}
