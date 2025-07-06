// import { AuthRequiredError } from "@/lib/exception";

import { CarouselDApiDemo } from "@/components/(landing)/carousel/CarouselComponent";
import { MarqueeDemo } from "@/components/(landing)/testimonial/TestimonialComponent";
import { HeroVideoDialogDemo } from "@/components/(landing)/VideoComponent/VideoComponent";
// import { LinkComponent } from "@/components/ProfileComponent/ProfileComponent";


export default function Home() {

  // const session = null;

  // if(!session) throw new AuthRequiredError();

  return(
    <div>
       <CarouselDApiDemo/>
       {/* testimonial */}
       <MarqueeDemo/>
       {/* video  */}
       <HeroVideoDialogDemo/>

       {/* <Link href="/todo">Navigate to Todo</Link> */}
{/* 
       <button className="bg-red-500 border p-4">
        Click to navigate Todo
        <Link href="/todo" prefetch={false}>Navigate to Todo</Link>
       </button> */}
       
       
    </div>
   
    
  )
 
}
