import endpoints from "./endpoints";
const baseUrl = "http://localhost:8081"

export const postDocument = async (collectionName, document) => {
  return await (await fetch(baseUrl + endpoints().postDocument, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ collectionName, document }),
  })).json();
};

export const getAllCollections = async () => {
  return await (await fetch(baseUrl + endpoints().getAllCollections)).json();
}