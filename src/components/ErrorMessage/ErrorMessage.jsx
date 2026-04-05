import { AlertCircle } from 'lucide-react';
import './ErrorMessage.css';

export default function ErrorMessage({ title = "Something went wrong", message }) {
  return (
    <div className="error-message">
      <AlertCircle className="error-icon" />
      <h3 className="error-title">{title}</h3>
      <p className="error-description">{message}</p>
    </div>
  );
}
