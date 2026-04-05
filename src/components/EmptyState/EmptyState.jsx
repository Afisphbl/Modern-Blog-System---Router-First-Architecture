import { Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import './EmptyState.css';

export default function EmptyState({ 
  title = "No results found", 
  message = "We couldn't find anything matching your search.", 
  actionText, 
  actionLink 
}) {
  return (
    <div className="empty-state">
      <div className="empty-icon-wrapper">
        <Search className="empty-icon" />
      </div>
      <h3 className="empty-title">{title}</h3>
      <p className="empty-message">{message}</p>
      
      {actionText && actionLink && (
        <Link to={actionLink} className="empty-action">
          <Plus size={16} />
          {actionText}
        </Link>
      )}
    </div>
  );
}
