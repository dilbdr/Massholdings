import useBreadcrumbs from "use-react-router-breadcrumbs";
import React from "react";
import { useParams } from "react-router-dom";
const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  console.log("bred", breadcrumbs);
  const { slug } = useParams();
  return (
    <div className="breadcrumb bg-red2 py-4">
      <div className="container">
        <p className="text-white normal-text">
          {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
        </p>
        <h1 className="big-text text-white">{slug.split("-").join(" ")}</h1>
      </div>
    </div>
  );
};
export default Breadcrumbs;
