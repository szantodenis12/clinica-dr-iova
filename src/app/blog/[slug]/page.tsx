import { notFound } from "next/navigation";
import "@/styles/blog.css";
import "@/styles/mobile.css"; // always last
import { buildMetadata } from "@/lib/seo";
import { blogPosts, blogImage, getPost } from "@/data/blog";
import { blogBodies } from "@/content/blog";
import ArticleTemplate from "@/components/blog/ArticleTemplate";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({ title: post.metaTitle, description: post.metaDescription, path: `/blog/${slug}/`, ogImage: blogImage(slug) });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const Body = blogBodies[slug];
  if (!post || !Body) notFound();
  return <ArticleTemplate post={post} Body={Body} />;
}
