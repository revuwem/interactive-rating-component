interface IParagraphProps {
  children: React.ReactNode;
}

const Paragraph: React.FC<IParagraphProps> = ({ children }) => {
  return (
    <p className="font-sans text-base text-grey-200 mb-8 last:mb-0">
      {children}
    </p>
  );
};

export default Paragraph;
