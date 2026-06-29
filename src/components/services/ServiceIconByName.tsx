import type { ComponentType } from "react";
import {
  CalendarIcon,
  ChatIcon,
  HomeIcon,
  MoonIcon,
  ShoppingIcon,
  UsersIcon,
} from "@/components/ServiceIcons";
import type { ServiceIconName } from "@/data/services";

const icons: Record<
  ServiceIconName,
  ComponentType<{ className?: string; color?: string }>
> = {
  chat: ChatIcon,
  users: UsersIcon,
  calendar: CalendarIcon,
  shopping: ShoppingIcon,
  home: HomeIcon,
  moon: MoonIcon,
};

export default function ServiceIconByName({
  name,
  className = "h-7 w-7",
  color,
}: {
  name: ServiceIconName;
  className?: string;
  color?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} color={color} />;
}
