import { Loader } from 'lucide-react';
import './LoadingSpinner.css';

export default function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="spinner-container">
      <Loader className="spinner-icon" />
      <p className="spinner-text">{text}</p>
    </div>
  );
}
