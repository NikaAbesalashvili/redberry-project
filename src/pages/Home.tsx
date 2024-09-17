import { Box } from "@mui/material"
import { ApartmentLabel } from "../components";

const Home = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '1rem',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <ApartmentLabel text="იყიდება" />
                <ApartmentLabel text="ქირავდება" />
            </Box>
        </Box>
    );
};

export default Home
