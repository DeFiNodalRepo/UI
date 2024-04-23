import { SlChemistry } from "react-icons/sl";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";

const features = [
  {
    name: "Overcollateralized Stable Coin",
    description:
      "sDNOD is an overcollaterilezed decentralized stable coin backed by other major stable coins. Minting and redeeming has a fee of 0.05% which goes to the SDNOD collateral treasury. There are zero swapping fees or any other fees for sDNOD.",
    href: "/sdnod",
    icon: BsCurrencyDollar,
    url: "SDNOD",
  },
  {
    name: "Decentralized Crypto Portfolios",
    description:
      "Invest in crypto portfolios. Create your own or copy one of the existing user managed portfolios. Users receive a commission based on the value of their portfolio crypto holdings.",
    href: "/boardroom",
    icon: IoBriefcaseOutline,
    url: "Collections",
  },
  {
    name: "Ongoing Projects",
    description:
      "DeFiNodal's team is working on a number projects. Check our labs page and see what's next. ",
    href: "/labs",
    icon: SlChemistry,
    url: "Labs",
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-trueblack py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-6xl">
            Innovating web3 services
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            Building the future of decentralized financial services
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-white"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-xl font-semibold leading-6 text-white"
                    >
                      {feature.url}
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
