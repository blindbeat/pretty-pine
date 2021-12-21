import apiURL from "./apiURL"

const reportsURL = `${apiURL}/reports`
console.log(reportsURL);

export async function postReport(form) {
  const formData = new FormData()
  for (const entry in form) {
    if (form[entry] === '' || form[entry] === null) continue
    formData.append(entry, form[entry])
  }

  const response = await fetch(reportsURL, {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.status
}

export async function fetchManyReports() {
  const response = await fetch(reportsURL);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export async function fetchReport(id) {
  const response = await fetch(`${reportsURL}/${id}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export async function deleteReport(id) {
  const response = await fetch(new URL('id', reportsURL), {
    method: 'DELETE'
  })

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.status;
}