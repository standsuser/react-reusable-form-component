import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, TextField, Checkbox, FormControlLabel, Select, MenuItem, RadioGroup, Radio, Button, FormControl, InputLabel, Slider } from '@mui/material';
import { SketchPicker } from 'react-color';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// ReusableForm Component
const ReusableForm = ({ fields, onSubmit, validationSchema }) => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                {fields.map((field) => {
                    // Handle different field types
                    switch (field.type) {
                        case 'text':
                            return (
                                <Grid item xs={field.grid.xs} md={field.grid.md} key={field.name}>
                                    <Controller
                                        name={field.name}
                                        control={control}
                                        defaultValue={field.defaultValue || ''}
                                        render={({ field: controllerField }) => (
                                            <TextField
                                                {...controllerField}
                                                label={field.label}
                                                fullWidth
                                                error={!!errors[field.name]}
                                                helperText={errors[field.name]?.message}
                                            />
                                        )}
                                    />
                                </Grid>
                            );

                        case 'checkbox':
                            return (
                                <Grid item xs={field.grid.xs} md={field.grid.md} key={field.name}>
                                    <Controller
                                        name={field.name}
                                        control={control}
                                        defaultValue={!!field.defaultValue}
                                        render={({ field: controllerField }) => (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        {...controllerField}
                                                        checked={!!controllerField.value}
                                                    />
                                                }
                                                label={field.label}
                                            />
                                        )}
                                    />
                                </Grid>
                            );

                        case 'select':
                            return (
                                <Grid item xs={field.grid.xs} md={field.grid.md} key={field.name}>
                                    <Controller
                                        name={field.name}
                                        control={control}
                                        defaultValue={field.defaultValue || ''}
                                        render={({ field: controllerField }) => (
                                            <FormControl fullWidth>
                                                <InputLabel>{field.label}</InputLabel>
                                                <Select
                                                    {...controllerField}
                                                    label={field.label}
                                                    error={!!errors[field.name]}
                                                >
                                                    {field.options.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        )}
                                    />
                                </Grid>
                            );

                

                      
                        case 'password':
                            return (
                                <Grid item xs={field.grid.xs} md={field.grid.md} key={field.name}>
                                    <Controller
                                        name={field.name}
                                        control={control}
                                        defaultValue={field.defaultValue || ''}
                                        render={({ field: controllerField }) => (
                                            <TextField
                                                {...controllerField}
                                                label={field.label}
                                                type="password"
                                                fullWidth
                                                error={!!errors[field.name]}
                                                helperText={errors[field.name]?.message}
                                            />
                                        )}
                                    />
                                </Grid>
                            );

                        case 'textarea':
                            return (
                                <Grid item xs={field.grid.xs} md={field.grid.md} key={field.name}>
                                    <Controller
                                        name={field.name}
                                        control={control}
                                        defaultValue={field.defaultValue || ''}
                                        render={({ field: controllerField }) => (
                                            <TextField
                                                {...controllerField}
                                                label={field.label}
                                                fullWidth
                                                multiline
                                                rows={4}
                                                error={!!errors[field.name]}
                                                helperText={errors[field.name]?.message}
                                            />
                                        )}
                                    />
                                </Grid>
                            );

                        case 'slider':
                            return (
                                <Grid item xs={field.grid.xs} md={field.grid.md} key={field.name}>
                                    <Controller
                                        name={field.name}
                                        control={control}
                                        defaultValue={field.defaultValue || field.min}
                                        render={({ field: controllerField }) => (
                                            <Slider
                                                {...controllerField}
                                                min={field.min}
                                                max={field.max}
                                                step={field.step || 1}
                                                valueLabelDisplay="auto"
                                            />
                                        )}
                                    />
                                </Grid>
                            );

                        case 'radio':
                            return (
                                <Grid item xs={field.grid.xs} md={field.grid.md} key={field.name}>
                                    <Controller
                                        name={field.name}
                                        control={control}
                                        defaultValue={field.defaultValue || ''}
                                        render={({ field: controllerField }) => (
                                            <FormControl>
                                                <RadioGroup {...controllerField} row>
                                                    {field.options.map((option) => (
                                                        <FormControlLabel
                                                            key={option.value}
                                                            value={option.value}
                                                            control={<Radio />}
                                                            label={option.label}
                                                        />
                                                    ))}
                                                </RadioGroup>
                                            </FormControl>
                                        )}
                                    />
                                </Grid>
                            );

                        case 'file':
                            return (
                                <Grid item xs={field.grid.xs} md={field.grid.md} key={field.name}>
                                    <Controller
                                        name={field.name}
                                        control={control}
                                        defaultValue={field.defaultValue || ''}
                                        render={({ field: controllerField }) => (
                                            <input
                                                type="file"
                                                onChange={(e) => controllerField.onChange(e.target.files[0])}
                                            />
                                        )}
                                    />
                                </Grid>
                            );

                        case 'color':
                            return (
                                <Grid item xs={field.grid.xs} md={field.grid.md} key={field.name}>
                                    <Controller
                                        name={field.name}
                                        control={control}
                                        defaultValue={field.defaultValue || '#000'}
                                        render={({ field: controllerField }) => (
                                            <SketchPicker
                                                color={controllerField.value}
                                                onChange={(color) => controllerField.onChange(color.hex)}
                                            />
                                        )}
                                    />
                                </Grid>
                            );

                        default:
                            return null;
                    }
                })}
            </Grid>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default ReusableForm;
