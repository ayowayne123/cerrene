import { getPosts } from "@/public/utils/sanity-utils";
import Image from "next/image";
import Link from "next/link";

async function BlogGrid() {
  const posts = await getPosts();
  const featuredposts = await getPosts();


  

  return (
    <section className="text-[#4e4e4e] container">
   <div className="flex slg:flex-row flex-col slg:gap-4 lg:gap-6">
<div className=" grow">
<NewPosts posts={posts}/>

</div>
<div className="lg:w-[539px] slg:w-[400px] shrink-0 ">
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
<h2 className="py-6 font-medium slg:text-[58px] md:text-[40px] text-[36px] ">New Posts</h2>
<div className="flex flex-col gap-7 ">
    {
        posts.map((post, _id)=>(
        
        <div key={post._id} className=""> 
            <div className="w-full lg:h-[480px] slg:h-[422px] h-[220px] md:h-[300px] relative overflow-hidden rounded-2xl mb-6">
                <Image src={post.mainImage} alt={`${post.title}`} fill className="object-cover"/>
            </div>
            <Link href={`/blog/${post.slug}`} className="slg:text-[40px] text-[32px] leading-[110%] font-medium hover:text-cerreneLightGreen pr-2">{post.title}</Link>
            <p className="font-satoshi slg:text-xl md:text-lg py-6 leading-[140%]">{truncateText(post.description, maxWords)}</p>
            <div className="flex flex-row items-center justify-start gap-4"> 
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
<h2 className="py-6 font-medium slg:text-[58px] md:text-[40px] text-[36px]">Featured </h2>
<div className="flex flex-col gap-4 lg:gap-7 slg:py-0 py-6">
    {
        posts.map((post, _id)=>(
        
        <div key={post._id} className="flex flex-row border border-[#4E4E4E] w-full rounded-2xl"> 
            <div className="lg:w-[240px] slg:w-[180px]  w-1/2 lg:h-[220px] md:h-[170px] h-[130px] relative overflow-hidden rounded-l-2xl shrink-0">
                <Image src={post.mainImage} alt={`${post.title}`} fill className="object-cover"/>
            </div>
            <div className="px-5 py-3 justify-between flex flex-col ">
            <Link href={`/blog/${post.slug}`} className="lg:text-[28px] md:text-2xl text-lg slg:text-[22px] leading-[110%] font-medium hover:text-cerreneLightGreen pr-1 lg:pr-2">{post.title}</Link>
            
            <div className="font-satoshi lg:text-xl"> 
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
