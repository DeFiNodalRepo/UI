import DefaultLayout from '../../layout/DefaultLayout';
import Faq from './Faq';

import logoLight from '../../images/logo/DefiNodal_Logo-light-modern-removebg.png';
import logoDark from '../../images/logo/df-modern-dark.png';
function FairLaunch() {
  return (
    <DefaultLayout>
      <div className="flex flex-col sm:flex-row max-w-full justify-center items-center gap-10 mt-10">
        <img
          src={logoDark}
          alt="FairLaunch"
          className="basis-1/8 w-28 h-28 dark:hidden"
        />
        <img
          src={logoLight}
          alt="FairLaunch"
          className="basis-1/8 w-28 h-28 hidden dark:block"
        />
        <div className="basis-7/8 sm:text-9xl text-7xl">Fair Launch</div>
      </div>
      <Faq />
    </DefaultLayout>
  );
}

export default FairLaunch;
