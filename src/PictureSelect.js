import React from 'react';
class PictureSelect extends React.Component { 
    render() {
      let { pictures, value } = this.props; 
      console.log('pictures', pictures, value);     
      return (            
        <div className="PictureSelect">                
            {/* <button onClick={() => this.updateNumber(+1)}>Increase</button>                
            <button onClick={() => this.updateNumber(-1)}>Decrease</button>             */}
        </div>        
        );    
      }    

    updateNumber(toAdd) {        
        this.props.parent.setState(prevState => ({number: prevState.number + toAdd}));    
      }}
export default PictureSelect;