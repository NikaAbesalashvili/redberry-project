import { useFormik } from "formik";
import { listingSchema, Listing } from "../validation/listingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	TextField,
	Grid2 as Grid,
	Button,
	Box,
	Typography,
	InputLabel,
	Container,
	FormControl,
	RadioGroup,
	Radio,
	FormControlLabel,
	Select,
	MenuItem,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import {
	addListingBox,
	addListingTitle,
	addListingControlsContainer,
	dealRadios,
	textFieldStyles,
	controlTypeLabel,
	controlHintStyles,
	controlLabelStyles,
	selectStyles,
} from "../styles";

const initialValues: Listing = {
    address: '',
    image: undefined,
    region_id: 0,
    description: '',
    city_id: 0,
    zip_code: 0,
    price: 0,
    area: 0,
    bedrooms: 0,
    is_rental: 0,
    agent_id: 0,
}

const AddListing = () => {

    const formik = useFormik({
        initialValues,
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: zodResolver(listingSchema),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Box sx={addListingBox} >
			<Typography
				component='h1'
				sx={addListingTitle}
			>
				ლისტინგის დამატება
			</Typography>

			<Container sx={addListingControlsContainer} >

				<Container>
					<Typography sx={controlTypeLabel} >გარიგების ტიპი</Typography>
					<FormControl>
						<RadioGroup
							aria-labelledby="deal-type-radio-gropu"
							defaultValue={0}
							name="deal-type"
							sx={dealRadios}
						>
							<FormControlLabel value={0} control={<Radio />} label='იყიდება' />
							<FormControlLabel value={1} control={<Radio />} label='ქირავდება' />
						</RadioGroup>
					</FormControl>
				</Container>

				<Container>
					<Typography sx={controlTypeLabel} >მდებარეობა</Typography>
					<Grid container marginTop='1rem' spacing={3} >
						<Grid size={6} >
							<Typography sx={controlLabelStyles} >მისამართი *</Typography>
							<TextField sx={textFieldStyles} variant="outlined" />
							<Typography sx={controlHintStyles} >
								<DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მინიმუმ ორი სიმბოლო
							</Typography>
						</Grid>
						<Grid size={6} >
							<Typography sx={controlLabelStyles} >საფოსტო ინდექსი *</Typography>
							<TextField sx={textFieldStyles} variant="outlined" />
							<Typography sx={controlHintStyles} >
								<DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მხოლოდ რიცხვები
							</Typography>
						</Grid>
						<Grid size={6} >
							<Typography sx={controlLabelStyles} >რეგიონი</Typography>
							<Select
								labelId="region-select"
								sx={selectStyles}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</Grid>
						<Grid size={6} >
							<Typography sx={controlLabelStyles} >ქალაქი</Typography>
							<Select
								labelId="region-select"
								sx={selectStyles}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</Grid>
					</Grid>
				</Container>

				<Container>
					<Typography sx={controlTypeLabel} >ბინის დეტალები</Typography>
					<Grid container marginTop='1rem' spacing={3} >
						<Grid size={6} >
							<Typography sx={controlLabelStyles} >ფასი</Typography>
							<TextField sx={textFieldStyles} variant="outlined" />
							<Typography sx={controlHintStyles} >
								<DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მხოლოდ რიცხვები
							</Typography>
						</Grid>
						<Grid size={6} >
							<Typography sx={controlLabelStyles} >ფართობი</Typography>
							<TextField sx={textFieldStyles} variant="outlined" />
							<Typography sx={controlHintStyles} >
								<DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მხოლოდ რიცხვები
							</Typography>
						</Grid>
						<Grid size={6} >
							<Typography sx={controlLabelStyles} >საძინებლების რაოდენობა *</Typography>
							<TextField sx={textFieldStyles} variant="outlined" />
							<Typography sx={controlHintStyles} >
								<DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მხოლოდ რიცხვები
							</Typography>
						</Grid>
					</Grid>
				</Container>

				<Container>
					<Typography sx={controlTypeLabel} >აგენტი</Typography>
				</Container>
			</Container>
        </Box>
    );
};

export default AddListing;
