export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_KEG':
    const { name, brand, flavor, price, alcohol, pints, id } = action;
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
  default:
    return state;
  }
};