
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function AuthMenu() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  async function handleSignOut() {
    setLoading(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        alert("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
        return;
      }

      router.refresh();
      router.push("/sign-in");
    } catch {
      alert("সার্ভারে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  }

  if (isPending) {
    return <span className="loading loading-spinner loading-sm" />;
  }

  if (session) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/profile" className="btn btn-ghost btn-sm">
          প্রোফাইল
        </Link>

        <button
          onClick={handleSignOut}
          disabled={loading}
          className="btn btn-error btn-sm"
        >
          {loading ? "অপেক্ষা করুন..." : "সাইন আউট"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link href="/sign-in" className="btn btn-ghost btn-sm">
        সাইন ইন
      </Link>

      <Link href="/sign-up" className="btn bg-green-600 text-white btn-sm">
        সাইন আপ
      </Link>
    </div>
  );
}
