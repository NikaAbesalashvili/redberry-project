import { Box } from '@mui/material';

import { navbarBoxStyles } from '../styles';
import logo from '../assets/logo.png';

const Navbar = () => {

    return (
        <Box sx={{ borderBottom: '1px solid rgba(219, 219, 219, 1)', }}> 
            <Box sx={navbarBoxStyles} >
                <img src={logo} alt='Logo' />
            </Box>
        </Box>
    );
}
export default Navbar;
