import { Grid, Paper, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { blueGrey } from "@material-ui/core/colors";
import { useProducts } from "../../contexts/ProductsContext";
import { BorderColor } from "@material-ui/icons";

const EditProduct = () => {
    const { productDetails, fetchOneProduct, editItem } = useProducts();

    const [form, setForm] = useState({
        title: "",
        image: "",
        image2: "",
        image3: "",
        price: 0,
        description: "",
        notes: "",
        category: "",
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchOneProduct(id);
    }, []);

    useEffect(() => {
        if (productDetails) {
            setForm({
                title: productDetails.title,
                image: productDetails.image,
                // image2: productDetails.image2,
                // image3: productDetails.image3,
                price: productDetails.price,
                description: productDetails.description,
                // notes: productDetails.notes,
                category: productDetails.category,
            });
        }
    }, [productDetails]);

    const handleChange = (e) => {
        const values = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(values);
    };

    const handleEdit = () => {
        editItem({ ...form, id });
        navigate("/");
    };
    return (
        productDetails && (
            <>
                <h1 align="center">Edit my product</h1>

                <Grid container className="main">
                    <Grid item md={5} style={{ borderRadius: "0px" }}>
                        <Paper className="paper">
                            <form action="">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    name="title"
                                    onChange={handleChange}
                                    value={form.title}
                                    style={{
                                        borderRadius: "0px",
                                        borderColor: "black",
                                    }}
                                />
                                <textarea
                                    type="text"
                                    placeholder="Description"
                                    name="description"
                                    onChange={handleChange}
                                    value={form.description}
                                    style={{
                                        borderRadius: "0px",
                                        borderColor: "black",
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Image"
                                    name="image"
                                    onChange={handleChange}
                                    value={form.image}
                                    style={{
                                        borderRadius: "0px",
                                        borderColor: "black",
                                    }}
                                />

                                <input
                                    type="text"
                                    placeholder="Price"
                                    name="price"
                                    onChange={handleChange}
                                    value={form.price}
                                    style={{
                                        borderRadius: "0px",
                                        borderColor: "black",
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="category"
                                    name="category"
                                    onChange={handleChange}
                                    value={form.category}
                                    style={{
                                        borderRadius: "0px",
                                        borderColor: "black",
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: blueGrey[500] }}
                                    className="btn-add"
                                    onClick={handleEdit}
                                    style={{
                                        color: "white",
                                        backgroundColor: "black",
                                        borderRadius: "0px",
                                    }}
                                >
                                    Save changes
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </>
        )
    );
};

export default EditProduct;
