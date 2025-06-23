interface DeviceIcons {
  desctop: string
  mobile: string
};

export interface ProductType {
  icon: DeviceIcons
  title: string
  rating: number
  reviews: number
  isOfficial: boolean
  anySite: string
  description: string
  price: string
}