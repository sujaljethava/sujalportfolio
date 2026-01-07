import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { slug } = useParams();

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">
        Blog: {slug}
      </h2>
    </div>
  );
}
