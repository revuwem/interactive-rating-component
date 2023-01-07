interface IBadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<IBadgeProps> = ({ children }) => {
  return <p>{children}</p>;
};

export default Badge;
