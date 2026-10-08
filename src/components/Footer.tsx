export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 py-8 text-sm text-gray-500 md:flex-row">
        <p>
          <span className="font-bold text-gray-800">
            বাজার দর
          </span>{" "}
          — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p>
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে
          পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
}