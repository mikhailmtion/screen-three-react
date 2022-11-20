import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import styles from "./Player.module.scss";
import ReactPlayer from "react-player/youtube";
import { dataMusic } from "./data";
import { ReactComponent as Play } from "../../assets/icons/play.svg";
import { ReactComponent as Pause } from "../../assets/icons/pause.svg";
import { ReactComponent as Next } from "../../assets/icons/next.svg";
import { ReactComponent as Prev } from "../../assets/icons/prev.svg";
import { playerStore } from "../../store/PlayerStore";

function Player() {
  const [index, setIndex] = useState(0);

  const handlePlayClick = () => {
    playerStore.setPlay();
  };

  const handleNextClick = () => {
    if (index < dataMusic.length - 1) {
      setIndex((index) => index + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrevClick = () => {
    if (index < dataMusic.length + 1) {
      setIndex((index) => index - 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className={`${styles.player} ${playerStore.isReady ? `${styles.ready}` : ""}`}>
      <ReactPlayer
        url={dataMusic[index].url}
        controls={true}
        width="0"
        height="0"
        playing={playerStore.isPlay}
        onStart={() => playerStore.setReady(true)}
      />
      <div className={styles.player__btn}>
        <Prev onClick={handlePrevClick} />
        {playerStore.isPlay && <Pause onClick={handlePlayClick} />}
        {!playerStore.isPlay && <Play onClick={handlePlayClick} />}
        <Next onClick={handleNextClick} />
      </div>
      {playerStore.isReady && (
        <div className={styles.player__info}>
          <span>{dataMusic[index].title}</span>
        </div>
      )}
    </div>
  );
}

export default observer(Player);
