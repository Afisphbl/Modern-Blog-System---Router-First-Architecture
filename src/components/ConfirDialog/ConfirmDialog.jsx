import { Trash } from 'lucide-react';
import './ConfirmDialog.css';

export default function ConfirmDialog({ isOpen, onClose, onConfirm, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="confirm-overlay">
      <div className="confirm-dialog">
        <h3 className="confirm-title">
          <Trash className="confirm-icon" />
          {title}
        </h3>
        <p className="confirm-message">
          {message}
        </p>
        <div className="confirm-actions">
          <button 
            type="button" 
            onClick={onClose}
            className="confirm-btn-cancel"
          >
            Cancel
          </button>
          <button 
            type="button" 
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="confirm-btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
