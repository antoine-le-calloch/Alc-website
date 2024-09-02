export default function Home() {
  return (
      <main className="flex-grow">
          <div className="container max-w-full">
              <div className="flex items-center justify-center h-80 bg-slate-100 mb-4">
                  <h1>Home</h1>
              </div>
          </div>
          <div className="container py-8">
              <div className="flex flex-col items-center justify-center mb-4">
                  <h2>Title 1</h2>
                  <div className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
              </div>
          </div>
          <div className="container py-8">
              <div className="flex flex-col items-center justify-center">
                  <h2>Title 2</h2>
                  <div className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
              </div>
          </div>
      </main>
  );
}