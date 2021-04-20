import React from 'react'
import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

const styles: object[] = [
	{
		elementType: 'geometry',
		stylers: [
			{
				color: '#0cfdd7'
			}
		]
	},
	{
		elementType: 'labels.icon',
		stylers: [
			{
				visibility: 'off'
			}
		]
	},
	{
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#212121'
			}
		]
	},
	{
		elementType: 'labels.text.stroke',
		stylers: [
			{
				color: '#0cfdd7'
			}
		]
	},
	{
		featureType: 'administrative',
		elementType: 'geometry',
		stylers: [
			{
				color: '#757575'
			}
		]
	},
	{
		featureType: 'administrative.country',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#212121'
			}
		]
	},
	{
		featureType: 'administrative.land_parcel',
		stylers: [
			{
				visibility: 'off'
			}
		]
	},
	{
		featureType: 'administrative.locality',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#212121'
			}
		]
	},
	{
		featureType: 'poi',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#212121'
			}
		]
	},
	{
		featureType: 'poi.park',
		elementType: 'geometry',
		stylers: [
			{
				color: '#181818'
			}
		]
	},
	{
		featureType: 'poi.park',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#212121'
			}
		]
	},
	{
		featureType: 'poi.park',
		elementType: 'labels.text.stroke',
		stylers: [
			{
				color: '#0cfdd7'
			}
		]
	},
	{
		featureType: 'road',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#2c2c2c'
			}
		]
	},
	{
		featureType: 'road',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#212121'
			}
		]
	},
	{
		featureType: 'road.arterial',
		elementType: 'geometry',
		stylers: [
			{
				color: '#1e1e1e'
			}
		]
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [
			{
				color: '#1e1e1e'
			}
		]
	},
	{
		featureType: 'road.highway.controlled_access',
		elementType: 'geometry',
		stylers: [
			{
				color: '#1e1e1e'
			}
		]
	},
	{
		featureType: 'road.local',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#212121'
			}
		]
	},
	{
		featureType: 'transit',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#1e1e1e'
			}
		]
	},
	{
		featureType: 'water',
		elementType: 'geometry',
		stylers: [
			{
				color: '#000000'
			}
		]
	},
	{
		featureType: 'water',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#000000'
			}
		]
	}
]

const gMapsApiKey: string = 'AIzaSyANr_3txW2d9EoNsRJjlJ4hyenEcHLSYr8'

interface MapsInterface {
	markerIsShowing?: boolean
}

const props = {
	googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${gMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`,
	loadingElement: <div style={{height: `100%`}} />,
	containerElement: <div style={{height: `100%`}} />,
	mapElement: <div style={{height: `100%`}} />
}

const MapsComponent: React.FC<MapsInterface> = compose(
	withProps(props),
	withScriptjs,
	withGoogleMap
)((props: MapsInterface) => (
	<GoogleMap defaultZoom={12} defaultCenter={{lat: 34.079425, lng: -118.134693}} defaultOptions={{styles}}>
		{props.markerIsShowing && (
			<Marker position={{lat: 34.079425, lng: -118.134693}} icon={require('../../static/marker.svg')} />
		)}
	</GoogleMap>
))

export default MapsComponent
