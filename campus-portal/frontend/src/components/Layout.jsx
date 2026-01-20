function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {children}
      </div>
    </div>
  );
}

export default Layout;
