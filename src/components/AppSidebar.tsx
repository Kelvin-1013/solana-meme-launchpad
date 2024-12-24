import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { BarChart3, Rocket, Wallet, LineChart, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const menuItems = [
  {
    title: "dashboard",
    icon: BarChart3,
    path: "/dashboard",
  },
  {
    title: "launchpad",
    icon: Rocket,
    path: "/launchpad",
  },
  {
    title: "assets",
    icon: LineChart,
    path: "/assets",
  },
  {
    title: "wallet",
    icon: Wallet,
    path: "/wallet",
  },
  {
    title: "settings",
    icon: Settings,
    path: "/settings",
  },
];

export function AppSidebar() {
  const { t } = useLanguage();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={t(item.title)}>
                    <Link to={item.path}>
                      <item.icon />
                      <span>{t(item.title)}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}