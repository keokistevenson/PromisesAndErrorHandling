
console.log("index.ts is running");

import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator';

console.log("index.ts is running");
console.log(fetchProductCatalog);
console.log(fetchProductReviews);
console.log(fetchSalesReport);


fetchProductCatalog()
.then((catalog) => {
    console.log(" - Product Catalog - ");

    const collectPromises = [];
    for (const product of catalog) {
        console.log(`Product Number: ${product.id}  Name: ${product.name}  Price: ${product.price}`);

        collectPromises.push(fetchProductReviews(product.id));
    }

    return Promise.all(collectPromises);
})
.then((reviewGroup) => {
    for (const productReviews of reviewGroup) {
        for (const review of productReviews) {
            console.log(`\t Review Number: ${review.reviewId} Product Number: ${review.productId}  Comment: ${review.comment}  Rating: ${review.rating}`);
        }
    }

    return  fetchSalesReport()
})
.then((report) => {
    console.log(`Sales Report: ${report.totalSales}  Units Sold: ${report.unitsSold} Average Price: ${report.averagePrice}`);
})
.catch((error) => {
    console.error(error);
})
.finally(() => {
    console.log("All API calls have been attempted.");
});