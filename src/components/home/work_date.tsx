import { cn } from "@/lib/utils";
import type { WorkPeriod, YearMonth } from "@/types/works";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const parse = (yearMonth: YearMonth) => {
  const [year, month] = yearMonth.split("-").map(Number);
  return { year, month: MONTHS[month - 1] };
};

/**
 * When a project was built, on its card and its detail page: "Jul 2023",
 * "Jan – May 2024" or "Dec 2023 – Jun 2024". Formatted by hand because
 * Intl's date ranges space the dash differently in Node and in browsers,
 * which would make the server and browser text disagree on hydration.
 */
const WorkDate = ({
  date,
  className,
}: {
  date: WorkPeriod;
  className?: string;
}) => {
  const start = parse(date.start);
  const end = parse(date.end);
  const endText = `${end.month} ${end.year}`;

  return (
    <p className={cn("text-xs text-neutral-500", className)}>
      {start.year === end.year && start.month === end.month ? (
        <time dateTime={date.end}>{endText}</time>
      ) : (
        <>
          <time dateTime={date.start}>
            {start.year === end.year ? start.month : `${start.month} ${start.year}`}
          </time>
          {" – "}
          <time dateTime={date.end}>{endText}</time>
        </>
      )}
    </p>
  );
};

export default WorkDate;
