const Loading = ({full}) => {
  return (
    <div className={` w-full top-0 left-0 ${full ? 'h-dvh' : "h-fit"} bg-[#f5f5f5] flex-center`}>
      <span className="loading text-pink-400 loading-infinity loading-xl !size-40" />
    </div>
  )
}

export default Loading