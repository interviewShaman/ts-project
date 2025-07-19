import axios from "axios";

async function fetchCountryData(
  c1: string,
  c2: string,
  c3: string
): Promise<void> {
  try {
    const responses = await Promise.all([
      axios(`https://restcountries.com/v2/name/${c1}`),
      axios(`https://restcountries.com/v2/name/${c2}`),
      axios(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(
      "Fetched country data:",
      responses.map((res) => res.data)
    );
  } catch (error) {
    console.error("Failed to fetch one or more countries:", error);
  }
}

fetchCountryData("Norway", "Brazil", "Sri Lanka");
