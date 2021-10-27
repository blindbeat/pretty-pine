export default async function createReport(form) {
  const response = await fetch('/api/report', {
    method: 'POST',
    body: form
  })

  if (!response.ok) {
    // throw new Error(response.statusText)
    console.log(response.statusText);
  }

  return await response.json()
}