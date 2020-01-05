import React, { Component } from 'react';
import Flat from './flat';
import PropTypes from 'prop-types';


export class flatList extends Component {
    render() {
        return this.props.flats.map((flat)=>(
        < Flat key={flat.id} flat={flat}/>
        ));
    }
}

flatList.propTyles = {
    flats: PropTypes.array.isRequired
}

export default flatList;