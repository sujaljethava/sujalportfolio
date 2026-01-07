import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">Blog</h2>
      <Link to="/blog/sample-post" className="text-blue-400 underline">
        Sample Blog Post
      </Link>
    </div>
  );
}
