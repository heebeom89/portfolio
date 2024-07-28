const Layout2 = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div style={{backgroundColor : '#6cdab2'}}>
    <div className="max-w-5xl mx-auto p-12 flex flex-col gap-28 md:gap-32 bg-[white]" id="project">
      {children}
    </div>
    // </div>
  );
};

export default Layout2;
