interface IHeadingProps {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const classNameMap = {
  h1: "",
  h2: "",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
};

const Heading: React.FC<IHeadingProps> = ({ level, children }) => {
  const HeadingLevel = level;

  return (
    <HeadingLevel className={classNameMap[level]}>{children}</HeadingLevel>
  );
};

export default Heading;
