import '../styles/tokens-grid.css'

type TokensGridProps = {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens: _tokens, hasRemValue = false }: TokensGridProps) {
  const tokens = Object.entries(_tokens).map(([token, value]) => ({
    value,
    token,
    ...(hasRemValue && { pixels: Number(value.replace('rem', '')) * 16 }),
  }))

  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {
          tokens.map(({ token, value, pixels }) => (
            <tr key={token}>
              <td>{token}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{pixels}px</td>
              )}
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}