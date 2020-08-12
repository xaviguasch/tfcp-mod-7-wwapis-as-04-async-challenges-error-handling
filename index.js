document.getElementById('x').addEventListener('click', () => {
  const userApi = 'https://randomuser.me/apii'

  fetch(userApi)
    .then((response) => response.json())
    .then((json) => {
      console.log('promise chaining:', json.results[0].name.first)
    })
    .catch((err) => console.error(err))
})

document.getElementById('y').addEventListener('click', async () => {
  const userApi = 'https://randomuser.me/apii/'

  const response = await fetch(userApi)

  if (response.ok) {
    const json = await response.json()
    console.log('async/await:', json.results[0].name.first)
  } else {
    console.error(`Error: ${response.status}`)
  }
})
