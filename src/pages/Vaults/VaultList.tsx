import DefaultLayout from '../../layout/DefaultLayout';
import VaultsCard from './components/VaultsCard';
import VaultFilters from './components/VaultFilters';

function VaultList() {
  return (
    <DefaultLayout>
      <div>VaultList</div>
      <div className="p-7">
        <VaultFilters />
      </div>
      <VaultsCard />
    </DefaultLayout>
  );
}

export default VaultList;
