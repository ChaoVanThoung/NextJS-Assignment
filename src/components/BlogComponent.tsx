import { BlogType } from "@/lib/blog";
import Link from "next/link";

export default function BlogComponent({
    id,
    userId,
    title,
    body
}: BlogType) {
    // Truncate body text for better card display
    const truncatedBody = body.length > 100 ? `${body.substring(0, 100)}...` : body;

    return (
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-500">#{id}</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    User: {userId}
                </span>
            </div>
            
            <h2 className="text-lg font-semibold mb-2 line-clamp-2" title={title}>
                {title}
            </h2>
            
            <hr className="my-2 border-gray-200" />
            
            <p className="text-gray-600 mb-3 line-clamp-3">
                {truncatedBody}
            </p>
            
            <Link 
                href={`/blog/${id}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
                Read more →
            </Link>
        </div>
    );
}