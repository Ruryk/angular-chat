export interface IChatCardParameters {
  id: string;
  data: IChatUserData;
}

export interface IChatUserData {
  firstName: string;
  lastName: string;
  photo: string;
  message: string;
  noChecked: number;
  time: number;
  online: boolean;
  status: string;
}
