import { Button } from "@mui/material";
import { AddButtonPropTypes } from "./types";
import { primaryStyles, secondaryStyles } from "../styles";

import AddIcon from '@mui/icons-material/Add';

const AddButton = ({ text, buttonVariant, handleClick } : AddButtonPropTypes) => {
    return (
        <Button
            style={{
                fontSize: '1em',
                padding: '.625rem 1rem',
                borderRadius: '.625rem'
            }}
            sx={buttonVariant ? primaryStyles : secondaryStyles}
            onClick={handleClick}
        >
            <AddIcon /> {text}
        </Button>
    );
};

export default AddButton;
