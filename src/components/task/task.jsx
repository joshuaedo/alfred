/* eslint-disable react/prop-types */
import Icon from "../icon/icon.jsx";

export default function Task({ index, src, setModal }) {
  return (
    <div
      className="text-white"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
    >
      <Icon src={src} className="h-44 w-44" />
    </div>
  );
}
