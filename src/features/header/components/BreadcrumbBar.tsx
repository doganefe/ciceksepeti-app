import React from "react";
import "./BreadcrumbBar.scss";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbBarProps {
  items: BreadcrumbItem[];
}

const BreadcrumbBar: React.FC<BreadcrumbBarProps> = ({ items }) => {
  return (
    <nav className="breadcrumb-bar container">
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

export default BreadcrumbBar;
