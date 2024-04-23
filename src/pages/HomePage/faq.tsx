const faqs = [
  {
    id: 1,
    question: "What is DeFiNodal?",
    answer:
      "DeFiNodal is a decentralized finance (DeFi) platform aiming to provide users with a range of financial services in a secure and transparent ecosystem.",
  },
  {
    id: 2,
    question: "When did the project launch?",
    answer:
      "We've been working on this project on and off for about 2 and a half years. There have been many alterations and many concept changes. Now we full ready to fully commit on the project's success",
  },
  {
    id: 3,
    question: "Who is behind the project?",
    answer:
      "We are a team of 4, in overall one way or another a total of 9 people are actively involved. We also invite anyone to join us, feel free to DM us in telegram. We also plan to create a DAO for the project in the future.",
  },
  {
    id: 4,
    question: "What's the vission of the project?",
    answer:
      "We are commited to make this project a reference for DeFi and a benchmark for innovation. Via the this project for the long run.  been working on this project on and off for about 2 and a half years. There have been many alterations and many concept changes.",
  },
  {
    id: 5,
    question: "Where can I find more information?",
    answer:
      "You can check our documentation or our communication channels (telegram, discord).",
  },
  {
    id: 6,
    question: "How can I get involved?",
    answer:
      "We welcome everyone to get involved in the project. You do not need to be a developer or have any previous experience in the DeFi space. Just send us a DM in Telegram and we will get back to you as soon as possible.",
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
