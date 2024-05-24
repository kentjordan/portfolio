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

const TechItem = ({
  Icon,
  title,
  size,
  fill = "white",
  color,
  className,
}: ITechItemProp) => {
  return (
    <div className='flex flex-col items-center justify-center mx-1 cursor-pointer h-16 w-16'>
      <div>
        <Icon
          size={size}
          fill={fill}
          color={color}
          className={`${className}`}
        />
      </div>
      <p className='font-bold text-stone-300 hidden group-hover:block mt-1 text-center text-sm'>
        {title}
      </p>
    </div>
  );
};

export default TechItem;
