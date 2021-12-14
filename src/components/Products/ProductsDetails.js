import { Grid, Paper, makeStyles, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useProducts } from "../../contexts/ProductsContext";
import MySpinner from "../../shared/MySpinner";
import {
    ImageWithZoom,
    Slider,
    CarouselProvider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { grey, lightGreen } from "@material-ui/core/colors";
import "./ProductsDetails.css";
import MyLink from "../../shared/MyLink";

const useStyles = makeStyles((theme) => ({
    custom_container: {
        marginTop: "0",
        alignItems: "center",
    },
    paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.primary,
        textAlign: "left",
        backgroundColor: "honeydew",
        minHeight: "400px",
    },
}));

const ProductsDetails = () => {
    const { fetchOneProduct, productDetails, deleteProduct } = useProducts();
    const { id } = useParams();

    const navigate = useNavigate();
    useEffect(() => {
        fetchOneProduct(id);
    }, [id]);

    const handleRedirectAfterDelete = () => {
        deleteProduct(id);
        navigate("/");
    };
    const classes = useStyles();
    return (
        <Grid container>
            {productDetails ? (
                <Grid container className={classes.custom_container}>
                    <Grid item md={4}>
                        <CarouselProvider
                            naturalSlideWidth={2000}
                            naturalSlideHeight={2020}
                            totalSlides={3}
                        >
                            <Slider>
                                <Slide color="white" index={0}>
                                    <ImageWithZoom src={productDetails.image} />
                                </Slide>
                                <Slide index={1}>
                                    <ImageWithZoom
                                        src={productDetails.image1}
                                    />
                                </Slide>
                                <Slide index={2}>
                                    <ImageWithZoom
                                        src={productDetails.image2}
                                    />
                                </Slide>
                            </Slider>
                            <ButtonBack>Back</ButtonBack>
                            <ButtonNext>Next</ButtonNext>
                        </CarouselProvider>
                    </Grid>
                    <Grid item md={7}>
                        <Paper
                            elevation={8}
                            className={classes.paper}
                            style={{
                                backgroundColor: "#999ca4",
                                color: "black",
                                paddingLeft: "100px",
                                borderRadius: "0px",
                                position: "obsolote",
                                top: "100px",
                                marginLeft: "200px",
                            }}
                        >
                            <table>
                                <tbody>
                                    <br />
                                    <tr>
                                        <th>Title:</th>
                                        <td>{productDetails.title}</td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <th>Price:</th>
                                        <td>{productDetails.price} $</td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <th>Description:</th>
                                        <td>{productDetails.description}</td>
                                    </tr>
                                    {/* <br />
                                    {productDetails.salePrice ? (
                                        <tr>
                                            <th> Sale Price:</th>
                                            <td>{productDetails.salePrice}</td>
                                        </tr>
                                    ) : null}
                                    <br /> */}
                                    {/* <tr>
                                        <th> Author:</th>
                                        <td>{productDetails.author} </td>
                                    </tr> */}
                                    <br />
                                    <tr>
                                        <th> Count in Stock:</th>
                                        <td>{productDetails.countInStock}</td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <th> Category:</th>
                                        <td>{productDetails.category}</td>
                                    </tr>
                                    <br />
                                    {/* <tr>
                                        <th> Phone:</th>
                                        <td>{productDetails.phone}</td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </Paper>
                        <Button
                            onClick={() =>
                                handleRedirectAfterDelete(productDetails.id)
                            }
                            variant="contained"
                            style={{
                                backgroundColor: "black",
                                color: "white",
                                borderRadius: "0px",
                                marginLeft: "200px",
                            }}
                        >
                            Delete
                        </Button>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "black",
                                color: "white",
                                borderRadius: "0px",
                                marginLeft: "5px",
                            }}
                        >
                            <MyLink to={`/edit/${productDetails.id}`}>
                                Edit
                            </MyLink>
                        </Button>
                    </Grid>
                </Grid>
            ) : (
                <MySpinner />
            )}
        </Grid>
    );
};

export default ProductsDetails;
