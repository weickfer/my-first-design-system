import { colors } from '@weickfer/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([token, color]) => (
    <div key={token} style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
        }}
      >
        <strong>${token}</strong>
        <span>{color}</span>
      </div>
    </div>
  ))
}
