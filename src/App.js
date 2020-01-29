import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'

class App extends React.Component {
  render () {
    const listArray = (cantidad) => {
      const newList = [];
      for (var i = 0; i < cantidad; i++) {
        newList.push(
          <li>
            <span className='fa fa-check pr-2'></span>
            {'Titulo del Libro: '+ this.props.libros[i]}
          </li>
        )
      }
      return newList;
    };

    return (
      <div className="App" style={{textAlign: 'center'}}>
        <h2>Lista de Libros | React JS</h2>
        <ul className='text-primary' style={{listStyleType: 'none'}}>
          {listArray(this.props.cantidad)}
        </ul>
      </div>
    );
  }
}

export default App;
