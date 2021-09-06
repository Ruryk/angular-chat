export interface IMessageParameters {
  id: number;
  photo: string;
  status: string;
  type: string;
  text: string;
  date: number;
  file?: {
    name: string;
    size: number;
    href: string;
    type: string;
  };
}
