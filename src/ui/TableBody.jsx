import React from "react";

export default function TableBody({ data, render }) {
  return <>{data.map(render)}</>;
}
