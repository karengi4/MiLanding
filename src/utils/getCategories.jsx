 export async function getCategories() {
    const response = await fetch('curl "https://api.mockaroo.com/api/ab051910?count=6&key=6b6dc2e0" > "categoriesMiKapital.json"')
    const data = await response.json()
    return data.map(item => item.name);
}