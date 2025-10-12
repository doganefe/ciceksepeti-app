// generated-with-AI (revised)
// Self-contained component - gets category name directly from store
import React from "react";
import "./BreadcrumbBar.scss";
import { useCategoryStore } from "../../../shared/store";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const BreadcrumbBar: React.FC = () => {
  const { selectedCategoryName } = useCategoryStore();

  const items: BreadcrumbItem[] = [
    { label: "Çiçeksepeti.com", href: "/" },
    { label: selectedCategoryName },
  ];

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
