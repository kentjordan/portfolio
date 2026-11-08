import {
  Css3Original,
  DockerOriginal,
  FastapiOriginal,
  GitOriginal,
  Html5Original,
  JavascriptOriginal,
  JupyterOriginal,
  NestjsOriginal,
  NextjsOriginalWordmark,
  NextjsPlain,
  NginxOriginal,
  NumpyOriginal,
  PandasOriginal,
  PlotlyOriginal,
  PostgresqlOriginal,
  PythonOriginal,
  PytorchOriginal,
  ReactOriginal,
  ScikitlearnOriginal,
  TailwindcssOriginal,
  TensorflowOriginal,
  TypescriptOriginal,
} from "devicons-react";
import type { FunctionComponent, SVGProps } from "react";
import { SiNginx, SiScipy } from "react-icons/si";
import { SeabornOriginal } from "./logos";

type TechIcon = FunctionComponent<
  SVGProps<SVGElement> & { size?: number | string }
>;

export interface Tech {
  name: string;
  Icon: TechIcon;
  /** Fill for the parts of the logo that have no color of their own. Defaults to white. */
  fill?: string;
  /** Replaces `Icon` on project cards when `Icon` is a wordmark, which is unreadable that small. */
  SmallIcon?: TechIcon;
}

interface TechGroup {
  title: string;
  items: readonly Tech[];
}

// Every technology in the Tech Stack section, in display order. Projects tag
// their technologies by these names (`TechName`), so a project card can only
// show logos from this list.
const groups = [
  {
    title: "WEB / MOBILE",
    items: [
      { name: "HTML", Icon: Html5Original },
      { name: "CSS", Icon: Css3Original },
      { name: "JavaScript", Icon: JavascriptOriginal },
      { name: "TypeScript", Icon: TypescriptOriginal },
      { name: "NEXT.js", Icon: NextjsOriginalWordmark, SmallIcon: NextjsPlain },
      { name: "React.js", Icon: ReactOriginal },
      { name: "TailwindCSS", Icon: TailwindcssOriginal },
      { name: "PostgreSQL", Icon: PostgresqlOriginal },
      { name: "NestJS", Icon: NestjsOriginal },
      { name: "Docker", Icon: DockerOriginal },
      { name: "Git", Icon: GitOriginal },
      { name: "FastAPI", Icon: FastapiOriginal },
      // The wordmark keeps its own green; `fill` colors only the card glyph.
      { name: "NGINX", Icon: NginxOriginal, SmallIcon: SiNginx, fill: "#009639" },
    ],
  },
  {
    title: "ML / AI",
    items: [
      { name: "Python", Icon: PythonOriginal },
      { name: "PyTorch", Icon: PytorchOriginal },
      { name: "Tensorflow", Icon: TensorflowOriginal },
      { name: "Scikit Learn", Icon: ScikitlearnOriginal },
      { name: "Pandas", Icon: PandasOriginal },
      { name: "Numpy", Icon: NumpyOriginal },
      // Single-color Simple Icons glyph, so it takes SciPy's brand color.
      { name: "SciPy", Icon: SiScipy, fill: "#8CAAE6" },
      { name: "Seaborn", Icon: SeabornOriginal },
      { name: "Plotly", Icon: PlotlyOriginal },
      { name: "Jupyter", Icon: JupyterOriginal },
    ],
  },
] as const satisfies readonly TechGroup[];

/** The name of a technology in the Tech Stack section, e.g. "NEXT.js". */
export type TechName = (typeof groups)[number]["items"][number]["name"];

export const techGroups: readonly TechGroup[] = groups;

export const techByName = Object.fromEntries(
  techGroups.flatMap(({ items }) =>
    items.map((tech) => [tech.name, tech] as const),
  ),
) as Record<TechName, Tech>;
