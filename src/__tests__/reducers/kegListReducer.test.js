import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  
  let action;
  const kegData = {
    name: 'Keg Name',
    brand: 'Keg Brand',
    flavor: 'Keg Flavor',
    price: 'Keg Price',
    alcohol: 'Keg Alcohol',
    pints: 100,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, flavor, price, alcohol, pints, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      alcohol: alcohol,
      pints: pints,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        alcohol: alcohol,
        pints: pints,
        id: id
      }
    });
  });
});