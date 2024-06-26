import PlayLayout from "./PlayLayout";
import {IoPlaySkipBack, IoPlaySkipForward, IoShuffleOutline} from "react-icons/io5";
import PlayButton from "@/common-components/MusicPlayer/components/PlayButton/PlayButton";
import RepeatButton from "@/common-components/MusicPlayer/components/RepeatButton";
import {useDispatch, useSelector} from "react-redux";
import {useAudio} from "@/common-components/AudioContext";
import {handleNextTrack, handlePrevTrack} from "@/common-components/MusicPlayer/handlers";
import {MusicPlayerType} from "@/types/MusicPlayerType";

const PlayController = () => {
    const buttonStyle = "text-2xl cursor-pointer";
    const dispatch = useDispatch();
    const audioElement = useAudio() as HTMLAudioElement;
    const musicPlayer = useSelector((state: any) => state.musicPlayer) as MusicPlayerType;

    return (
        <PlayLayout>
            <IoShuffleOutline className={buttonStyle}/>
            <IoPlaySkipBack
                onClick={() => handlePrevTrack(audioElement, dispatch, musicPlayer)}
                className={buttonStyle}
            />
            <PlayButton/>
            <IoPlaySkipForward
                onClick={() => handleNextTrack(audioElement, dispatch, musicPlayer)}
                className={buttonStyle}
            />
            <RepeatButton/>
        </PlayLayout>
    )
}

export default PlayController;