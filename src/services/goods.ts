'use strict';

import { phones } from '../database/phones';

export const getAll = () => {
  const currentPageItems = phones;

  return currentPageItems.map((phone) => ({
    slug: phone.slug,
    name: phone.name,
    price: phone.price,
    discountPrice: phone.discountPrice,
    year: phone.year,
    screen: phone.specs.screen,
    memory: phone.specs.memory,
    ram: phone.specs.ram,
    image: phone.image,
  }));
};
