import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-medium text-gray-800">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="mt-2 text-gray-600 transition-all duration-300">
          {answer}
        </p>
      )}
    </div>
  );
};

type FAQProps = {
  items: FAQItemProps[];
};

const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
        ❓ Foire Aux Questions
      </h2>
      {items.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};

export default FAQ;
