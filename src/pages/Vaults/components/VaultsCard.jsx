import Loader from '../../../common/Loader';

import { useQuery } from '@tanstack/react-query';
import { getStrats } from '../../../services/apiFetches';

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
];

function StartsData() {}

export default function VaultsCard() {
  const {
    data: strategies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['strats'],
    queryFn: getStrats,
  });

  console.log(strategies);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const strategiesArray = Object.values(strategies);

  return (
    <ul
      role="list"
      className="divide-y divider-main overflow-hidden bg-main shadow-sm ring-1 ring-main sm:rounded-xl"
    >
      {strategiesArray.map((strategy) => (
        <li
          key={strategy.id}
          className="relative flex justify-between gap-x-6 px-4 py-5  sm:px-6"
        >
          <div className="flex gap-x-4">
            {/* <img
              className="h-12 w-12 flex-none rounded-full bg-gray-500"
              src={person.imageUrl}
              alt=""
            /> */}
            IMG
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-main">
                <span className="absolute inset-x-0 -top-px bottom-0" />
                {strategy.poolGroup}
              </p>
              {/* <p className="mt-1 flex text-xs leading-5 text-black dark:text-slate-100">
                <a
                  href={`mailto:${person.email}`}
                  className="relative truncate "
                >
                  {person.email}
                </a>
              </p> */}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-black dark:text-slate-100">
                {strategy.tokenId}
              </p>

              {/* <p className="mt-1 text-xs leading-5 text-black dark:text-slate-100">
                Last seen{' '}
                <time dateTime={person.lastSeenDateTime}>
                  {person.lastSeen}
                </time>
              </p> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
