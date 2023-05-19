function purchaseBook(
  bookTitle,
  bookAuthor,
  bookPrice,
  discountPercentage,
  taxPercentage,
  stockAmount,
  purchasedAmount,
  creditTerm
) {
  // Calculations
  let remainingStock = stockAmount;
  let totalPrice = 0;

  const termPrices = Array.from({ length: creditTerm }, (_, index) => {
    if (remainingStock === 0 || index >= purchasedAmount) {
      return 0;
    }

    const discountAmount = bookPrice * (discountPercentage / 100);
    const priceAfterDiscount = bookPrice - discountAmount;
    const taxAmount = priceAfterDiscount * (taxPercentage / 100);
    const priceAfterTax = priceAfterDiscount + taxAmount;

    totalPrice += priceAfterTax;
    remainingStock--;

    return priceAfterTax;
  });

  // Displaying the result
  console.log('Book Title:', bookTitle);
  console.log('Book Author:', bookAuthor);
  console.log('Total Price:', totalPrice);
  console.log('Term Prices:', termPrices);
}

// Example usage
purchaseBook('The Great Gatsby', 'F. Scott Fitzgerald', 25.99, 10, 8, 5, 3, 6);
