import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import React from "react";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
  }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Unitree" },
      description: "description",
      category: "Robots",
      image: "https://www.unitree.com/g1/",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch you startup, <br />
          Connect with entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit ideas, Vote on Pitches and get noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Serach results for "${query}"` : "All startups"}
        </p>

        <ul className='mt-7 card_grid'>
          {posts.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className='no-results'>No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
