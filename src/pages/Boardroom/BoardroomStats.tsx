function BoardroomStats({ totalUsersDnodBalance, availableUserDnodBalance }) {
  const stats = [
    { name: "Total DNOD Staked", value: totalUsersDnodBalance },
    {
      name: "Available DNOD Balance",
      value: availableUserDnodBalance,
    },
    { name: "Total User DNOD Stacked", value: "3" },
  ]

  return (
    <>
      <div>
        <div className="mt-10 flex items-center justify-center">
          <dl className="my-10 mt-5 grid w-3/4 grid-cols-1 justify-center gap-5 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.name}
                className="card-main overflow-hidden rounded-3xl px-4 py-5 shadow-xl sm:p-6"
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
      </div>
    </>
  )
}

export default BoardroomStats
