import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
