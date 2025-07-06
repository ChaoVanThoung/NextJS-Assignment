import { Book, Sunset, Trees, Zap } from "lucide-react";

export const iconMap = {
  Book: Book,
  Sunset: Sunset,
  Trees: Trees,
  Zap: Zap,
} as const;

export type IconName = keyof typeof iconMap;