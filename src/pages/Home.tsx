import {
    Box,
    Modal,
    Grid2 as Grid,
    Typography,
    TextField,
} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import { AddButton, FileUpload } from "../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
    controlHintStyles,
    controlLabelStyles,
    modalBoxStyles,
    pageTitle,
    textFieldStyles
} from "../styles";

const Home = () => {

    const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0])
        };
    };

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Modal
                open={isAgentModalOpen}
                onClose={() => setIsAgentModalOpen(false)}
            >
                <Box
                    sx={modalBoxStyles}
                >
                    <Typography
                        component='h1'
                        sx={pageTitle}
                    >
                        აგენტის დამატება
                    </Typography>
                    <Grid container spacing={3} >
                        <Grid size={6} >
                            <Typography sx={controlLabelStyles} >
                                სახელი *
                            </Typography>
                            <TextField
                                sx={textFieldStyles}
                                variant="outlined"
                            />
                            <Typography sx={controlHintStyles} >
                                <DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მინიმუმ ორი სიმბოლო
                            </Typography>
                        </Grid>
                        <Grid size={6} >
                            <Typography sx={controlLabelStyles} >
                                გვარი
                            </Typography>
                            <TextField
                                sx={textFieldStyles}
                                variant="outlined"
                            />
                            <Typography sx={controlHintStyles} >
                                <DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მინიმუმ ორი სიმბოლო
                            </Typography>
                        </Grid>
                        <Grid size={6} >
                            <Typography sx={controlLabelStyles} >
                                ელ-ფოსტა *
                            </Typography>
                            <TextField
                                sx={textFieldStyles}
                                variant="outlined"
                            />
                            <Typography sx={controlHintStyles} >
                                <DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> გამოიყენეთ @redberry.ge ფოსტა
                            </Typography>
                        </Grid>
                        <Grid size={6} >
                            <Typography sx={controlLabelStyles} >
                                ტელეფონის ნომერი *
                            </Typography>
                            <TextField
                                sx={textFieldStyles}
                                variant="outlined"
                            />
                            <Typography sx={controlHintStyles} >
                                <DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მხოლოდ რიცხვები
                            </Typography>
                        </Grid>
                    </Grid>
                    <FileUpload  >

                    </FileUpload>
                </Box>

            </Modal>
            <Box>
                FILTERS
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Link to='/add-listing' >
                    <AddButton
                        text="ლისტინგის დამატება"
                        primary={true}
                        handleClick={() => console.log('ADDING LISTING')}
                    />
                </Link>
                <AddButton
                    text="აგენტის დამატება"
                    handleClick={() => setIsAgentModalOpen(true)}
                />
            </Box>
        </Box>
    );
};



export default Home
