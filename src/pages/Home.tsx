import { Box } from "@mui/material"
import { FilterButton } from "../components";

const Home = () => {
    return (
        <Box>
            <FilterButton text="თბილისი" handleClick={() => console.log('FILTER RELEASED')}/>
            <FilterButton handleClick={() => console.log('FILTER RELEASED')}>
                <p>55 მ<sup style={{ fontSize: '.625em' }} >2</sup> - 90 მ<sup style={{ fontSize: '.625em' }} >2</sup></p>
            </FilterButton>
            <FilterButton text="20000₾ - 100000₾" handleClick={() => console.log('FILTER RELEASED')}/>
            <FilterButton text="1" handleClick={() => console.log('FILTER RELEASED')}/>
        </Box>
    );
};

export default Home
