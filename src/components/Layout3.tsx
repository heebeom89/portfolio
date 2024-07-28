const Layout3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="contact"
    style={{ 
      backgroundColor: '#e7e6e6', 
      minHeight: '450px'
      }}>
    <div className="max-w-5xl mx-auto p-12 flex flex-col">
      {children}
    </div>
    </div>
  );
};

export default Layout3;
