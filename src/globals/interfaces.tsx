// interfaces
export interface AuthProps {
  setIsUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

// types

export type TypeFoodLog  = {
  id: number;
  title: string;
  itemName: string;
  calories: string;
}

export type FormChangeEvent = { 
  event: React.ChangeEvent<HTMLIonInputElement>;
}
