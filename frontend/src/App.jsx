import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [food, setFood] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchRecipe = async () => {
    if (!food) return;

    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/recipes/${food}`
      );

      setRecipes(res.data.meals || []);
    } catch (err) {
      setError("❌ Failed to fetch recipes");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🍽️ Recipe Finder</h1>

      {/* SEARCH BOX */}
      <input
        type="text"
        placeholder="Search recipe..."
        value={food}
        onChange={(e) => setFood(e.target.value)}
        style={{ padding: "10px", width: "250px", marginRight: "10px" }}
      />

      <button onClick={searchRecipe} style={{ padding: "10px 20px" }}>
        Search
      </button>

      {/* LOADING */}
      {loading && <p>⏳ Loading recipes...</p>}

      {/* ERROR */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* RECIPES GRID */}
      <div className="grid">
        {recipes.map((meal) => (
          <div className="card" key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;