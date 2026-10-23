import type { ComponentProps } from "react";
import { Undo2 } from "lucide-react";
import Icon, { type IconName } from "@/components/Icon";

// Icons used only by the admin panel that are not registered in the shared Icon.tsx
// (kept local so the shared file is not edited).
const EXTRA = { "undo-2": Undo2 } as const;
export type AdmIconName = IconName | keyof typeof EXTRA;

export default function AdmIcon({ name, ...props }: { name: AdmIconName } & Omit<ComponentProps<typeof Icon>, "name">) {
  if (name in EXTRA) {
    const C = EXTRA[name as keyof typeof EXTRA];
    return <C aria-hidden="true" {...props} />;
  }
  return <Icon name={name as IconName} {...props} />;
}
