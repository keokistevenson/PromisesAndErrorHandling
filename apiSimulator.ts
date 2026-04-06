export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};

export const fetchProductReviews = (productId: number): Promise<{ reviewId: number; productId: number; comment: string; rating: number}[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.7) {
        resolve([
            { reviewId: 1, productId, comment: "Great product!", rating: 5 },
            { reviewId: 2, productId, comment: "Pretty decent", rating: 4 },
        ]);
        } else {
        reject(`Failed to fetch reviews for product ID: ${productId}`);
        }
    }, 1500);
    });
};


export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number; }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve({totalSales: 50_000, unitsSold: 120, averagePrice: 416.67});
        } else {
        reject(`Failed to fetch sales report`);
        }
    }, 1000);
    });
};