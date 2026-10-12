
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function ChangePasswordPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword.length < 8) {
      setError("নতুন পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("নতুন পাসওয়ার্ড দুটি মিলছে না।");
      return;
    }

    setLoading(true);

    try {
      const { error: changeError } =
        await authClient.changePassword({
          currentPassword,
          newPassword,
          revokeOtherSessions: true,
        });

      if (changeError) {
        setError(
          changeError.message || "পাসওয়ার্ড পরিবর্তন করা যায়নি।"
        );
        return;
      }

      setSuccess("পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে।");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

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
        <p>পাসওয়ার্ড পরিবর্তন করতে সাইন ইন করুন।</p>
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
          পাসওয়ার্ড পরিবর্তন
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="currentPassword" className="label">
              বর্তমান পাসওয়ার্ড
            </label>
            <input
              id="currentPassword"
              type="password"
              autoComplete="current-password"
              className="input input-bordered w-full"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="newPassword" className="label">
              নতুন পাসওয়ার্ড
            </label>
            <input
              id="newPassword"
              type="password"
              autoComplete="new-password"
              className="input input-bordered w-full"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              minLength={8}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="label">
              নতুন পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              className="input input-bordered w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={8}
              required
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

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "পরিবর্তন হচ্ছে..." : "পাসওয়ার্ড পরিবর্তন করুন"}
          </button>

          <Link href="/profile" className="btn btn-ghost w-full">
            প্রোফাইলে ফিরে যান
          </Link>
        </form>
      </div>
    </main>
  );
}
