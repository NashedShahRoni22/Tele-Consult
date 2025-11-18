import womenBody from "@/public/women-body.svg"
import Image from "next/image"

export default function Anatomy() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <Image src={womenBody} />
    </div>
  )
}
