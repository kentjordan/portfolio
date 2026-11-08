import { cn } from "@/lib/utils";
import type { WorkCategory } from "@/types/works";

/** A project's categories as small labels, on its card and its detail page. */
const CategoryTags = ({
  categories,
  className,
}: {
  categories: readonly WorkCategory[];
  className?: string;
}) => (
  <ul aria-label='Category' className={cn("flex flex-wrap gap-1.5", className)}>
    {categories.map((category) => (
      <li
        key={category}
        className='rounded bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300'>
        {category}
      </li>
    ))}
  </ul>
);

export default CategoryTags;
