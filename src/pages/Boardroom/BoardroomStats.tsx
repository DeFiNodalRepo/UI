function BoardroomStats({ totalUsersDnodBalance, availableUserDnodBalance }) {
  const stats = [
    { name: "Total DNOD Staked", value: totalUsersDnodBalance },
    { name: "Available DNOD Balance", value: availableUserDnodBalance },
    { name: "Total User DNOD Stacked", value: "3" },
  ]

  return (
    <>
      <div className="my-10 flex items-center justify-center">
        <div className="card-main flex justify-center rounded-3xl shadow-md">
          <div className="mx-10 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="px-4 py-6 sm:px-6 lg:px-8">
                <p className="text-sm font-medium leading-6">{stat.name}</p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-4xl font-semibold tracking-tight">
                    {stat.value}
                  </span>
                  {stat.unit ? (
                    <span className="text-sm">{stat.unit}</span>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <dl className="my-10 mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.name}
              className="card-main overflow-hidden rounded-3xl px-4 py-5 shadow sm:p-6"
            >
              <dt className="text-gray-500 truncate text-sm font-medium">
                {item.name}
              </dt>
              <dd className="text-gray-900 mt-1 text-3xl font-semibold tracking-tight">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  )
}

export default BoardroomStats
