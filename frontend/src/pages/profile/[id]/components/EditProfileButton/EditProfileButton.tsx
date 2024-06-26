import {MdOutlineEdit} from "react-icons/md";
import LightButton from "@/common-components/LightButton";
import {useRef} from "react";
import ProfileEditMenu from "@/pages/profile/[id]/components/ProfileEditMenu/ProfileEditMenu";
import EditProfileButtonLayout from "@/pages/profile/[id]/components/EditProfileButton/EditProfileButtonLayout";
import {useMenu} from "@/common-components/ProfileMenu/use-menu";
import {SetRef} from "@/types/SetRef";
import ProfileUploader from "@/pages/profile/[id]/components/ProfileUploaders/ProfileUploaders";
import {useSelector} from "react-redux";
import {Profile} from "@/types/Profile";

type EditProfileButtonProps = {
    profileData: Profile,
}

const EditProfileButton = (props: EditProfileButtonProps) => {
    const {profileData} = props;
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const {isMenuOpened, setIsMenuOpened} = useMenu(menuRef, buttonRef);
    const userProfile = useSelector((state: any) => state.userProfile);
    const tokenInfo = useSelector((state: any) => state.token);

    const setAvatarRef = useRef<SetRef>(null);
    const setBannerRef = useRef<SetRef>(null);
    const setRefs = [setAvatarRef, setBannerRef];

    if (userProfile.id === null || userProfile.id !== profileData.user.id || !tokenInfo.signedIn) return null;
    return (
        <EditProfileButtonLayout>
            <LightButton
                buttonRef={buttonRef}
                className={"flex items-center gap-x-1.5"}
                onClick={() => setIsMenuOpened((prev) => !prev)}
            >
                <MdOutlineEdit className={"text-xl"}/>
                <span>Edit</span>
            </LightButton>
            <ProfileEditMenu
                setRefs={setRefs}
                isOpened={isMenuOpened}
                menuRef={menuRef}
                setIsOpened={setIsMenuOpened}
            />
            <ProfileUploader menuRef={menuRef} setRefs={setRefs}/>
        </EditProfileButtonLayout>
    )
}

export default EditProfileButton;