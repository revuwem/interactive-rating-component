interface IBoxWrapper {
  children: React.ReactNode;
}

const BoxWrapper: React.FC<IBoxWrapper> = ({ children }) => {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
        max-w-sm
        p-6
        pr-8
        rounded-2xl
        bg-blue-200
      `}
    >
      {children}
    </div>
  );
};

export default BoxWrapper;
