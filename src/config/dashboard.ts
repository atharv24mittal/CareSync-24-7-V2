import {
  LayoutDashboard,
  Brain,
  Activity,
  FileText,
  Stethoscope,
  Bell,
  Settings,
} from "lucide-react";

export const dashboardLinks = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "AI Doctor",
    href: "/dashboard/ai-doctor",
    icon: Brain,
  },

  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: Activity,
  },

  {
    label: "Records",
    href: "/dashboard/records",
    icon: FileText,
  },

  {
    label: "Symptoms",
    href: "/dashboard/symptoms",
    icon: Stethoscope,
  },

  {
    label: "Reminders",
    href: "/dashboard/reminders",
    icon: Bell,
  },

  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];