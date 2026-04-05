import { AlertCircle } from "lucide-react";
import "./ErrorMessage.css";
import { useRouteError } from "react-router-dom";

export default function ErrorMessage({
  title = "Something went wrong",
  message,
}) {
  const routeError = useRouteError();
  const resolvedMessage =
    message ??
    routeError?.statusText ??
    routeError?.message ??
    "Please try again later.";
  return (
    <div className="error-message" role="alert">
      <AlertCircle className="error-icon" aria-hidden="true" />
      <h3 className="error-title">{title}</h3>
      <p className="error-description">{resolvedMessage}</p>{" "}
    </div>
  );
}
