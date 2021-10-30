import React, {Component} from 'react';


class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            responsible:'',
            description:'',
            priority: 'low'
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
        const {value, name } = e.target;
        this.setState({
            [name] :value
        })
        console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        alert('enviando');
    }
    render(){
        return(
            
            <div className="card">
            <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="form-group m-2">
                    <input type="text"
                    name="title"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder ="Title"
                     />
                </div> 
                <div className="form-group m-2">    
                     <input type="text"
                    name="responsable"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder ="Responsable"
                     />
                </div> 
                <div className="form-group m-2">      
                     <input type="text"
                    name="description"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder ="Description"
                     />
                </div>
                <div className="form-group m-2"> 
                <select name="priority"
                    onChange={this.handleInput}
                    className="form-select">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>     
                </div> 
                <div className="form-group m-2">
                    <input type="submit" value="Guardar" className="form-control btn-success" />

                </div>    
                
            </form>
            </div>
            

        )
    }

}

export default TodoForm;