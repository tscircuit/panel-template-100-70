const fiducialX = (70 - 4) / 2
const fiducialY = (100 - 4) / 2
const fiduicialHole = "2"

export default () => (
  <board width="100mm" height="70mm">
    <hole
      name="FID1"
      pcbY={-fiducialX}
      pcbX={-fiducialY}
      diameter={fiduicialHole}
    />
    <hole
      name="FID2"
      pcbY={fiducialX}
      pcbX={-fiducialY}
      diameter={fiduicialHole}
    />
    <hole
      name="FID3"
      pcbY={-fiducialX}
      pcbX={fiducialY}
      diameter={fiduicialHole}
    />
    <hole
      name="FID4"
      pcbY={fiducialX}
      pcbX={fiducialY}
      diameter={fiduicialHole}
    />
  </board>
)
