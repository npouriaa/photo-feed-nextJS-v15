export type Photo = {
  id: string;
  description: string;
  alt_description: string;
  urls: {
    regular: string;
  };
  user: {
    username: string;
  };
};
