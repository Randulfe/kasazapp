import React, { Component } from 'react';
import logo from './kasaz.svg';
import FlatList from './flats/flatList';
import CreateFlat from './flats/CreateFlat';
import PropTypes from 'prop-types';

function searchingFor(term, priceMin, priceMax,sizeMin, sizeMax, room, toilet){
    return function(x){
        let priceFlag = true;
        let sizeFlag = true;
        let termFlag = true;
        let roomFlag = true;
        let toiletFlag = true;
        termFlag= x.title.toLowerCase().includes(term.toLowerCase()) || !term;

        switch (isNaN(priceMax)){
            case true:
                switch (isNaN(priceMin)){
                    case true:
                            priceFlag = true;
                            break;
                    case false:
                        if(x.price>=priceMin){priceFlag = true}else{priceFlag = false}
                        break;
                }break;
            case false:
                switch (isNaN(priceMin)){
                    case true:
                        if(x.price<=priceMax){priceFlag = true}else{priceFlag = false}
                        break;
                    case false:
                        if(x.price>=priceMin && x.price<=priceMax){priceFlag = true}else{priceFlag = false}
                        break;
                    }break;

            default: priceFlag = true;
        }

        switch (isNaN(sizeMax)){
            case true:
                switch (isNaN(sizeMin)){
                    case true:
                            sizeFlag = true;
                            break;
                    case false:
                        if(x.sqm>=sizeMin){sizeFlag = true}else{sizeFlag = false}
                        break;
                }break;
            case false:
                switch (isNaN(sizeMin)){
                    case true:
                        if(x.sqm<=sizeMax){sizeFlag = true}else{sizeFlag = false}
                        break;
                    case false:
                        if(x.sqm>=sizeMin && x.sqm<=sizeMax){sizeFlag = true}else{sizeFlag = false}
                        break;
                    }break;

            default: sizeFlag = true;
        }

        (isNaN(room))? roomFlag=true : x.beds>=room ? roomFlag=true: roomFlag=false;
        (isNaN(toilet))? toiletFlag=true : x.toilets>=toilet ? toiletFlag=true: toiletFlag=false;

        return (priceFlag && termFlag && sizeFlag && roomFlag && toiletFlag) ? true : false;

  
    }
}

export class Header extends Component {
    state = {
        on:false
    }


    toggle = ()=>{
        this.setState({
            on: !this.state.on
        })
    }

    constructor(props){
        super(props);
            this.state={
                term:'',
                priceMin:NaN,
                priceMax: NaN,
                sizeMin:NaN,
                sizeMax: NaN,
                room: NaN,
                toilet: NaN
            }
            this.changeHandler=this.changeHandler.bind(this);
            this.changePriceMin=this.changePriceMin.bind(this);
            this.changePriceMax=this.changePriceMax.bind(this);
            this.changeSizeMin=this.changeSizeMin.bind(this);
            this.changeSizeMax=this.changeSizeMax.bind(this);
            this.rooms=this.rooms.bind(this);
            this.toilets=this.toilets.bind(this);
        }

    changeHandler(e){
        this.setState({term: e.target.value})
    }

    changePriceMin(e){
        this.setState({priceMin: e.target.valueAsNumber})
    }

    changePriceMax(e){
        this.setState({priceMax: e.target.valueAsNumber}); 
    }

    changeSizeMin(e){
        this.setState({sizeMin: e.target.valueAsNumber})
    }

    changeSizeMax(e){
        this.setState({sizeMax: e.target.valueAsNumber}); 
    }

    rooms(e){
        this.setState({room: parseInt(e.target.value.substr(1))});
    }

    toilets(e){
        this.setState({toilet: parseInt(e.target.value.substr(1))});
    }

    render() {

        return (
    <div>
    <nav className="navbar fixed-top navbar-light bg-light border-bottom" >
    <a className="navbar-brand" href="#">
        <img src={logo} width="100" className="d-inline-block align-top" alt=""/>
        
    </a>

    <form>
        <div className='row'>
        <input 
        type='text' className='form-control col'
        onChange={this.changeHandler}/><div className='col'><i className=" fas fa-search align-middle" style={{color:'#41af68 ',paddingTop:'8px'}}></i></div>
        </div>
    </form>
    
    <button type="button" className="btn btn-outline-success " style={{marginRight:'50px'}} onClick={this.toggle}>Filters</button>
    </nav>

    <div>
        {this.state.on &&
        
        <form >
        <div className='form-group col-6 offset-3 border rounded border-success' style={{marginTop:'100px', paddingBottom:'30px',paddingTop:'20px'}}>

        <label>Price</label>
            <div className='row'>
                <div className='col'>
                    <input
                    type='number'  min="0"
                    className='form-control' aria-describedby='MinPrice'
                    placeholder='Min Price' onChange={this.changePriceMin}/>
                </div>
                <div className='col'>
                    <input
                    type='number'  min="0"
                    className='form-control' aria-describedby='MaxPrice'
                    placeholder='Max Price' onChange={this.changePriceMax}/>
                </div>
            </div> 

            <label style={{marginTop:'20px'}}>Size</label>
            <div className='row'>
                <div className='col'>
                    <input
                    type='number'  min="0"
                    className='form-control' aria-describedby='MinSize'
                    placeholder='Min Size' onChange={this.changeSizeMin}/>
                </div>
                <div className='col'>
                    <input
                    type='number'  min="0"
                    className='form-control' aria-describedby='MaxSize'
                    placeholder='Max Size'onChange={this.changeSizeMax}/>
                </div>
            </div> 
            <div className='row' style={{marginTop:'20px'}}>
                <div className='col'>
                <label>Number of Rooms</label>
                </div>
                <div className='col'>
                <label>Number of Toilets</label>
                </div>
            </div>
            
            <div className='row'>
                <div className='col'>
                    <select className="form-control" onChange={this.rooms}>
                    <option>+1</option>
                    <option>+2</option>
                    <option>+3</option>
                    <option>+4</option>
                    <option>+5</option>
                    </select>
                </div>
                <div className='col'>
                <select className=" form-control" onChange={this.toilets}>
                    <option>+1</option>
                    <option>+2</option>
                    <option>+3</option>
                    <option>+4</option>
                    <option>+5</option>
                    </select> 
                </div>
            </div> 
        </div>
    </form>   
        }
    </div>

    <div className='col-6 offset-3' style={{marginTop:'80px'}}><CreateFlat/></div>
  
    <div className='col-6 offset-3' style={{marginTop:'50px',marginBottom:'100px'}}>
        <FlatList flats={ this.props.flats.filter(searchingFor(this.state.term, this.state.priceMin, this.state.priceMax,this.state.sizeMin, this.state.sizeMax, this.state.room,this.state.toilet))}/>
    </div>

    </div>
        )
    }
}

Header.propTyles = {
    flats: PropTypes.array.isRequired
}

export default Header;
