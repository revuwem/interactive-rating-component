interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
