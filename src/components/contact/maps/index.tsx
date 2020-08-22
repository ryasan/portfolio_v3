import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

import styles from './maps.styles'
import { gMapsApiKey } from '../../../config'

interface Props {
  markerIsShowing?: boolean
}

const MapsComponent: React.FC<Props> = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${gMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props: Props) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 34.079425, lng: -118.134693 }}
    defaultOptions={{ styles }}
  >
    {props.markerIsShowing && (
      <Marker position={{ lat: 34.079425, lng: -118.134693 }} />
    )}
  </GoogleMap>
))

export default MapsComponent
