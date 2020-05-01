export const addKeg = (keg) => {
  const { name, brand, flavor, price, alcohol, pints, id } = keg;
  return {
    type: 'ADD_TICKET',
    name: name,
    brand: brand,
    flavor: flavor,
    price: price,
    alcohol: alcohol,
    pints: pints,
    id: id
  }
}