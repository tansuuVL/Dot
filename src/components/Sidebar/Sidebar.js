import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    makeStyles,
    Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useProducts } from "../../contexts/ProductsContext";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "300px",
        padding: theme.spacing(2),
    },
}));

const Sidebar = () => {
    const classes = useStyles();
    const [slider, setSlider] = useState([200, 15000]);

    const { fetchByParams } = useProducts();

    const handleSlider = (e, value) => {
        setSlider(value);
        // console.log(value)
    };
    const handleFilterPrice = () => {
        fetchByParams("price_lte", slider);
    };

    return (
        <Grid item md={3}>
            <Paper
                className={classes.root}
                style={{
                    backgroundImage: `url("https://i.pinimg.com/736x/c7/a1/f3/c7a1f3ff492f07a372b6cd42ded28537.jpg") `,
                    borderRadius: "0px",
                    color: "black",
                }}
            >
                <Grid>
                    <FormControl component="fieldset">
                        <FormLabel component="label" style={{ color: "black" }}>
                            Category
                        </FormLabel>
                        <RadioGroup
                            aria-label="memory"
                            name="memory1"
                            onChange={(e) =>
                                fetchByParams("category", e.target.value)
                            }
                        >
                            <FormControlLabel
                                value=" for man"
                                control={<Radio />}
                                label=" for man"
                            />
                            <FormControlLabel
                                value=" for woman"
                                control={<Radio />}
                                label=" for woman"
                            />
                            {/* <FormControlLabel value="256" control={<Radio />} label="256" />
              <FormControlLabel value="512" control={<Radio />} label="512" />
              <FormControlLabel value="1024" control={<Radio />} label="1024" /> */}
                            <FormControlLabel
                                value="all"
                                control={<Radio />}
                                label="All"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid>
                    <p color="black">Price $</p>
                    <Slider
                        min={200}
                        max={20000}
                        value={slider}
                        onChangeCommitted={handleFilterPrice}
                        onChange={handleSlider}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        style={{
                            color: "black",
                            height: "500px",
                        }}
                    />
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Sidebar;
