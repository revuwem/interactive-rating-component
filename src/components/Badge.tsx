interface IBadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<IBadgeProps> = ({ children }) => {
  return (
    <p className="font-sans text-primary bg-blue-400 px-4 py-1 rounded-full mb-8">
      {children}
    </p>
  );
};

export default Badge;
