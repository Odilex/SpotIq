export interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
  }
  
  export interface Booking {
    id: string;
    userId: string;
    serviceType: 'hotel' | 'tour' | 'transport';
    status: 'pending' | 'confirmed' | 'cancelled';
    dateCreated: Date;
    dateBooked: Date;
    price: number;
  }
  
  export interface TravelService {
    id: string;
    name: string;
    description: string;
    location: string;
    price: number;
    images: string[];
    category: string;
    rating: number;
    reviews: Review[];
  }
  
  export interface Review {
    id: string;
    userId: string;
    rating: number;
    comment: string;
    dateCreated: Date;
  }