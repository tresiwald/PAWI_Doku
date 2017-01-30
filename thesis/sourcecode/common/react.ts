/** (1) */
interface ComponentProps{
    name?: string,
    onSave: Function
}

/** (2) */
interface ComponentState{
    name: string
}

/** (3) */
class Component extends React.Component<ComponentProps,ComponentState>{
    ...
    onTextFieldUpdate = ...
    ...
    render(){
        return(
            <TextField onChange={this.onTextFieldUpdate} value={this.state.name}   
        )
        
    }
}

/** (4) */
... <Component name={'Max'} onSave={this.handleSave.bind(this)} />...
