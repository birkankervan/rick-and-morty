import React, { useState, Suspense } from "react";
import useEpisode from "./../../hooks/useEpisodes";

import PageTitle from "../PageTitle";
import Loading from "../Loading";

const Table = React.lazy(() => import("../Table"));

const NextPage = React.memo(({ page }) => {
  const { episode } = useEpisode({ page: page + 1 });
  return <span className="display-none" users={episode}></span>;
});

const Episodes = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  const { episode } = useEpisode({ page, name });

  return (
    <div className="container mx-auto px-4  ">
      <div className="py-8">
        <PageTitle
          title="Episodes"
          count={episode?.info?.count}
          countTitles={"Episode"}
          setName={setName}
        />
        <Suspense fallback={<Loading />}>
          <Table
            titles={{
              name: "Episode Name",
              air_date: "Air Date",
              episode: "Episode",
              characters: "Character Count",
            }}
            page={page}
            setPage={setPage}
            episode={episode}
            pagination={true}
            NextPage={NextPage}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Episodes;
