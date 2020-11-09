import React from 'react';

type LayoutProps = { children: React.ReactNode[] | React.ReactNode };

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    {children}
  </div>
)

export default Layout;