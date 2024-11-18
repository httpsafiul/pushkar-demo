import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

const ProductCard = ({ title, description, price }) => (
    <Card sx={{ maxWidth: 300, margin: "auto" }}>
        <CardContent>
            <Typography variant="h6" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
                ${price}
            </Typography>
        </CardContent>
    </Card>
);

const HomeMain = () => {
    // Dummy product data
    const products = Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        title: `Product ${index + 1}`,
        description: "This is a description of the product.",
        price: (Math.random() * 100).toFixed(2),
    }));

    return (
        <div
            style={{ height: "calc(100vh - 4.3rem)", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", overflowY: "scroll", overflowX: "hidden" }}>
            <Box sx={{ padding: 3 }}>
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={2.4} key={product.id}>
                            <ProductCard
                                title={product.title}
                                description={product.description}
                                price={product.price}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default HomeMain;
