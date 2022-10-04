import bagPicture from '../assets/images/Desktop/bagPicture.png';
import bootPicture from '../assets/images/Desktop/bootPicture.png';
import womanBagPicture from '../assets/images/Desktop/womanBagPicture.png';

export const createCartProducts = () => {
  return [
    {
      id: 'product-1',
      name: 'The Chelsea Boot',
      attributes: 'Black',
      quantity: 1,
      cost: 235,
      picture: bootPicture
    },
    {
      id: 'product-2',
      name: 'The Twill Snap Backpack',
      attributes: 'Reverse Denim + Brown leather',
      quantity: 1,
      cost: 65,
      picture: bagPicture
    },
    {
      id: 'product-3',
      name: 'The Twill Zip Tote',
      attributes: 'Reverse Denim + Black leather',
      quantity: 1,
      cost: 48,
      picture: womanBagPicture
    }
  ];
};
