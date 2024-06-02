import {LayoutProps} from "@/types/LayoutProps";
import {Manrope} from "next/font/google";
import {Provider} from "react-redux";
import store from "@/redux/stores/store";
import {AudioProvider} from "@/common-components/AudioContext";
import Navbar from "@/common-components/Navbar/Navbar";
import MusicPlayer from "@/common-components/MusicPlayer/MusicPlayer";
import Dialog from "@/common-components/Dialog/Dialog";

const inter = Manrope({
    subsets: ['latin'],
    display: 'swap',
})

type AppLayoutProps = LayoutProps & {
    hideNavbarHeader: boolean
}

const AppLayout = (props: AppLayoutProps) => {
    const {children, hideNavbarHeader} = props;

    return (
        <AudioProvider>
            <Provider store={store}>
                <Dialog/>
                <MusicPlayer/>
                <div className={`flex ${inter.className}`}>
                    {!hideNavbarHeader && <Navbar/>}
                    <div className={`w-full flex flex-col`}>
                        {children}
                    </div>
                </div>
            </Provider>
        </AudioProvider>
    )
}

export default AppLayout;