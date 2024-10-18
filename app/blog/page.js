import { getPosts } from "@/public/utils/sanity-utils";
import Hero from "./hero";
import Category from "./categoryBar";
import BlogGrid from "./blogGrid";

async function Page() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Category />
      <BlogGrid/>
    </main>
  );
}

export default Page;
