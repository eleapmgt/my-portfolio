import '../../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center grid-background z-0">
      <div className="absolute inset-0 background-col opacity-95 z-1"></div>
      <div className="z-10 flex-col">{children}</div>
    </div>
  );
};

export default Layout;
