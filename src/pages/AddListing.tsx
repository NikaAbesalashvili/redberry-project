import { useFormik } from "formik";
import { useLocations } from "../hooks";
import { listingSchema, Listing } from "../validation/listingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	TextField,
	Grid2 as Grid,
	Box,
	Typography,
	Container,
	FormControl,
	RadioGroup,
	Radio,
	FormControlLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import {
	addListingBox,
	pageTitle,
	addListingControlsContainer,
	dealRadios,
	radioStyles,
	textFieldStyles,
	controlTypeLabel,
	controlHintStyles,
	controlLabelStyles,
	selectStyles,
	textArea,
} from "../styles";

const initialValues: Listing = {
    address: '',
    image: undefined,
    region_id: 1,
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

	const {
		citiesStatus,
        cities,
        citiesError,
        regionsStatus,
        regions,
        regionsError,
		filterCitiesByRegion,
	} = useLocations();

	const handleRegionSelect = (event: SelectChangeEvent) => {
		const { value } = event.target;
		console.log(value);
	};

    return (
        <Box sx={addListingBox} >
			<Typography
				component='h1'
				sx={pageTitle}
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
							name="is_rental"
							sx={dealRadios}
							onChange={formik.handleChange}
						>
							<FormControlLabel value={0} control={<Radio sx={radioStyles} />} label='იყიდება' />
							<FormControlLabel value={1} control={<Radio sx={radioStyles} />} label='ქირავდება' />
						</RadioGroup>
					</FormControl>
				</Container>

				<Container>
					<Typography sx={controlTypeLabel} >მდებარეობა</Typography>
					<Grid container marginTop='1rem' spacing={3} >
						<Grid size={6} >
							<Typography sx={controlLabelStyles} >მისამართი *</Typography>
							<TextField
								sx={textFieldStyles}
								variant="outlined"
								name="address"
								value={formik.touched.address}
								onChange={formik.handleChange}
								error={formik.touched.address && Boolean(formik.errors.address)}
								helperText={formik.touched.address && formik.errors.address}
							/>
							<Typography sx={controlHintStyles} >
								<DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მინიმუმ ორი სიმბოლო
							</Typography>
						</Grid>
						<Grid size={6} >
							<Typography sx={controlLabelStyles} >საფოსტო ინდექსი *</Typography>
							<TextField
								sx={textFieldStyles}
								variant="outlined"
								name="zip_code"
								value={formik.touched.zip_code}
								onChange={formik.handleChange}
								error={formik.touched.zip_code && Boolean(formik.errors.zip_code)}
								helperText={formik.touched.zip_code && formik.errors.zip_code}
							/>
							<Typography sx={controlHintStyles} >
								<DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მხოლოდ რიცხვები
							</Typography>
						</Grid>
						<Grid size={6} >
							<Typography sx={controlLabelStyles} >რეგიონი</Typography>
							{regions.length > 0 && (
								<Select
									labelId="region-select"
									sx={selectStyles}
									name="region_id"
									value={formik.touched.region_id}
									onChange={formik.handleChange}
									error={formik.touched.region_id && Boolean(formik.errors.region_id)}
								>
									{regions.map(region => (
										<MenuItem
											key={region.id}
											value={region.id}
										>
											{region.name}
										</MenuItem>
									))}
								</Select>
							)}
						</Grid>
						<Grid size={6} >
							<Typography sx={controlLabelStyles} >ქალაქი</Typography>
							{/* <Select
								labelId="region-select"
								sx={selectStyles}
							>
								{cities.length > 0 ? (
									cities.map((city: City) => (
										<MenuItem value={city.id}>{city.name}</MenuItem>
									))
								) : (
									<MenuItem value={-1}>აირჩიეთ რეგიონი</MenuItem>
								)}
							</Select> */}
						</Grid>
					</Grid>
				</Container>

				<Container>
					<Typography sx={controlTypeLabel} >ბინის დეტალები</Typography>
					<Grid container marginTop='1rem' spacing={3} >

						<Grid size={6} >
							<Typography sx={controlLabelStyles} >ფასი</Typography>
							<TextField
								sx={textFieldStyles}
								variant="outlined"
								name="price"
								value={formik.touched.price}
								onChange={formik.handleChange}
								error={formik.touched.price && Boolean(formik.errors.price)}
								helperText={formik.touched.price && formik.errors.price}

							/>
							<Typography sx={controlHintStyles} >
								<DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მხოლოდ რიცხვები
							</Typography>
						</Grid>

						<Grid size={6} >
							<Typography sx={controlLabelStyles} >ფართობი</Typography>
							<TextField
								sx={textFieldStyles}
								variant="outlined"
								name="area"
								value={formik.touched.area}
								onChange={formik.handleChange}
								error={formik.touched.area && Boolean(formik.errors.area)}
								helperText={formik.touched.area && formik.errors.area}
							/>
							<Typography sx={controlHintStyles} >
								<DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მხოლოდ რიცხვები
							</Typography>
						</Grid>

						<Grid size={6} >
							<Typography sx={controlLabelStyles} >საძინებლების რაოდენობა *</Typography>
							<TextField
								sx={textFieldStyles}
								variant="outlined"
								name="bedrooms"
								value={formik.touched.bedrooms}
								onChange={formik.handleChange}
								error={formik.touched.bedrooms && Boolean(formik.errors.bedrooms)}
								helperText={formik.touched.bedrooms && formik.errors.bedrooms}
							/>
							<Typography sx={controlHintStyles} >
								<DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მხოლოდ რიცხვები
							</Typography>
						</Grid>

						<Grid size={12} >
							<Typography sx={controlLabelStyles} >აღწერა *</Typography>
							<TextField
								sx={textArea}
								variant="outlined"
								multiline
								rows={4}
								fullWidth
								name="description"
								value={formik.touched.description}
								onChange={formik.handleChange}
								error={formik.touched.description && Boolean(formik.errors.description)}
								helperText={formik.touched.description && formik.errors.description}

							/>
							<Typography sx={controlHintStyles} >
								<DoneIcon style={{ width: '.875rem', height: 'fit-content' }} /> მინიმუმ ხუთი სიტყვა
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
