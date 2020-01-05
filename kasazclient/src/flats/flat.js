import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class flat extends Component {
      
    render() {
        return (
            <div className='card shadow' style={{marginTop:'20px'}}>
                {this.props.flat.photo_src && <img className="card-img-top" src={"http://localhost:4000/api/flats/image/"+this.props.flat.id}  alt="flat"></img> }
                
                <div className='card-header text-center'>
                    <p style={{marginBottom:'0', fontWeight: 'bold'}}>{this.props.flat.title}</p>
                </div>

                <div className= 'card-body'>
                    <div className='card-text text-center'>
                        <p>{this.props.flat.price} €</p>
                    </div>

                    <div className='row'>
                    <div className='col-6 card-text text-center'>
                        <p>{this.props.flat.sqm} m<sup>2</sup></p>
                    </div>
                    <div className='col-6 card-text text-center'>
                        <p>{this.props.flat.price/this.props.flat.sqm} €/m<sup>2</sup></p>
                    </div>
                    </div>

                    <div className='row'>
                    <div className='col-6 card-text text-center'>
                        <p><i className="fas fa-bed"></i> {this.props.flat.beds} bedrooms</p>
                    </div>
                    <div className='col-6 card-text text-center'>
                        <p><i className="fas fa-shower"></i> {this.props.flat.toilets} toilets</p>
                    </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

flat.propTyles = {
    flat: PropTypes.object.isRequired
}

export default flat;
