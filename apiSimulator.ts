
// Custom Error Classes
class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}

// API Functions
export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        const data = [
          { id: 5001, name: "Laptop", price: 1200 },
          { id: 5002, name: "Headphones", price: 200 },
        ];

        // DataError check
        if (!data[0].name) {
          reject(new DataError("Missing product name"));
        } else {
          resolve(data);
        }

      } else {
        reject(new NetworkError("Failed to fetch product catalog"));
      }
    }, 1000);
  });
};


export const fetchProductReviews = (productId: number): Promise<{ reviewId: number; productId: number; comment: string; rating: number }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        const reviews = [
          { reviewId: 1, productId, comment: "Great product!", rating: 5 },
          { reviewId: 2, productId, comment: "Pretty decent", rating: 4 },
        ];

        // DataError check
        if (!reviews[0].comment) {
          reject(new DataError(`Missing review comment for product ${productId}`));
        } else {
          resolve(reviews);
        }

      } else {
        reject(new NetworkError(`Failed to fetch reviews for product ID: ${productId}`));
      }
    }, 1500);
  });
};

export const fetchSalesReport = (): Promise<{totalSales: number; unitsSold: number; averagePrice: number}> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        const report = {
          totalSales: 50000,
          unitsSold: 120,
          averagePrice: 416.67,
        };

        // DataError check
        if (!report.totalSales) {
          reject(new DataError("Invalid sales data"));
        } else {
          resolve(report);
        }

      } else {
        reject(new NetworkError("Failed to fetch sales report"));
      }
    }, 1000);
  });
};