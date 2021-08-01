import React, { useState, Suspense } from "react";

import useLocation from "../../hooks/useLocation";
import PageTitle from "../PageTitle";
import Loading from "../Loading";

const Table = React.lazy(() => import("../Table"));

const NextPage = React.memo(({ page }) => {
  const { location } = useLocation({ page: page + 1 });
  return <span className="display-none" users={location}></span>;
});

const Location = React.memo(() => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  const { location } = useLocation({ page, name });

  return (
    <div className="container mx-auto px-4  ">
      <div className="py-8">
        <PageTitle
          title="Locations"
          count={location?.info?.count}
          countTitles={"Location"}
          setName={setName}
        />
        <Suspense fallback={<Loading />}>
          <Table
            titles={{
              name: "Location Name",
              dimension: "Location Dimensional",
              residents: "Residents Count",
            }}
            page={page}
            setPage={setPage}
            episode={location}
            pagination={true}
            NextPage={NextPage}
          />
        </Suspense>
      </div>
    </div>
  );
});

export default Location;
