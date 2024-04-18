// Todo Add icon at the place of the img tag
import heroImage from '../../images/hero-image.jpg';
import logo from '../../images/logo/df-modern-dark.png';

export default function HeroSection() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <img className="h-11" src={logo} alt="DeFiNodal" />
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-trueblack sm:mt-10 sm:text-6xl">
              The Decentralized Finance Nodal
            </h1>

            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/dashboard"
                className="rounded-md bg-trueblack px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-2/3 xl:mr-0 ">
          <img
            className="aspect-[3/2] w-full bg-trueblack object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={heroImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
