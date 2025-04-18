const getDiscountedPrice = (fullAmount:number, discountPercent:number) => {
    if (typeof fullAmount !== 'number' || typeof discountPercent !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
  
    const discount = (discountPercent / 100) * fullAmount;
    const finalPrice = fullAmount - discount;
  
    return Number(finalPrice.toFixed(2)); 
  }


export default getDiscountedPrice