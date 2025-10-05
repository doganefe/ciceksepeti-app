import React from "react";
import "./Breadcrumbs.scss";
import type { BreadcrumbsProps } from "../types/breadcrumbs.types";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="breadcrumbs">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="separator">›</span>}
          {item.href ? (
            <a href={item.href} className="breadcrumb-link">
              {item.label}
            </a>
          ) : (
            <span className="breadcrumb-current">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
