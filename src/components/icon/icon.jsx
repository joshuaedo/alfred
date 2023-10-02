/* eslint-disable react/prop-types */
import {
  Search,
  User,
  ShoppingBag,
  FileQuestion,
  Star,
  LocateIcon,
  Wallet,
  ArrowBigLeft,
  Lock,
} from "lucide-react";

export default function Icon({ src, ...props }) {
  let icon;

  switch (src) {
    case "user":
      icon = <User {...props} />;
      break;
    case "search":
      icon = <Search {...props} />;
      break;
    case "shopping-cart":
      icon = <ShoppingBag {...props} />;
      break;
    case "question-mark":
      icon = <FileQuestion {...props} />;
      break;
    case "star":
      icon = <Star {...props} />;
      break;
    case "location":
      icon = <LocateIcon {...props} />;
      break;
    case "wallet":
      icon = <Wallet {...props} />;
      break;
    case "arrow-left":
      icon = <ArrowBigLeft {...props} />;
      break;
    case "lock":
      icon = <Lock {...props} />;
      break;
  }

  return icon;
}
