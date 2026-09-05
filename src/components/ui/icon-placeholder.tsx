import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react";

/**
 * The shadcn registry ships icon-agnostic placeholders that the CLI rewrites to
 * the icon library named in components.json. That rewrite is done here instead,
 * against lucide, so registry components can be pulled without the CLI.
 */
const lucideIcons: Record<string, LucideIcon> = {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XIcon,
};

type IconPlaceholderProps = React.ComponentProps<"svg"> & {
  lucide: string;
  tabler?: string;
  hugeicons?: string;
  phosphor?: string;
  remixicon?: string;
};

export function IconPlaceholder({
  lucide,
  tabler: _tabler,
  hugeicons: _hugeicons,
  phosphor: _phosphor,
  remixicon: _remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon = lucideIcons[lucide] ?? ChevronDownIcon;
  return <Icon aria-hidden="true" {...props} />;
}
