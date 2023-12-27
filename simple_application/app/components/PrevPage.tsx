import Image from 'next/image'

export default function PrevPage() {
    return (
    <>
    <div>
        <Image
          src="/left_arrow.svg"
          alt="Previous Page Arrow"
          width={16}
          height={16}
          priority
        />
        <p>Back</p>
      </div>
    </>
    )
}