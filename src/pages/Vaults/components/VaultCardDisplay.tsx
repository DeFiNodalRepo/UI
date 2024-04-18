import React from 'react';

function VaultCardDisplay({ strategy }) {
  const {
    id,
    tokenId,
    createdOn,
    retiredOn,
    tokens,
    rewards,
    stratId,
    stablePer,
    poolGroup,
    stratGroup,
  } = strategy;

  return (
    <li
      key={id}
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
          <p className="text-sm font-semibold leading-6">
            <span className="absolute inset-x-0 -top-px bottom-0" />
            {poolGroup}
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
  );
}

export default VaultCardDisplay;
