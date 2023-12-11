import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { results } from './data/data';
import { DetailsPage } from './pages/DetailsPage/DetailsPage';
import { HomePage } from './pages/HomePage/HomePage';
//aqui faremos a renderização condicional de telas no futuro

function App() {
    const [characters, setCharacters] = useState([]);
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [image, setImage] = useState('');
    const [orderParam, setOrderParam] = useState(''); //price, title ou id
    const [search, setSearch] = useState('');
    const [page, setPage] = useState('home');
    const [id, setId] = useState(0);

    const handleNameInput = (event) => setName(event.target.value);
    const handleSpecieInput = (event) => setSpecies(event.target.value);
    const handleImageInput = (event) => setImage(event.target.value);
    const handleOrderInput = (event) => setOrderParam(event.target.value);
    const handleSearchInput = (event) => setSearch(event.target.value);

    useEffect(() => {
        setCharacters(results);
    }, []);

    const changePage = (page, id) => {
        setPage(page);
        setId(id);
    };

    const renderPage = () => {
        switch (page) {
            case 'home':
                return (
                    <HomePage
                        characters={characters}
                        handlers={{
                            handleNameInput,
                            handleSpecieInput,
                            handleImageInput,
                            handleOrderInput,
                            handleSearchInput,
                        }}
                        states={{ name, species, image, orderParam, search }}
                        addCharacter={addCharacter}
                        removeCharacter={removeCharacter}
                        changePage={changePage}
                    />
                );
            case 'detailsPage':
                return <DetailsPage characters={characters} id={id} changePage={changePage} />;
            default:
                alert('Algo deu errado');
        }
    };

    const addCharacter = (event) => {
        event.preventDefault();
        const newCharacter = {
            name,
            species,
            image,
        };

        const newCharactersList = [...characters, newCharacter];
        setCharacters(newCharactersList);

        setName('');
        setSpecies('');
        setImage('');
    };

    const removeCharacter = (id) => {
        const filteredList = characters.filter((char) => {
            return char.id !== id;
        });

        setCharacters(filteredList);
    };

    return (
        <div className='App'>
            <GlobalStyle />
            {renderPage()}
        </div>
    );
}

export default App;
