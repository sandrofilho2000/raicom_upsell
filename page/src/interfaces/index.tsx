import { JSX } from "react";

export interface iButton {
  text?: string;
  icon?: JSX.Element;
  classes?: string;
  callback?: (e: any) => void;
}

export interface iProduct {
  id: number;
  name: string;
  image: string;
  qtn: number;
  discount: number;
  price: number;
}

export interface iTitle {
  full_title: string;
  highlight?: string
}

export interface iGift extends iProduct { }


export interface iVariant {
  name: string,
  id: number
}

export interface iPage {
  products: iProduct[];
  gifts: iGift[];
  countdown_minutes: number;
  chances_of_winning: number;
  copy_title: iTitle;
  copy_text: string;
  gifts_title: iTitle;
  jackpot_title: iTitle;
  products_table_title: iTitle;
  variant_list: iVariant[]
};

