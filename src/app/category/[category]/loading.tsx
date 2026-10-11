export default function CategoryLoading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">

        {/* Back button */}
        <div className="mb-8 h-5 w-36 animate-pulse rounded bg-gray-200" />

        {/* Category heading */}
        <div className="mb-10 flex items-center gap-3">
          <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200" />

          <div>
            <div className="h-8 w-32 animate-pulse rounded bg-gray-200" />

            <div className="mt-2 h-4 w-64 animate-pulse rounded bg-gray-200" />
          </div>
        </div>

        {/* Products heading */}
        <div className="mb-6 flex items-center justify-between">
          <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />

          <div className="h-9 w-32 animate-pulse rounded-lg bg-gray-200" />
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="h-36 animate-pulse rounded-xl bg-gray-200" />

              <div className="mt-5 h-4 w-24 animate-pulse rounded bg-gray-200" />

              <div className="mt-3 h-6 w-40 animate-pulse rounded bg-gray-200" />

              <div className="mt-2 h-4 w-24 animate-pulse rounded bg-gray-200" />

              <div className="mt-5 flex justify-between">
                <div>
                  <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
                  <div className="mt-2 h-6 w-24 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="h-7 w-16 animate-pulse rounded-full bg-gray-200" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}