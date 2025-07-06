'use client'

import { usePathname } from "next/navigation";

export const ButtonComponent = () => {
  const pathname = usePathname();

  if(pathname == '/blog'){
    return null;
  }
  
  return (
    <div>ButtonComponent</div>
  )
}
export default ButtonComponent;