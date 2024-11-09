import SearchForm from "@/components/SearchForm";
import React from "react";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
  }>;
}) => {
  const query = (await searchParams).query;
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

      <section></section>
    </>
  );
};

export default Home;
