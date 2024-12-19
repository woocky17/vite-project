import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
  onClick: () => void;
}
function Like({ onClick }: Props) {
  const [status, setStatus] = useState(false);

  const click = () => {
    setStatus(!status);
    onClick;
    console.log("clicked");
  };

  if (status) return <FaHeart size={30} color="red" onClick={click} />;

  return <CiHeart size={30} onClick={click} />;
}

export default Like;
