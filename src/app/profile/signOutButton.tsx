
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        alert("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
        return;
      }

      router.replace("/sign-in");
      router.refresh();
    } catch {
      alert("সার্ভারে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleSignOut}
      disabled={loading}
      className="btn btn-error"
    >
      {loading ? "অপেক্ষা করুন..." : "সাইন আউট"}
    </button>
  );
}
