import { getPosts } from "@/public/utils/sanity-utils";
import Image from "next/image";
import Link from "next/link";

async function BlogGrid() {
  const posts = await getPosts();
  const featuredposts = await getPosts();


  

  return (
    <section className="text-[#4e4e4e] container">
   <div className="flex flex-row gap-6">
<div className=" grow">
<NewPosts posts={posts}/>

</div>
<div className="w-[539px] shrink-0 ">
<FeaturedPosts posts={featuredposts}/>
</div>
   </div>
    </section>
  );
}

export default BlogGrid;


const NewPosts =({posts})=>{

    const maxWords = 36; // Set your desired word limit here

  const truncateText = (text, maxWords) => {
    const wordsArray = text.split(' ');
    if (wordsArray.length <= maxWords) return text;
    return `${wordsArray.slice(0, maxWords).join(' ')}...`;
  };
    return(
<div>
<h2 className="py-6 font-medium slg:text-[58px]">New Posts</h2>
<div className="flex flex-col pb-7">
    {
        posts.map((post, _id)=>(
        
        <div key={post._id} className="pt-7"> 
            <div className="w-full lg:h-[480px] slg:h-[422px] relative overflow-hidden rounded-2xl mb-6">
                <Image src={post.mainImage} alt={`${post.title}`} fill className="object-cover"/>
            </div>
            <Link href={`/blog/${post.slug}`} className="slg:text-[40px] leading-[110%] font-medium hover:text-cerreneLightGreen pr-2">{post.title}</Link>
            <p className="font-satoshi slg:text-xl py-6">{truncateText(post.description, maxWords)}</p>
            <div className="flex flex-row items-center justify-between"> 
<span>{post.author.name}</span>
<span>3 minutes</span>
            </div>
        </div>
    )
            
        )
    }
</div>

</div>
    )
}

const FeaturedPosts =({posts})=>{
    return(
<div>
<h2 className="py-6 font-medium slg:text-[58px]">Featured </h2>
<div className="flex flex-col gap-7">
    {
        posts.map((post, _id)=>(
        
        <div key={post._id} className="flex flex-row border border-[#4E4E4E] w-full rounded-2xl"> 
            <div className="slg:w-[240px] lg:h-[220px] slg:h-[200px] relative overflow-hidden rounded-l-2xl shrink-0">
                <Image src={post.mainImage} alt={`${post.title}`} fill className="object-cover"/>
            </div>
            <div className="px-5 py-3 justify-between flex flex-col ">
            <Link href={`/blog/${post.slug}`} className="slg:text-[28px] leading-[110%] font-medium hover:text-cerreneLightGreen pr-2">{post.title}</Link>
            
            <div className="font-satoshi text-xl"> 
            {new Date(post.publishedAt).toLocaleDateString('en-GB').split('/').join('.')}
            </div>
            </div>
           
        </div>
    )
            
        )
    }
</div>

</div>
    )
}
