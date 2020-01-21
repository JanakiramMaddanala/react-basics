import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/seach-box/search-box.component';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleOnChange(e) {
        const value = e.target.value;
        this.setState({ searchField: value });
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase()),
        );
        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox placeholder="search monsters" handleChange={(e) => this.handleOnChange(e)}/>
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
