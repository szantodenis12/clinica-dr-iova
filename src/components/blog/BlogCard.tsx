import Link from "next/link";
import Icon from "@/components/Icon";
import { blogImage, type BlogPost } from "@/data/blog";

/** .bcard. `withExcerpt` = the /blog/ grid variant (data-cat + <p>); without = "Citiți în continuare" variant. */
export default function BlogCard({ post, withExcerpt }: { post: BlogPost; withExcerpt?: boolean }) {
  return (
    <Link className="bcard" {...(withExcerpt ? { "data-cat": post.cat } : {})} href={`/blog/${post.slug}/`}>
      <div className="img">
        <img src={blogImage(post.slug)} alt="" loading="lazy" />
      </div>
      <div className="txt">
        <div className="bmeta">
          <span className="cat" data-c={post.cat}>
            {post.catLabel}
          </span>
        </div>
        <h3>{post.title}</h3>
        {withExcerpt && <p>{post.excerpt}</p>}
        <div className="foot">
          <span>{post.readMin} min</span>
          <Icon name="arrow-right" />
        </div>
      </div>
    </Link>
  );
}
