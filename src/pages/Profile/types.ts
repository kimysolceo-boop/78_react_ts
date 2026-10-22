export interface UserProfile {
  name: {
    first: string;
    last: string;
  };

  picture: {
    large: string;
  };

  gender: string;
  email: string;

  location: {
    country: string;
  };

  phone: string;
}