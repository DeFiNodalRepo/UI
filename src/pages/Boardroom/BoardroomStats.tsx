const stats = [
  { name: "Number of deploys", value: "405" },
  { name: "Average deploy time", value: "3.65", unit: "mins" },
  { name: "Number of servers", value: "3" },
  { name: "Success rate", value: "98.5%" },
];

function BoardroomStats() {
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <div className="card-main rounded-3xl  flex justify-center shadow-md ">
          <div className="grid grid-cols-1 mx-10 sm:grid-cols-2 lg:grid-cols-4 gap-20">
            {stats.map((stat) => (
              <div key={stat.name} className=" px-4 py-6 sm:px-6 lg:px-8">
                <p className="text-sm font-medium leading-6 ">{stat.name}</p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-4xl font-semibold tracking-tight ">
                    {stat.value}
                  </span>
                  {stat.unit ? (
                    <span className="text-sm ">{stat.unit}</span>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4 my-10">
          {stats.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-3xl card-main px-4 py-5 shadow sm:p-6"
            >
              <dt className="truncate text-sm font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}

export default BoardroomStats;
