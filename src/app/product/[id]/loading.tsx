export default function ProductDetailsLoading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">

        {/* Back button skeleton */}
        <div className="mb-8 h-5 w-36 animate-pulse rounded bg-gray-200" />

        {/* Main product skeleton */}
        <section className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-2">

            {/* Image */}
            <div className="h-80 animate-pulse rounded-2xl bg-gray-200" />

            {/* Details */}
            <div className="flex flex-col justify-center">

              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

              <div className="mt-4 h-10 w-72 animate-pulse rounded bg-gray-200" />

              <div className="mt-3 h-5 w-28 animate-pulse rounded bg-gray-200" />

              <div className="mt-8 h-4 w-20 animate-pulse rounded bg-gray-200" />

              <div className="mt-3 h-10 w-48 animate-pulse rounded bg-gray-200" />

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="h-20 animate-pulse rounded-xl bg-gray-200" />
                <div className="h-20 animate-pulse rounded-xl bg-gray-200" />
                <div className="h-20 animate-pulse rounded-xl bg-gray-200" />
              </div>

            </div>
          </div>
        </section>

        {/* Summary skeleton */}
        <section className="mt-10">
          <div className="h-8 w-64 animate-pulse rounded bg-gray-200" />

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="h-28 animate-pulse rounded-2xl bg-gray-200" />
            <div className="h-28 animate-pulse rounded-2xl bg-gray-200" />
            <div className="h-28 animate-pulse rounded-2xl bg-gray-200" />
          </div>
        </section>

        {/* Market table skeleton */}
        <section className="mt-10">
          <div className="h-8 w-52 animate-pulse rounded bg-gray-200" />

          <div className="mt-6 h-64 animate-pulse rounded-2xl bg-gray-200" />
        </section>

      </div>
    </main>
  );
}