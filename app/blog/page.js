import { getPosts } from "@/public/utils/sanity-utils";
import Hero from "./hero";
import Category from "./categoryBar";

async function Page() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Category />
    </main>
  );
}

export default Page;
