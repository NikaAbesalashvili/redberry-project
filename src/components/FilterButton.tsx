import { Button } from "@mui/material";
import { FilterButtonPropTypes } from "./types";

import CloseIcon from '@mui/icons-material/Close';
import { filterButtonStyles } from "../styles";

const FilterButton = ({ text, children, handleClick } : FilterButtonPropTypes) => {
    return (
        <Button
            sx={filterButtonStyles}
            onClick={handleClick}
        >
            {children ? children : text} <CloseIcon sx={{ width: '.875rem' }} />
        </Button>
    );
};

export default FilterButton;
