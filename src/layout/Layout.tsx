import { AddButton } from "../components";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <AddButton text="Add" buttonVariant={true} handleClick={() => console.log('CLICK')} />
        </>
    );
};

export default Layout;
