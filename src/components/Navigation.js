import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
            <a href="./" className="text-white"> {this.props.titulo} </a>
            <span className="badge bg-pill">{this.props.contador}</span>
            </nav>
        );
    }

}

export default Navigation;