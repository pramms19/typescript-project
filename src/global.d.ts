interface Product{
    id: number;
    images:string;
    title:string;
    price:string;
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
    id:string;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
}

