export async function GET() {
    const API_KEY = import.meta.env.PUBLIC_WEATHER_API_KEY;
    const city = "Temuco";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al obtener el clima");
      const data = await response.json();
  
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store, max-age=0", },
      });
    }
  }
  