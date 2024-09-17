import { useFormik } from "formik";
import { listingSchema, Listing } from "../validation/listingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Box, Grid, Typography, InputLabel } from '@mui/material';

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
        <Box>
            <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="address"
            name="address"
            label="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </Grid>

        <Grid item xs={12}>
          <InputLabel htmlFor="image">Image</InputLabel>
          <input
            id="image"
            name="image"
            type="file"
            onChange={(event) => {
              if (event.currentTarget.files) {
                formik.setFieldValue('image', event.currentTarget.files[0]);
              }
            }}
          />
          {formik.touched.image && formik.errors.image && (
            <Typography color="error">{formik.errors.image}</Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="price"
            name="price"
            label="Price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="region_id"
            name="region_id"
            label="Region ID"
            type="number"
            value={formik.values.region_id}
            onChange={formik.handleChange}
            error={formik.touched.region_id && Boolean(formik.errors.region_id)}
            helperText={formik.touched.region_id && formik.errors.region_id}
          />
        </Grid>

        {/* Add more fields like city_id, zip_code, area, etc., in the same way */}

        <Grid item xs={12}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
        </Box>
    );
};

export default AddListing;
