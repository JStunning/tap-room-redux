export default (state = {}, action) => {
  switch (action.type) {
  case 'BUY_KEG':
    const { name, brand, flavor, price, alcohol, pints, id } = action;
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