import React from 'react';

const Pagination = ({ children, ...props }) => {
  return (
    <nav aria-label="Pagination Navigation" {...props}>
      <ul className="pagination">{children}</ul>
    </nav>
  );
};

const PaginationContent = ({ children }) => {
  return <>{children}</>;
};

const PaginationItem = ({ children, active, disabled, ...props }) => {
  const className = [
    'pagination-item',
    active ? 'active' : '',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
};

const PaginationLink = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <a href="#" ref={ref} {...props} className="pagination-link">
      {children}
    </a>
  );
});

const PaginationPrevious = ({ children = 'Previous', disabled, ...props }) => {
  return (
    <PaginationItem disabled={disabled} {...props}>
      <PaginationLink aria-label="Previous page">{children}</PaginationLink>
    </PaginationItem>
  );
};

const PaginationNext = ({ children = 'Next', disabled, ...props }) => {
  return (
    <PaginationItem disabled={disabled} {...props}>
      <PaginationLink aria-label="Next page">{children}</PaginationLink>
    </PaginationItem>
  );
};

const PaginationEllipsis = () => {
  return (
    <li className="pagination-ellipsis" aria-hidden="true">
      &hellip;
    </li>
  );
};

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};