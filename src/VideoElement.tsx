import React from "react";
import videoSRC from "./assets/video.mp4";

const VideoElement = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);

  function forward() {
    if (video.current) video.current.currentTime += 2;
  }

  function changePlayBackRate(speed: number) {
    if (video.current) video.current.playbackRate = speed;
  }

  function mute() {
    if (video.current) video.current.muted = !video.current.muted;
  }
  async function pictureInPitcure() {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.current.requestPictureInPicture();
    }
  }

  return (
    <div>
      <div className="flex">
        <p>{playing ? "tocando" : "pausado"} </p>
        {playing ? (
          <button onClick={() => video.current?.pause()}>Pause </button>
        ) : (
          <button onClick={() => video.current?.play()}>Play </button>
        )}
        <button onClick={forward}> +2s </button>
        <button onClick={() => changePlayBackRate(1)}> 1x </button>
        <button onClick={() => changePlayBackRate(2)}> 2x </button>
        <button onClick={() => pictureInPitcure()}> PiP </button>
        <button onClick={mute}> M </button>
      </div>

      <video
        controls
        ref={video}
        src={videoSRC}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      ></video>
    </div>
  );
};

export default VideoElement;
