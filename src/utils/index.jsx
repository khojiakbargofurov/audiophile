import axios from "axios";

const Prourl = "https://online-json-server-api.up.railway.app/project/665effa71d2cd3eb1142aac4"

export const customFetch = axios.create({
  baseURL: Prourl,
})

export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format((price / 100).toFixed(2));

  return dollarAmount;
};
