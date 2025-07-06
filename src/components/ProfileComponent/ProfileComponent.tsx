import Image from "next/image"
import PigPhoto from '../../../public/static-photo/pig.jpg'
import Link from "next/link"


export const ProfileComponent = () => {
  return (
      <>
        <Image src={PigPhoto} alt={"pig-profile"} width={30} height={30} className="rounded-full" placeholder="blur" loading="lazy"/>
      </>
  )
}

export function LinkComponent(){
    return (
       <Link href={'/todo'}/>
    )
}
