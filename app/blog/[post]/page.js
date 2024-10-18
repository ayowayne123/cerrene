import { getPost } from "@/public/utils/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";


// custom styles for portable text
const customComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8">
        <Image
          src={value.asset.url}
          alt={value.alt || "Blog image"}
          width={800}
          height={450}
          className="rounded-lg"
        />
      </div>
    ),
  },
  block: {
    // Custom styles for normal paragraph text
    normal: ({ children }) => <p className="my-4 text-xl leading-[140%] font-satoshi">{children}</p>,

    // Custom styles for h1
    h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,

    // Custom styles for h2
    h2: ({ children }) => <h2 className="text-3xl font-semibold my-5">{children}</h2>,

    // Custom styles for h3
    h3: ({ children }) => <h3 className="text-2xl font-semibold my-5">{children}</h3>,

    // Custom styles for block quotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-5">
        {children}
      </blockquote>
    ),
  },
  list: {
    // Custom styles for bullet lists (unordered)
    bullet: ({ children }) => <ul className="list-disc ml-5 space-y-2">{children}</ul>,

    // Custom styles for numbered lists (ordered)
    number: ({ children }) => <ol className="list-decimal ml-5 space-y-2">{children}</ol>,
  },
  listItem: {
    // Custom styles for list items
    bullet: ({ children }) => <li className="text-xl leadixl-[140%] font-satoshi">{children}</li>,
    number: ({ children }) => <li className="text-xl leading-[140%] font-satoshi">{children}</li>,
  },
  marks: {
    // Custom styles for links
    link: ({ value, children }) => (
      <a href={value.href} className="text-blue-600 underline">
        {children}
      </a>
    ),
  },
};
export default async function Page({ params }) {
  const slug = params.post;
  const post = await getPost(slug);
  console.log(post.body);
  return (
    <div className=" h-full min-h-screen w-full relative text-[#4e4e4e]">
      <div className="top-gutter"></div>
      
      <div className="w-full relative slg:h-[535px]"> 
      <Image
        src={post.mainImage}
        fill
        className="object-cover h-full"
        alt="image for blog"
      />
      </div>
      {/* Blog Content */}
      <div className="mx-auto max-w-[980px] py-12">
     <h1 className="slg:text-[46px] md:text-[36px] font-medium">{post.title}</h1>

      
      <div className="text-xl">
        <PortableText value={post.body} components={customComponents} />
      </div>
      </div>
     
    </div>
  );
}


