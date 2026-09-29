import bgVideo from "../../assets/bgvideo.mp4";

function BackgroundVideo() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 -z-20 h-full w-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="fixed inset-0 -z-10 bg-[#020817]/65" />
    </>
  );
}

export default BackgroundVideo;