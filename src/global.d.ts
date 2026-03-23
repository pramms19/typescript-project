interface Product{
    id: number;
    images:string;
    thumbnail: string;
    title:string;
    price:string;
    description: string;
    brand: string;
    discountPercentage: string;
    category:string;
}

interface NavItem {
  id: number;
  name: string;
  to: string;
}

interface ProductCardProps{
    product:Product
 }

interface ProductResponse {
    products: Product[];
}

interface User {
  _id:string;
  avatar: {
    url: string;
    lo;calPath:string
  }
  username: string;
  email: string;
  role: string;
  phoneNumber: string;
}

interface UserResponse {
    users: User[];
}


