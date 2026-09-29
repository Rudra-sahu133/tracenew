import spaceVideo from "../../assets/space.mp4";

function BackgroundVideo() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 z-0 h-full w-full object-cover"
      >
        <source src={spaceVideo} type="video/mp4" />
      </video>

      <div className="fixed inset-0 z-[1] bg-[#020817]/65" />
    </>
  );
}

export default BackgroundVideo;