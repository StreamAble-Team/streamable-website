import { useRouter } from "next/router";
import React from "react";

const EpisodePage = () => {
  const router = useRouter();
  const { id, episode } = router.query;
  return <div>EpisodePage</div>;
};

export default EpisodePage;
