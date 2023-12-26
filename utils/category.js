import axios from "axios";

export async function getAllCategory() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/categories`
    );
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Алдаа гарлаа", error);
  }
}
export async function getAllCategory_axios() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/categories`
    );
    console.log(response.data);
    return response.data; // Return the data
  } catch (error) {
    console.error(error);
    throw error; // Throw error for handling in the calling function if needed
  }
}
