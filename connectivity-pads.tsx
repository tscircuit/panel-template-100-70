const width = 100
const height = 70
const connectivityPadRadius = 2.5

export default () => (
  <board width={width} height={height}>
    <smtpad
      name="PROBE1"
      pcbY={height / 2 - 4}
      pcbX={0}
      shape="circle"
      radius={connectivityPadRadius}
    />
    <smtpad
      name="PROBE2"
      pcbY={0}
      pcbX={width / 2 - 4}
      shape="circle"
      radius={connectivityPadRadius}
    />
    <smtpad
      name="PROBE3"
      pcbY={-(height / 2 - 4)}
      pcbX={0}
      shape="circle"
      radius={connectivityPadRadius}
    />
    <smtpad
      name="PROBE4"
      pcbY={0}
      pcbX={-(width / 2 - 4)}
      shape="circle"
      radius={connectivityPadRadius}
    />
  </board>
)
