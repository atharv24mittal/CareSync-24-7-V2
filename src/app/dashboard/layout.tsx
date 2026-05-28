import DashboardSidebar from "@/components/layout/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-white">
      <div className="flex">
        <DashboardSidebar />

        <section className="flex-1">
          {children}
        </section>
      </div>
    </main>
  );
}