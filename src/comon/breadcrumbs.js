import useBreadcrumbs from "use-react-router-breadcrumbs";
import React from "react";
import { useParams } from "react-router-dom";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  const { slug } = useParams();

  const formattedSlug = slug
    ? slug.replace(/[0-9]/g, "").replace(/-/g, " ")
    : "News & Updates";

  return (
    <div className="breadcrumb bg-red2 py-4 mb-0">
      <div className="container">
        <p className="text-white normal-text">
          {breadcrumbs.map(({ breadcrumb }, index) => (
            <span key={index}>
              {index > 0}
              {React.cloneElement(breadcrumb, {
                children: breadcrumb.props.children
                  ?.replace(/[0-9]/g, "")
                  .replace(/-/g, " "),
              })}
            </span>
          ))}
        </p>
        {formattedSlug && (
          <h1 className="big-text text-white">{formattedSlug}</h1>
        )}
      </div>
    </div>
  );
};

export default Breadcrumbs;
