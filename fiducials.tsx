const width = 100
const height = 70
const fiducialX = (height - 4) / 2
const fiducialY = (width - 4) / 2
const fiduicialHole = "2"
const probeHole = "2.5"

export default () => (
  <board width={width} height={height}>
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

    <hole
      name="PROBE1"
      pcbY={height / 2 - 4}
      pcbX={0}
      diameter={probeHole}
    />
    <hole
      name="PROBE2"
      pcbY={0}
      pcbX={width / 2 - 4}
      diameter={probeHole}
    />
    <hole
      name="PROBE3"
      pcbY={-(height / 2 - 4)}
      pcbX={0}
      diameter={probeHole}
    />
    <hole
      name="PROBE4"
      pcbY={0}
      pcbX={-(width / 2 - 4)}
      diameter={probeHole}
    />
  </board>
)
