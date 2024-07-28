const Layout1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="skills"
    style={{ 
      backgroundColor: '#e7e6e6', 
     
      }}>
    <div className="max-w-5xl mx-auto p-12 flex flex-col md:gap-32">
      {children}
    </div>
    </div>
  );
};

export default Layout1;
