import { useState } from "react";

interface Props {
  children: string;
  maxChar: number;
  onClick?: () => void;
}

const ExpandableText = ({ onClick, children, maxChar }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  const click = () => {
    setExpanded(!isExpanded);
    onClick;
  };
  if (children.length <= maxChar) return <div>{children}</div>;

  const text = children.substring(0, maxChar);

  if (isExpanded) {
    return (
      <div>
        {children} <button onClick={click}>Less</button>
      </div>
    );
  } else {
    return (
      <div>
        {text}... <button onClick={click}>More</button>
      </div>
    );
  }
};

export default ExpandableText;
