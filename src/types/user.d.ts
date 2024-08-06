interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}
interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
interface IProductState {
  product: IProduct[];
}

interface IStateInitial {
  user: IUser[];
}
