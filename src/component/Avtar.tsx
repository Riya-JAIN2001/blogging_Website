

export const Avtar = ({name,size}:{name:string, size:"small"|"big"}) => {
  return (
    <div className="bg-slate-600 text-gray-200 border rounded-full w-6 h-6 text-center">
        {name[0]}
    </div>
  )
}
