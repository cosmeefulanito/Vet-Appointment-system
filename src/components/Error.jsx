const Error = ({children}) => {
  return (
    <div className='font-bold bg-red-900 p-2 my-3 text-white text-center rounded-md'>
        {children}
    </div>
  )
}

export default Error