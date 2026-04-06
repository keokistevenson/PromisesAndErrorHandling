"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSalesReport = exports.fetchProductReviews = exports.fetchProductCatalog = void 0;
const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 5001, name: "Laptop", price: 1200 },
                    { id: 5002, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
const fetchProductReviews = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.7) {
                resolve([
                    { reviewId: 1, productId, comment: "Great product!", rating: 5 },
                    { reviewId: 2, productId, comment: "Pretty decent", rating: 4 },
                ]);
            }
            else {
                reject(`Failed to fetch reviews for product ID: ${productId}`);
            }
        }, 1500);
    });
};
exports.fetchProductReviews = fetchProductReviews;
const fetchSalesReport = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({ totalSales: 50000, unitsSold: 120, averagePrice: 416.67 });
            }
            else {
                reject(`Failed to fetch sales report`);
            }
        }, 1000);
    });
};
exports.fetchSalesReport = fetchSalesReport;
