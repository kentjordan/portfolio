interface Props extends React.SVGProps<SVGElement> {
  size?: number | string;
}
interface ITechItemProp {
  Icon: React.FunctionComponent<Props>;
  title: string;
  fill?: string;
  className?: string;
  size: number;
  color?: string;
}

/** A logo tile with the technology's name; its width comes from the parent grid. */
const TechItem = ({
  Icon,
  title,
  size,
  fill = "white",
  color,
  className,
}: ITechItemProp) => {
  return (
    <div className='flex cursor-default flex-col items-center justify-center gap-2 rounded-xl bg-neutral-950 px-2 py-4'>
      <Icon size={size} fill={fill} color={color} className={className} />
      <p className='text-center text-xs text-neutral-300'>{title}</p>
    </div>
  );
};

export default TechItem;
