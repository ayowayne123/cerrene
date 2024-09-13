import { getPosts } from "@/public/utils/sanity-utils";

async function Page() {
  const posts = await getPosts();
  console.log(posts);

  return <div>123</div>;
}

export default Page;
