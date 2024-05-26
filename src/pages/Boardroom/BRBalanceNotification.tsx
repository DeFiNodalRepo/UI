function BRBalanceNotification({ text }) {
  return (
    <div className="my-10 flex items-center justify-center">
      <div className="card-main flex h-15 w-3/4 items-center justify-center rounded-3xl text-2xl font-semibold text-green-500 shadow-md">
        {text}
      </div>
    </div>
  )
}

export default BRBalanceNotification
