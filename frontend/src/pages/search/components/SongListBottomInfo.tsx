import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {useRouter} from "next/navigation";
import {getYearFromTimestamp} from "@/utils/utils";

type SongListBottomInfoProps = {
    item: Album | Playlist
}

const SongListBottomInfo = (props: SongListBottomInfoProps) => {
    const {item} = props;
    const router = useRouter();


    return (
        <>
            <span
                className={"cursor-pointer select-text hover:underline duration-200 ease-out"}
                onClick={() => router.push(`/profile/${item.creator.id}`)}>
                {item.creator.username}
            </span>
            <span>•</span>
            <span>{getYearFromTimestamp(item.creatingDate)}</span>
        </>
    )
}

export default SongListBottomInfo;