import React from "react";
import BreadcrumbItem from "./BreadCrumbItem";

const Breadcrumb = props => {
  let children = React.Children.toArray(props.children);

  children = children.map((child, name) => (
    <BreadcrumbItem key={`${name}`}>{child}</BreadcrumbItem>
  ));

  return <div className="breadcrumb-item">{children}</div>;
};

export default Breadcrumb;
