import { Circles } from "react-loader-spinner";
import { LoadingSpinnerStyle } from "./LoadingSpinnerStyle";

const LoadingSpinner = ({ setIsLoggedIn }) => {
  setTimeout(() => setIsLoggedIn(true), 1500);

  return (
    <LoadingSpinnerStyle>
      <Circles color="var(--color-primary)" height={50} width={50} />
    </LoadingSpinnerStyle>
  );
};

export default LoadingSpinner;
