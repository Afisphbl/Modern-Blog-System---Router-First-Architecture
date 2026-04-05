import { Loader } from "lucide-react";
import "./LoadingSpinner.css";

export default function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="spinner-container" role="status" aria-live="polite">
      <Loader className="spinner-icon" aria-hidden="true" />
      <p className="spinner-text">{text}</p>
    </div>
  );
}
