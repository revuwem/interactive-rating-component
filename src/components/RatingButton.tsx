interface IRatingButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  key?: string;
}

const RatingButton: React.FC<IRatingButtonProps> = ({
  id,
  label,
  ...props
}) => {
  return (
    <div className="w-12 flex">
      <input type="radio" id={id} {...props} className="sr-only peer" />
      <label
        htmlFor={id}
        className={`
        font-sans
        font-bold
        text-center
        text-grey-200
        w-full
        p-3
        rounded-full
        bg-blue-400
        transition
        hover:cursor-pointer
        hover:bg-grey-100
        hover:text-white
        peer-checked:bg-primary
        peer-checked:text-white`}
      >
        {label}
      </label>
    </div>
  );
};

export default RatingButton;
