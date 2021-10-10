import React from "react";
import formatDate from "../utils/time";
import { Link } from "react-router-dom";

export default function AuthorInfo({ by, comments, time, id }) {
  return (
    <div>
      <p>
        <span>
          by
          <Link
            to={{
              pathname: "/user",
              search: `?id=${by}`,
            }}
          >
            {by}
          </Link>
        </span>
        on{formatDate(time)} with
        <span>
          <Link to={{ pathname: "/post", search: `?id=${id}` }}>
            {comments}
          </Link>
          comments
        </span>
      </p>
    </div>
  );
}
