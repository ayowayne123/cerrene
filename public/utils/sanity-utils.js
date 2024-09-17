import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// Function to fetch all posts
export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      publishedAt,
      title,
      "slug": slug.current,
      "categories": categories[]->title,
      body,
      description,
      "author": author->{name, image},
      "mainImage": mainImage.asset->url
    }`
  );
}

// Function to fetch a single post by slug
export async function getPost(slug) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      publishedAt,
      title,
      "categories": categories[]->title,
      body,
      description,
      "author": author->{name, image},
      "mainImage": mainImage.asset->url
    }`,
    { slug }
  );
}

export async function getCategoryNames() {
  return client.fetch(
    groq`*[_type == "category"]{
  title,
    _id,
    slug.current,
}`
  );
}
