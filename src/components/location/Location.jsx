import { Container } from "../../utils";
import React from 'react'

 const Location = () => {
  return (
<Container>
<div class="map-wrapper">
            <iframe id="map" src="https://maps.google.com/maps?q=Moscow%20Dates%10Products&amp;t=&amp;z=30&amp;output=embed" width="100%" height="250" allowfullscreen="" frameborder="0"></iframe>
           </div>
</Container>
  )
}
export default Location