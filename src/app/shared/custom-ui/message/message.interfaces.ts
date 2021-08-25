export interface IMessageParameters {
  type: string;
  text?: string;
  date: number;
  file?: {
    name: string;
    size: string;
  };
}
