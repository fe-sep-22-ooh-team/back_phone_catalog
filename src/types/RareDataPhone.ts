interface About {
  header: string;
  description: string[];
}

interface Specs {
  screen: string,
  resolution: string,
  processor: string,
  ram: string,
  memory: string,
  camera: string,
  zoom: string,
  cell: string[],
}

export interface RarePhone {
  slug: string,
  namespaceId: string,
  name: string,
  capacityAvailable: string[],
  price: string,
  discountPrice: string,
  colorsAvailable: string[],
  color: string,
  year: string,
  image: string,
  additionalImages: string[],
  about: About[],
  specs: Specs,
}
