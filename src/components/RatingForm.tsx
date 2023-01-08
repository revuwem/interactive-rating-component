import BoxWrapper from "./BoxWrapper";
import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import RatingButton from "./RatingButton";

interface IRatingFormProps {
  ratingOptions: { id: string; value: string; name: string }[];
  onRatingChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const RatingForm: React.FC<IRatingFormProps> = ({
  ratingOptions,
  onRatingChanged,
  onSubmit,
}) => {
  return (
    <BoxWrapper>
      <div className="w-full flex mb-6">
        <div className="p-3.5 rounded-full bg-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16">
            <path
              fill="#FC7614"
              d="M9.067.43l1.99 4.031a.77.77 0 00.58.422l4.45.647a.772.772 0 01.427 1.316l-3.22 3.138a.773.773 0 00-.222.683l.76 4.431a.772.772 0 01-1.12.813l-3.98-2.092a.773.773 0 00-.718 0l-3.98 2.092a.772.772 0 01-1.119-.813l.76-4.431a.77.77 0 00-.222-.683L.233 6.846A.772.772 0 01.661 5.53l4.449-.647a.772.772 0 00.58-.422L7.68.43a.774.774 0 011.387 0z"
            />
          </svg>
        </div>
      </div>
      <form>
        <Heading level="h3">How did we do?</Heading>
        <Paragraph>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Paragraph>
        <fieldset className="mb-8">
          <legend className="sr-only">Select your rate</legend>
          <div className="flex justify-between">
            {ratingOptions.map(({ id, value, name }) => (
              <RatingButton
                id={id}
                key={id}
                label={value}
                value={value}
                name={name}
                onChange={onRatingChanged}
              />
            ))}
          </div>
        </fieldset>
        <Button onClick={onSubmit}>Submit</Button>
      </form>
    </BoxWrapper>
  );
};

export default RatingForm;
