// NetworkBar — shared component for LV Athletics Network
// Drop into each site's layout.tsx

export function NetworkBar() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 500,
      height: '28px',
      background: '#0A0C08',
      borderBottom: '1px solid rgba(239,178,30,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.5rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'rgba(239,178,30,0.5)',
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
      }}>
        <span>LV Athletics Network</span>
        <span style={{ color: 'rgba(239,178,30,0.2)' }}>|</span>
        <a href="https://thelvas.com" style={{ color: 'rgba(239,178,30,0.7)', textDecoration: 'none', letterSpacing: '0.1em' }}>TheLVAs</a>
        <span style={{ color: 'rgba(239,178,30,0.2)' }}>·</span>
        <a href="https://thelvathletics.com" style={{ color: 'rgba(239,178,30,0.7)', textDecoration: 'none', letterSpacing: '0.1em' }}>TheLVAthletics</a>
        <span style={{ color: 'rgba(239,178,30,0.2)' }}>·</span>
        <a href="https://lvathleticsnation.com" style={{ color: 'rgba(239,178,30,0.7)', textDecoration: 'none', letterSpacing: '0.1em' }}>LVAthleticsNation</a>
      </div>
    </div>
  )
}
