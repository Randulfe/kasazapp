import React, { Component } from 'react';

class CreateFlat extends Component {
    fileSelectedHandler = e =>{
        console.log(e.target.files[0]);
    }
    constructor(props){
        super(props);
            this.state={
                title:'',
                price:'',
                sqm:'',
                beds:'',
                toilets:'',
                photo_src: null
            }
            this.handleTitle=this.handleTitle.bind(this);
            this.handlePrice=this.handlePrice.bind(this);
            this.handleSqm=this.handleSqm.bind(this);
            this.handleBeds=this.handleBeds.bind(this);
            this.handleToilets=this.handleToilets.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
            this.fileSelectedHandler=this.fileSelectedHandler.bind(this);
        }

        handleTitle(e){this.setState({title:e.target.value})}

        handlePrice(e){this.setState({price:e.target.valueAsNumber.toString()})}
        handleSqm(e){this.setState({sqm:e.target.valueAsNumber.toString()})}
        handleBeds(e){this.setState({beds:e.target.valueAsNumber.toString()})}
        handleToilets(e){this.setState({toilets:e.target.valueAsNumber.toString()})}
        fileSelectedHandler(e){
            this.setState({photo_src: e.target.files[0]})
        }

        handleSubmit(e){
            e.preventDefault();
            const flat = {
                title: this.state.title,
                price: this.state.price,
                sqm: this.state.sqm,
                beds: this.state.beds,
                toilets: this.state.toilets
            };

            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(flat)
              }

              fetch('/api/flats', options);
              
         this.setState({ title: '', price: '', sqm: '', beds: '', toilets: '' });
         document.getElementById("formPost").reset();
         
        }

  render(){
    return (
      <form id='formPost' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input type='text'  min="0"
                    className='form-control' aria-describedby='Title'
                    placeholder='Title'
                    onChange={this.handleTitle}
                    required/>
            <div className='row' style={{marginTop:'20px'}}>
                <div className='col'>
                    <input type='number'  min="0"
                        className='form-control removeUpDown' aria-describedby='Price'
                        placeholder='Price'
                        onChange={this.handlePrice}
                        required/>
                </div>
                <div className='col'>
                    <input type='number'  min="0"
                        className='form-control removeUpDown' aria-describedby='Dimensions'
                        placeholder='Dimensions (sqm)'
                        onChange={this.handleSqm}
                        required/>
                </div>
                <div className='col'>
                    <input type='number'  min="0"
                        className='form-control' aria-describedby='Rooms'
                        placeholder='Rooms'
                        onChange={this.handleBeds}
                        required/>
                </div>
                <div className='col'>
                    <input type='number'  min="0"
                        className='form-control' aria-describedby='Toilets'
                        placeholder='Toilets'
                        onChange={this.handleToilets}
                        required/>
                </div>
            </div>

            <button type="submit" value="Submit" className="btn col" style={{marginTop:'20px', backgroundColor:'#1cc168', color:'#fff'}} >Add Flat</button>
          </div>
      </form>
    );
  }

}

export default CreateFlat;