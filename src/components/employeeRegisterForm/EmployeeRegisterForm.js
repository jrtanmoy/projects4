import { Box, Container } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import Input from "common/Input";
import EmployeeButton from "common/EmployeeButton";
import Typography from '@mui/material/Typography';


const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    dateOfBirth: yup
        .string('Enter your Date Of Birth')
        .required('Date Of Birth is required'),
    phoneNumber: yup
        .string('Enter your phone Number')
        .min(8, 'Phone Number should be of minimum 8 characters length')
        .required('Phone Number is required'),
    current_address: yup
        .string('Enter your Current Address')
        .required('Current Address is required'),
    perma_address: yup
        .string('Enter your Permanent Address')
        .required('Permanent Address is required'),
    adhaarNumber: yup
        .string('Enter your Adhaar Number')
        .required('Adhaar Number is required'),
    panNumber: yup
        .string('Enter your Pan Number')
        .required('Pan Number is required'),
    bankAccountNumber: yup
        .string('Enter your Bank Account Number')
        .required('Bank Account Number is required'),
    ifsc: yup
        .string('Enter your Bank ifsc')
        .required('ifsc Number is required'),
    passBookNumber: yup
        .string('Enter your Pass Book Number')
        .required('Pass Book Number Number is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    file: yup
        .string('Enter your photo')
        .required('photo is required'),

});
const validationSchemaForAdmin = yup.object({

    dateOfJoining: yup
        .string('Enter Date of Joining')
        .required('Date of Joining is required'),
});

const EmployeeRegisterForm = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: '',
            dateOfBirth: '',
            phoneNumber: '',
            current_address: '',
            perma_address: '',
            adhaarNumber: '',
            panNumber: '',
            bankAccountNumber: '',
            ifsc: '',
            passBookNumber: '',
            password: '',
            file: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const formikForAdmin = useFormik({
        initialValues: {
            dateOfJoining: '',
        },
        validationSchema: validationSchemaForAdmin,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <Container maxWidth="sm">
                <Box >
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{ display: "flex", gap: "2vw" }}>
                            <Input
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                            <Input
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: "2vw", marginTop: "1vw" }}>
                            <Input
                                fullWidth
                                id="dateOfBirth"
                                name="dateOfBirth"
                                label="Date Of Birth"
                                value={formik.values.dateOfBirth}
                                onChange={formik.handleChange}
                                error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                                helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                            />
                            <Input
                                fullWidth
                                id="phoneNumber"
                                name="phoneNumber"
                                label="Phone Number"
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: "2vw", marginTop: "1vw" }}>
                            <Input
                                fullWidth
                                id="current_address"
                                name="current_address"
                                label="Current Address"
                                value={formik.values.current_address}
                                onChange={formik.handleChange}
                                error={formik.touched.current_address && Boolean(formik.errors.current_address)}
                                helperText={formik.touched.current_address && formik.errors.current_address}
                            />
                            <Input
                                fullWidth
                                id="perma_address"
                                name="perma_address"
                                label="Permanent Address"
                                value={formik.values.perma_address}
                                onChange={formik.handleChange}
                                error={formik.touched.perma_address && Boolean(formik.errors.perma_address)}
                                helperText={formik.touched.perma_address && formik.errors.perma_address}
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: "2vw", marginTop: "1vw" }}>
                            <Input
                                fullWidth
                                id="adhaarNumber"
                                name="adhaarNumber"
                                label="Adhaar Number"
                                value={formik.values.adhaarNumber}
                                onChange={formik.handleChange}
                                error={formik.touched.adhaarNumber && Boolean(formik.errors.adhaarNumber)}
                                helperText={formik.touched.adhaarNumber && formik.errors.adhaarNumber}
                            />
                            <Input
                                fullWidth
                                id="panNumber"
                                name="panNumber"
                                label="Pan Number"
                                value={formik.values.panNumber}
                                onChange={formik.handleChange}
                                error={formik.touched.panNumber && Boolean(formik.errors.panNumber)}
                                helperText={formik.touched.panNumber && formik.errors.panNumber}
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: "2vw", marginTop: "1vw" }}>
                            <Input
                                fullWidth
                                id="bankAccountNumber"
                                name="bankAccountNumber"
                                label="Bank Account Number"
                                value={formik.values.bankAccountNumber}
                                onChange={formik.handleChange}
                                error={formik.touched.bankAccountNumber && Boolean(formik.errors.bankAccountNumber)}
                                helperText={formik.touched.bankAccountNumber && formik.errors.bankAccountNumber}
                            />
                            <Input
                                fullWidth
                                id="ifsc"
                                name="ifsc"
                                label="IFSC"
                                value={formik.values.ifsc}
                                onChange={formik.handleChange}
                                error={formik.touched.ifsc && Boolean(formik.errors.ifsc)}
                                helperText={formik.touched.ifsc && formik.errors.ifsc}
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: "2vw", marginTop: "1vw" }}>
                            <Input
                                fullWidth
                                id="passBookNumber"
                                name="passBookNumber"
                                label="Pass Book Number"
                                value={formik.values.passBookNumber}
                                onChange={formik.handleChange}
                                error={formik.touched.passBookNumber && Boolean(formik.errors.passBookNumber)}
                                helperText={formik.touched.passBookNumber && formik.errors.passBookNumber}
                            />
                            <Input
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: "2vw", marginTop: "1vw", marginBottom: "1vw" }}>
                            {/* <Input
                            fullWidth
                            id="photo"
                            name="photo"
                            label="Photo"
                            value={formik.values.photo}
                            onChange={formik.handleChange}
                            error={formik.touched.photo && Boolean(formik.errors.photo)}
                            helperText={formik.touched.photo && formik.errors.photo}
                        /> */}

                            <Typography sx={{ marginLeft: "1vw" }} variant="body1" gutterBottom>
                                Photo
                            </Typography>
                            <input
                                id="file"
                                name="file"
                                type="file"
                                label="Choose Photo"
                                value={formik.values.file}
                                onChange={formik.handleChange}
                                error={formik.touched.file && Boolean(formik.errors.file)}
                                helperText={formik.touched.file && formik.errors.file}
                            />

                        </Box>
                        <EmployeeButton color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </EmployeeButton>
                    </form>
                </Box>
            </Container>
            <Container maxWidth="sm" sx={{ marginTop: "4vw" }}>
                <Box >
                    <form onSubmit={formikForAdmin.handleSubmit}>
                        <Box sx={{ display: "flex", gap: "2vw" }}>
                            <Input
                                fullWidth
                                id="dateOfJoining"
                                name="dateOfJoining"
                                label="Date Of Joining"
                                value={formikForAdmin.values.dateOfJoining}
                                onChange={formikForAdmin.handleChange}
                                error={formikForAdmin.touched.dateOfJoining && Boolean(formikForAdmin.errors.dateOfJoining)}
                                helperText={formikForAdmin.touched.dateOfJoining && formikForAdmin.errors.dateOfJoining}
                            />
                        </Box>
                        <EmployeeButton color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </EmployeeButton>
                    </form>
                </Box>
            </Container>

        </div>
    );
};

export default EmployeeRegisterForm;