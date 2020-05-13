export default (state = {}, action) => {
  const { name, brand, flavor, price, alcohol, pints, id } = action;
  switch (action.type) {
  case 'ADD_KEG':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        alcohol: alcohol,
        pints: pints,
        id: id
      }
    });
  case 'BUY_PINT':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        alcohol: alcohol,
        pints: pints - 1,
        id: id
      }
    });
  default:
    return state;
  }
};