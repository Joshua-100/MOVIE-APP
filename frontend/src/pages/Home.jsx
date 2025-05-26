import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2019"},
        {id: 2, title: "John Cage", release_date: "2015"},
        {id: 3, title: "Rango", release_date: "2012"},
        {id: 4, title: "Shangchi", release_date: "2021"}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}                
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => ( movie.title.toLowerCase().includes(searchQuery) &&
                    <MovieCard movie={movie} key={movie.id}/>                    
                ))}
            </div>
        </div>
    );

}

export default Home;