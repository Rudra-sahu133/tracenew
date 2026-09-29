function PageContainer({ children }) {
  return (
    <main className="page-content min-h-screen md:pl-[264px]">
      <div className="mx-auto w-full max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8 xl:px-10">
        {children}
      </div>
    </main>
  );
}

export default PageContainer;