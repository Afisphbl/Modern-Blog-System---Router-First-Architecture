// const url = "http://localhost:3001";
const url = import.meta.env.VITE_BASE_URL;

export async function getPosts() {
  try {
    const res = await fetch(`${url}/posts`);
    if (!res.ok) throw new Error("Something went wrong");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error : ${error}`);
    throw error;
  }
}

export async function getPostById(postId) {
  try {
    const res = await fetch(`${url}/posts/${postId}`);
    if (!res.ok) throw new Error("Something went wrong");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error : ${error}`);
    throw error;
  }
}
