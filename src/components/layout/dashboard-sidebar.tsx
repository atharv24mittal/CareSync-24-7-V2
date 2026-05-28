"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardLinks } from "@/config/dashboard";
import { cn } from "@/lib/utils";

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        hidden
        h-screen
        w-72
        flex-col
        border-r
        border-white/10
        bg-white/[0.02]
        p-6
        lg:flex
      "
    >
      {/* Logo */}
      <Link
        href="/"
        className="
          font-heading
          text-2xl
          font-bold
          bg-gradient-to-r
          from-white
          to-accent
          bg-clip-text
          text-transparent
        "
      >
        CareSync
      </Link>

      {/* Navigation */}
      <nav className="mt-10 flex flex-col gap-2">
        {dashboardLinks.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                `
                smooth-transition
                flex
                items-center
                gap-3
                rounded-2xl
                px-4
                py-3
                text-sm
                font-medium
                `,
                active
                  ? "bg-primary text-white"
                  : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
              )}
            >
              <Icon className="h-5 w-5" />

              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div
        className="
          glass
          mt-auto
          rounded-3xl
          border
          border-white/10
          p-5
        "
      >
        <p className="text-sm text-slate-500">
          AI Health Score
        </p>

        <h3 className="mt-3 text-4xl font-bold">
          84
        </h3>

        <p className="mt-2 text-sm text-emerald-400">
          Healthy condition
        </p>
      </div>
    </aside>
  );
}