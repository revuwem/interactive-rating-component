interface IRatingButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  key?: string;
}

const RatingButton: React.FC<IRatingButtonProps> = ({
  id,
  key,
  label,
  ...props
}) => {
  return (
    <div>
      <input type="radio" id={id} key={key} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RatingButton;
