import React, { useState } from "react";
import {
    Box,
    Button,
} from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { FileUploadPropTypes } from "./types";

const FileUpload = ({ filePath, handleFileUpload } : FileUploadPropTypes) => {

    return (
        <Box>
            <input
                accept="*"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
                id="file-upload"
            />

            <label htmlFor="file-upload">
                <Button variant="contained" >
                    <ControlPointIcon />
                </Button>
            </label>
        </Box>
    );
};

export default FileUpload;
