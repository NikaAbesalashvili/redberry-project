import { apartmentLabelStyles } from "../styles";
import { ApartmentLabelPropTypes } from "./types";


import { Typography } from "@mui/material";

const ApartmentLabel = ({ text } : ApartmentLabelPropTypes) => {
    return (
        <Typography component='span' sx={apartmentLabelStyles} >
            {text}
        </Typography>
    );
};

export default ApartmentLabel;
