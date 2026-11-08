import { cn } from "@/lib/utils";
import { techByName, type TechName } from "./stack";

/**
 * A project's technologies as logos. By default a compact row, each logo
 * named in a tooltip and to screen readers; `labeled` puts each name beside
 * its logo in a chip instead.
 */
const TechIcons = ({
  tech,
  size = 20,
  labeled = false,
  className,
}: {
  tech: readonly TechName[];
  size?: number;
  labeled?: boolean;
  className?: string;
}) => (
  <ul
    aria-label='Technologies'
    className={cn(
      "flex flex-wrap items-center",
      labeled ? "gap-2" : "gap-3",
      className,
    )}>
    {tech.map((name) => {
      const { Icon, SmallIcon = Icon, fill = "white" } = techByName[name];
      return (
        <li
          key={name}
          title={labeled ? undefined : name}
          className={cn(
            "flex items-center",
            labeled &&
              "gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs text-neutral-300",
          )}>
          {/* devicons' plain logos (NEXT.js's SmallIcon) take their color
              from `color` and ignore `fill`; the others use `fill`. */}
          <SmallIcon size={size} fill={fill} color={fill} aria-hidden />
          <span className={labeled ? undefined : "sr-only"}>{name}</span>
        </li>
      );
    })}
  </ul>
);

export default TechIcons;
