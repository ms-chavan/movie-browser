import './style.css';

export const NoResultFound = ({ message = 'No Result Found!' }) => {
  return <div className="noResultFound">{message}</div>;
};
