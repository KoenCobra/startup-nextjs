import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
  `*[_type == "startup"] | order(_createdAt desc){ 
  _id,
  title,
  _createdAt,
   slug,
    author ->{ _id, name, slug, image
    },
    views,
    description,
    category,
    image
}
`
);
