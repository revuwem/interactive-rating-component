import Badge from "./Badge";
import BoxWrapper from "./BoxWrapper";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface IRatingFeedbackProps {
  rate: string;
  rateOf: string;
}

const RatingFeedback: React.FC<IRatingFeedbackProps> = ({ rate, rateOf }) => {
  return (
    <BoxWrapper>
      <img src="images/illustration-thank-you.svg" alt="" />
      <Badge>
        You selected {rate} of {rateOf}
      </Badge>
      <Heading level="h3">Thank You!</Heading>
      <Paragraph>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </Paragraph>
    </BoxWrapper>
  );
};

export default RatingFeedback;
