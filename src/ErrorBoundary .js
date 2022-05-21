import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components";
const errorComponent = (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of the app
    }}
  ></ErrorBoundary>
);
