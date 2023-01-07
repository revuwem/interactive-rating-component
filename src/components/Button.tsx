interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className={`
          font-sans text-base font-bold uppercase tracking-widest 
          w-full p-4
          text-white hover:text-primary
          bg-primary hover:bg-white
          rounded-full
          transition
        `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
