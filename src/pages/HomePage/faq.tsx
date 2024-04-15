const faqs = [
  {
    id: 1,
    question: 'When did the project launch?',
    answer:
      "We've been working on this project on and off for about 2 and a half years. There have been many alterations and many concept changes.",
  },
  {
    id: 2,
    question: 'When did the project launch?',
    answer:
      "We've been working on this project on and off for about 2 and a half years. There have been many alterations and many concept changes.",
  },
  {
    id: 3,
    question: 'When did the project launch?',
    answer:
      "We've been working on this project on and off for about 2 and a half years. There have been many alterations and many concept changes.",
  },
  {
    id: 4,
    question: 'When did the project launch?',
    answer:
      "We've been working on this project on and off for about 2 and a half years. There have been many alterations and many concept changes.",
  },
  {
    id: 5,
    question: 'When did the project launch?',
    answer:
      "We've been working on this project on and off for about 2 and a half years. There have been many alterations and many concept changes.",
  },
  {
    id: 6,
    question: 'When did the project launch?',
    answer:
      "We've been working on this project on and off for about 2 and a half years. There have been many alterations and many concept changes.",
  },
  {
    id: 7,
    question: 'When did the project launch?',
    answer:
      "We've been working on this project on and off for about 2 and a half years. There have been many alterations and many concept changes.",
  },
  {
    id: 8,
    question: 'When did the project launch?',
    answer:
      "We've been working on this project on and off for about 2 and a half years. There have been many alterations and many concept changes.",
  },
];

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl divide-y divide-body px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-trueblack">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-body">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-trueblack lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-trueblack">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
