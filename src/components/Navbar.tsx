import { Box } from '@mui/material';

import { navbarBoxStyles } from '../styles';
import logo from '../assets/logo.png';

const Navbar = () => {

    return (
        <Box> 
            <Box sx={navbarBoxStyles} >
                <img src={logo} alt='Logo' />
            </Box>
        </Box>
    );
}
export default Navbar;
