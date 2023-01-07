interface IParagraphProps {
  children: React.ReactNode;
}

const Paragraph: React.FC<IParagraphProps> = ({ children }) => {
  return <p>{children}</p>;
};

export default Paragraph;
