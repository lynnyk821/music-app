import {LayoutProps} from "@/types/LayoutProps";

const PlayListsBlockLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="p-4 gap-y-6">
            {children}
        </div>
    )
}

export default PlayListsBlockLayout;