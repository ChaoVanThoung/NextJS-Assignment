import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative w-[50%] mt-8 mx-auto">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/kNUFrLpxS58?si=PUuvIKqzCm6NiCka"
        thumbnailSrc="/static-photo/car-thumbnail.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
