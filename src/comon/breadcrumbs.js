import useBreadcrumbs from "use-react-router-breadcrumbs";
import React from "react";
import { useParams } from "react-router-dom";
const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  console.log("bred", breadcrumbs);
  const { slug } = useParams();
  return (
    <div className="breadcrumsss">
      <div className="container">
        <div className="Breds">
          {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
        </div>
        <div className="PageTitle">{slug.split("-").join(" ")}</div>
      </div>
    </div>
  );
};
export default Breadcrumbs;
