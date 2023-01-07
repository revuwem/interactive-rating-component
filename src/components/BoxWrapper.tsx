interface IBoxWrapper {
  children: React.ReactNode;
}

const BoxWrapper: React.FC<IBoxWrapper> = ({ children }) => {
  return <div>{children}</div>;
};

export default BoxWrapper;
