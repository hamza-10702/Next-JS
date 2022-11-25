import React from "react";
import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;

  console.log(params);
  return (
    <div>
      <h1>Important Note:</h1>
      <h5>
        If we wants to catch all route wrap the params in square brackets but it
        cant not catch main doc route.
      </h5>
      <h5>If want to catch main route wrap params in double square brackets</h5>
    </div>
  );
}

export default Docs;
