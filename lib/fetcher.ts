export default async function fetcher(url: string, data = undefined) {
  const res = await fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status > 399 || res.status < 200) {
    console.error("Bad Request");
  }
  return res.json();
}
