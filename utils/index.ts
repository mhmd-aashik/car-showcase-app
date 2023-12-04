export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "0e204f38a2msh5b87acd2a2a2a1dp1526eejsn7a8cafa54e93",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
