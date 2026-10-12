
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function EditProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (session?.user.name) {
      setName(session.user.name);
    }
  }, [session?.user.name]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const { error: updateError } =
        await authClient.updateUser({ name: name.trim() });

      if (updateError) {
        setError(updateError.message || "নাম আপডেট করা যায়নি।");
        return;
      }

      setSuccess("আপনার নাম সফলভাবে আপডেট হয়েছে।");
      router.refresh();
    } catch {
      setError("সার্ভারে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  }

  if (isPending) {
    return <main className="p-8">লোড হচ্ছে...</main>;
  }

  if (!session) {
    return (
      <main className="p-8 text-center">
        <p>প্রোফাইল সম্পাদনা করতে সাইন ইন করুন।</p>
        <Link href="/sign-in" className="btn btn-primary mt-4">
          সাইন ইন
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-200 px-4 py-12">
      <div className="mx-auto max-w-lg rounded-2xl bg-base-100 p-6 shadow">
        <h1 className="mb-6 text-2xl font-bold">
          প্রোফাইল সম্পাদনা
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label" htmlFor="name">
              আপনার নাম
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="input input-bordered w-full"
              required
              minLength={2}
              maxLength={80}
            />
          </div>

          <div>
            <label className="label" htmlFor="email">
              ইমেইল
            </label>
            <input
              id="email"
              type="email"
              value={session.user.email}
              className="input input-bordered w-full"
              readOnly
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-error">
              {error}
            </p>
          )}

          {success && (
            <p role="status" className="text-sm text-success">
              {success}
            </p>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading || name.trim().length < 2}
            >
              {loading ? "সংরক্ষণ হচ্ছে..." : "পরিবর্তন সংরক্ষণ"}
            </button>

            <Link href="/profile" className="btn btn-ghost">
              ফিরে যান
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
