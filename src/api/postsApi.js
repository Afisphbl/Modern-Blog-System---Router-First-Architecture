const url = "http://localhost:3001";

export async function getPosts() {
  try {
    const res = await fetch(`${url}/posts`);
    if (!res.ok) throw new Error("Something went wrong");

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`Error : ${error}`);
    throw error;
  }
}
