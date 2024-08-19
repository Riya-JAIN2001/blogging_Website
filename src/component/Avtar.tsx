

export const Avtar = ({name}:{name:string, size:"small"|"big"}) => {
  return (
    <div className="bg-amber-600 text-gray-200 border rounded-full w-6 h-6 text-center">
        {name[0].toUpperCase()}
    </div>
  )
}
