import { twMerge } from "tailwind-merge"




interface Props {
    children?: React.ReactNode
    className?: string
}


const Wrapper = ({children, className}:Props) => {
  return (
    <div className={twMerge('max-w-screen-xl mx-auto px-4', className)}>
      {children}
    </div>
  )
}

export default Wrapper