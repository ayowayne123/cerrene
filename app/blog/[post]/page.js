import { getPost } from "@/public/utils/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default async function Page({ params }) {
  const slug = params.post;
  const post = await getPost(slug);
  console.log(post.body);
  return (
    <div className="top-gutter container ">
      My Post: {params.post}
      <p>Author is {post.author.name}</p>
      <Image
        src={post.mainImage}
        width={500}
        height={500}
        className="object-cover h-full"
        alt="image for blog"
      />
      <div>
        <PortableText value={post.body} />
      </div>
    </div>
  );
}
