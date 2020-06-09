import React from "react";
import { Link } from "react-router-dom";
export default function homePage() {
  return (
    <>
      <Link to="/provider page">
        <button type="button" class="btn btn-info m-2">
          Provider Page
        </button>
      </Link>
      <Link to="/client page">
        <button type="button" class="btn btn-info m-2">
          Client Page
        </button>
      </Link>
      <Link to="/provider tasks">
        <button type="button" class="btn btn-info m-2">
          Provider Tasks
        </button>
      </Link>
    </>
  );
}
