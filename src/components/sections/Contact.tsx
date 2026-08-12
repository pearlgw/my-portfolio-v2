"use client";
import { useEffect, useState } from "react";
import Badge from "../ui/Badge";
import { MessageSquareText, Send } from "lucide-react";

export default function Contact({ dict }: { dict: any }) {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      phone: formData.get("phone"),
      budget: formData.get("budget"),
    };

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setToast({ type: "success", message: dict.toast.success });
        e.target.reset();
      } else {
        setToast({ type: "error", message: dict.toast.fail });
      }
    } catch (error) {
      setToast({ type: "error", message: dict.toast.error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <>
      <section id="contact" className="flex flex-col justify-center pb-16 md:pb-5">
        <Badge name={dict.badge} icon={MessageSquareText} />

        <h2 className="mt-4 text-xl md:text-4xl font-light leading-tight text-slate-700">
          {dict.heading.part1}
          <span className="font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            {dict.heading.part2}
          </span>
        </h2>

        {/* WRAPPER */}
        <div
          className="mt-10 p-6 md:p-10 rounded-2xl
        bg-white/70 backdrop-blur-md
        border border-slate-200/60
        shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        relative"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* FULL NAME */}
            <div className="flex flex-col">
              <label className="text-[11px] font-semibold tracking-widest text-slate-500 mb-1.5 uppercase">
                {dict.form.nameLabel}
              </label>
              <input
                type="text"
                name="name"
                placeholder={dict.form.namePlaceholder}
                className="px-4 py-2.5 rounded-lg
                bg-white border border-slate-200
                focus:outline-none focus:border-sky-400
                focus:ring-2 focus:ring-sky-100
                text-slate-700 placeholder:text-slate-400
                transition-all duration-200 text-sm"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">
              <label className="text-[11px] font-semibold tracking-widest text-slate-500 mb-1.5 uppercase">
                {dict.form.emailLabel}
              </label>
              <input
                type="email"
                name="email"
                placeholder={dict.form.emailPlaceholder}
                className="px-4 py-2.5 rounded-lg
                bg-white border border-slate-200
                focus:outline-none focus:border-sky-400
                focus:ring-2 focus:ring-sky-100
                text-slate-700 placeholder:text-slate-400
                transition-all duration-200 text-sm"
              />
            </div>

            {/* PHONE */}
            <div className="flex flex-col">
              <label className="text-[11px] font-semibold tracking-widest text-slate-500 mb-1.5 uppercase">
                {dict.form.phoneLabel}
              </label>
              <input
                type="text"
                name="phone"
                placeholder={dict.form.phonePlaceholder}
                className="px-4 py-2.5 rounded-lg
                bg-white border border-slate-200
                focus:outline-none focus:border-sky-400
                focus:ring-2 focus:ring-sky-100
                text-slate-700 placeholder:text-slate-400
                transition-all duration-200 text-sm"
              />
            </div>

            {/* BUDGET */}
            <div className="flex flex-col">
              <label className="text-[11px] font-semibold tracking-widest text-slate-500 mb-1.5 uppercase">
                {dict.form.budgetLabel}
              </label>
              <input
                type="text"
                name="budget"
                placeholder={dict.form.budgetPlaceholder}
                className="px-4 py-2.5 rounded-lg
                bg-white border border-slate-200
                focus:outline-none focus:border-sky-400
                focus:ring-2 focus:ring-sky-100
                text-slate-700 placeholder:text-slate-400
                transition-all duration-200 text-sm"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-[11px] font-semibold tracking-widest text-slate-500 mb-1.5 uppercase">
                {dict.form.messageLabel}
              </label>
              <textarea
                rows={4}
                name="message"
                placeholder={dict.form.messagePlaceholder}
                className="px-4 py-2.5 rounded-lg
                bg-white border border-slate-200
                focus:outline-none focus:border-sky-400
                focus:ring-2 focus:ring-sky-100
                text-slate-700 placeholder:text-slate-400
                transition-all duration-200 resize-none text-sm"
              />
            </div>

            {/* BUTTON */}
            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3
                rounded-xl text-sm font-semibold
                bg-gradient-to-r from-sky-500 to-indigo-500
                text-white tracking-wide
                shadow-[0_6px_20px_rgba(59,130,246,0.25)]
                hover:shadow-[0_10px_25px_rgba(59,130,246,0.35)]
                hover:brightness-105
                active:scale-[0.98]
                transition-all duration-200 cursor-pointer"
              >
                <Send size={16} />
                {loading ? dict.form.btnSending : dict.form.btnSend}
              </button>
            </div>

          </form>
        </div>
      </section>
      {
        toast && (
          <div className="fixed top-6 right-6 z-[999] animate-slideIn">
            <div
              className={`px-5 py-3 rounded-xl shadow-lg backdrop-blur-md border
      flex items-center gap-3 text-sm font-medium
      ${toast.type === "success"
                  ? "bg-green-50/80 border-green-200 text-green-700"
                  : "bg-red-50/80 border-red-200 text-red-700"
                }`}
            >
              {toast.message}
            </div>
          </div>
        )
      }
    </>
  );
}