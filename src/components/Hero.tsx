import Link from "next/link";

export default function Hero() {
  
  const date= new Date().toLocaleDateString("bn-BD", {dateStyle: "full"});
  
  
  
    return (
    <section className="bg-green-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        {/* Left content */}
        <div>
          <p className="mb-4 font-semibold uppercase tracking-wider text-green-600">
            {date}
          </p>

          <h1 className="text-4xl font-black leading-tight text-gray-900 md:text-6xl">
            আজকের বাজারের 
            <br />
            দাম এক নজরে।
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
            চাল, ডাল, সবজি, মাছ-মাংসসহ প্রয়োজনীয় পণ্যের
            আজকের বাজারদর সহজেই দেখুন।
          </p>

          <Link
            href="#সব-পণ্য"
            className="mt-7 inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            সব পণ্যের দাম দেখুন →
          </Link>
        </div>

        {/* Right illustration */}
        <div className="flex min-h-80 items-center justify-center rounded-3xl bg-white shadow-xl">
          <div className="text-center">
            <div className="text-8xl">🛒</div>

            <p className="mt-4 text-xl font-bold text-gray-700">
              আজকের বাজারদর
            </p>

            <p className="mt-2 text-sm text-gray-500">
              প্রয়োজনীয় পণ্যের দাম এক নজরে
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}