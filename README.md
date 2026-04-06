This represents an e-commerce dashboard that fetches data from various APIs, including a product catalog, user reviews, and a sales report. Each API call could potentially fail due to network issues, incorrect endpoints, or data inconsistencies. To build a stable and user-friendly application, I will manage these scenarios with proper error handling.


# Critical Thinking Questions
## Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?

because each request can fail for a different reason and at a different point in the process. it easier to identify which API call failed and why. Otherwise, it can be harder to tell where the failure happened.

## How does using custom error classes improve debugging and error identification?

Custom error classes improve debugging because they  make it easier to distingiush between different kinds of problems, such as network failures and data related issues.

## When might a retry mechanism be more effective than an immediate failure response?
A retry mechanism is more effective when failures are temporary rather than permanent such as a brief network issue, a timeout, or a service that is temporarily unavailable.