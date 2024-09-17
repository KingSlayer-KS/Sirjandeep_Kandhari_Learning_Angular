export interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    inStock?: boolean;  
    category: string;
  }