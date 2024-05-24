import { ChevronRightIcon } from "@heroicons/react/20/solid";

function BoardroomHistory() {
  return (
    <div className="mt-10 flex items-center justify-center">
      <ul
        role="list"
        className="divide-gray-100 ring-main w-3/4 divide-y overflow-hidden shadow-sm ring-1 sm:rounded-xl"
      >
        <li
          key="1days"
          className="hover:bg-gray-50 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-gray-900 text-sm font-semibold leading-6">
                <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
              </p>
              <p className="text-gray-500 mt-1 flex text-xs leading-5">
                email?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-gray-900 text-sm leading-6">APR...</p>
            </div>
            <ChevronRightIcon
              className="text-gray-400 h-5 w-5 flex-none"
              aria-hidden="true"
            />
          </div>
        </li>
        <li
          key="2days"
          className="hover:bg-gray-50 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-gray-900 text-sm font-semibold leading-6">
                <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
              </p>
              <p className="text-gray-500 mt-1 flex text-xs leading-5">
                email?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-gray-900 text-sm leading-6">APR...</p>
            </div>
            <ChevronRightIcon
              className="text-gray-400 h-5 w-5 flex-none"
              aria-hidden="true"
            />
          </div>
        </li>
        <li
          key="3days"
          className="hover:bg-gray-50 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-gray-900 text-sm font-semibold leading-6">
                <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
              </p>
              <p className="text-gray-500 mt-1 flex text-xs leading-5">
                email?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-gray-900 text-sm leading-6">APR...</p>
            </div>
            <ChevronRightIcon
              className="text-gray-400 h-5 w-5 flex-none"
              aria-hidden="true"
            />
          </div>
        </li>
        <li
          key="5days"
          className="hover:bg-gray-50 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-gray-900 text-sm font-semibold leading-6">
                <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
              </p>
              <p className="text-gray-500 mt-1 flex text-xs leading-5">
                email?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-gray-900 text-sm leading-6">APR...</p>
            </div>
            <ChevronRightIcon
              className="text-gray-400 h-5 w-5 flex-none"
              aria-hidden="true"
            />
          </div>
        </li>
        <li
          key="7days"
          className="hover:bg-gray-50 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-gray-900 text-sm font-semibold leading-6">
                <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
              </p>
              <p className="text-gray-500 mt-1 flex text-xs leading-5">
                email?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-gray-900 text-sm leading-6">APR...</p>
            </div>
            <ChevronRightIcon
              className="text-gray-400 h-5 w-5 flex-none"
              aria-hidden="true"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BoardroomHistory;
