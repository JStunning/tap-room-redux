export const addKeg = (keg) => {
  const { name, brand, flavor, price, alcohol, pints, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    flavor: flavor,
    price: price,
    alcohol: alcohol,
    pints: pints,
    id: id
  }
}

export const buyPint = (keg) => {
  const { name, brand, flavor, price, alcohol, pints, id } = keg;
  return {
    type: 'BUY_PINT',
    name: name,
    brand: brand,
    flavor: flavor,
    price: price,
    alcohol: alcohol,
    pints: pints,
    id: id
  }
}

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

