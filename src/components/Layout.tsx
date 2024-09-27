import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Add global elements like headers, footers, etc. */}
      {children}
    </div>
  );
};

export default Layout;
