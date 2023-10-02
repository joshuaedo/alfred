const tasks = [
  {
    id: 1,
    src: "user",
    title: "Creating User Accounts",
    description: "I can help you create user accounts and manage your profile.",
    color: getRandomColor(),
  },
  {
    id: 2,
    src: "search",
    title: "Product Search",
    description: "I'll assist you in finding products by providing a search functionality.",
    color: getRandomColor(),
  },
  {
    id: 3,
    src: "shopping-cart",
    title: "Shopping Cart",
    description: "Let me guide you in managing your shopping cart and making purchases.",
    color: getRandomColor(),
  },
  {
    id: 4,
    src: "question-mark",
    title: "User Support",
    description: "I'm here to provide customer support and answer your frequently asked questions.",
    color: getRandomColor(),
  },
  {
    id: 5,
    src: "star",
    title: "Product Recommendations",
    description: "I can offer personalized product recommendations based on your preferences.",
    color: getRandomColor(),
  },
  {
    id: 6,
    src: "location",
    title: "Order Tracking",
    description: "I'll help you track the status of your orders and shipments.",
    color: getRandomColor(),
  },
  {
    id: 7,
    src: "wallet",
    title: "Payment Assistance",
    description: "Count on me to assist you with payment methods and resolve payment-related issues.",
    color: getRandomColor(),
  },
  {
    id: 8,
    src: "arrow-left",
    title: "Returns and Refunds",
    description: "I'll guide you through the process of returns and refunds.",
    color: getRandomColor(),
  },
  {
    id: 9,
    src: "lock",
    title: "Account Security",
    description: "I can provide tips and support to enhance your account security.",
    color: getRandomColor(),
  },
];

function getRandomColor() {
  const colors = ["purple", "blue", "yellow", "red", "white", "green"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export { tasks };
