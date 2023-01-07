import RatingForm from "./components/RatingForm";
import { useCallback, useState } from "react";
import RatingFeedback from "./components/RatingFeedback";

function App() {
  const [selectedRate, setSelectedRate] = useState<string>("");
  const [isRateSubmitted, setRateSubmitted] = useState<boolean>(false);

  const ratingOptions = [
    { id: "rate-1", value: "1", name: "rate" },
    { id: "rate-2", value: "2", name: "rate" },
    { id: "rate-3", value: "3", name: "rate" },
    { id: "rate-4", value: "4", name: "rate" },
    { id: "rate-5", value: "5", name: "rate" },
  ];

  const onRatingChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRate(e.target.value);
  };

  const onRatingSubmit = () => {
    if (selectedRate.length) setRateSubmitted(true);
  };

  return (
    <main>
      {!isRateSubmitted ? (
        <RatingForm
          ratingOptions={ratingOptions}
          onRatingChanged={onRatingChanged}
          onSubmit={onRatingSubmit}
        />
      ) : (
        <RatingFeedback
          rate={selectedRate}
          rateOf={ratingOptions.length.toString()}
        />
      )}
    </main>
  );
}

export default App;
