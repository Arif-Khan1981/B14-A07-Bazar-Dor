import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="সব-পণ্য"
        className="mx-auto max-w-6xl px-4 py-20"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          সব পণ্য
        </h2>

        <p className="mt-2 text-gray-600">
          আমাদের প্রয়োজনীয় পণ্যের তালিকা এখানে থাকবে।
        </p>
      </section>
    </>
  );
}