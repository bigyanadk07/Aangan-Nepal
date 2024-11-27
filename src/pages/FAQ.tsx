import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: 'What services does आंगन Nepal provide?',
      answer:
        'We specialize in real estate services, helping you buy, sell, or rent properties across Nepal. Our portfolio includes homes, apartments, and commercial spaces.',
    },
    {
      question: 'How can I list my property on आंगन Nepal?',
      answer:
        'You can list your property by contacting us through our website or visiting our office. We’ll guide you through the listing process, ensuring your property gets maximum visibility.',
    },
    {
      question: 'Are there any fees for buyers or tenants?',
      answer:
        'There are no direct fees for buyers or tenants. However, there might be administrative charges for certain services. Contact us for detailed information.',
    },
    {
      question: 'Can I schedule a property visit?',
      answer:
        'Yes, you can schedule property visits by contacting us through our website or customer service. We’ll arrange a convenient time for you to view the property.',
    },
    {
      question: 'How do I contact customer support?',
      answer:
        'You can reach our customer support team by phone, email, or through our Contact Us page. We’re here to help with any questions or concerns.',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-red-700 text-center mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg bg-white shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-3 font-semibold text-gray-700 hover:bg-red-100 focus:outline-none flex justify-between items-center"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <span className="text-red-700">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-4 py-3 text-gray-600 border-t border-gray-300"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
