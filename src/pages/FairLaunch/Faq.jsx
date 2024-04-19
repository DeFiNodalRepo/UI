const faqs = [
  {
    id: 1,
    question: "Tokenomics",
    answer: "We've set the initial cap at 500M DNOD to be minted. ",
  },
  {
    id: 2,
    question: "Why not ICO or private sale?",
    answer:
      "We want to give everyone the chance to participate in this community based project.",
  },
  {
    id: 3,
    question: "When the fair launch will stop?",
    answer: "The last day of the fair launch is 31st of July 2024.",
  },
  {
    id: 4,
    question: "When is the distribution of the tokens?",
    answer: "Immedietely after purchase.",
  },
  {
    id: 5,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function Faq() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-6 leading-7 text-gray-600 text-lg">
            DNOD is the centerpiece of the DefiNodal platform. We've optout of
            any ICO, airdrop or private sale. Thus, giving everyone the chance
            to participate in this community based project.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
