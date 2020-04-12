import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as restaurantData from "../restaurants.json";
import "../app.css";

function MapComponent(){
    return (
        <Map center={[19.1725568,72.8530944]} zoom={12}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
            restaurantData.restaurants.map(res =>(
                <Marker
                    key={res.restaurant.R.res_id}
                    position={[
                    res.restaurant.location.latitude,
                    res.restaurant.location.longitude]}
                /> 
            ))
        }
        </Map>
    )
}

export default MapComponent;