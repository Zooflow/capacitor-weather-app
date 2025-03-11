export async function GET() {
    const API_KEY = import.meta.env.PUBLIC_WEATHER_API_KEY;
    const lat = -38.7359; // Latitud de Temuco
    const lon = -72.5904; // Longitud de Temuco
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al obtener la calidad del aire");
      const data = await response.json();
  
      return new Response(JSON.stringify(data), {
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0"
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          "Cache-Control": "no-store, max-age=0"
        },
      });
    }
  }