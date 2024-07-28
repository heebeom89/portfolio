const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-5xl mx-auto p-8 flex flex-col gap-28 md:gap-32 my-4 min-h-[300px]" id="about">
      {children}
    </div>
  );
};

export default Layout;
