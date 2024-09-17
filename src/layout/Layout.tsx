import { AddButton } from "../components";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <AddButton
                text="ლისტინგის დამატება"
                buttonVariant={false}
                handleClick={() => console.log('CLICK')}
            />
        </>
    );
};

export default Layout;
