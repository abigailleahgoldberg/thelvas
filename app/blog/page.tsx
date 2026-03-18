import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Hot Takes — The LV A\'s',
  description: 'Hot takes, game recaps, and fan culture for Las Vegas Athletics fans.',
  alternates: { canonical: 'https://thelvas.com/blog' },
}
const POSTS = [
  { slug: 'best-atmosphere', title: 'Las Vegas Will Have the Best Baseball Atmosphere in America by 2030', date: 'March 2026', tag: 'HOT TAKE' },
  { slug: 'moneyball-to-vegas', title: 'From Moneyball to the Mojave — The Full A\'s Story', date: 'March 2026', tag: 'HISTORY' },
  { slug: 'stadium-tracker', title: 'Stadium Construction Tracker — Everything We Know', date: 'March 2026', tag: 'STADIUM' },
  { slug: 'oakland-to-vegas', title: 'Oakland to Vegas: Processing the Grief and Finding the Energy', date: 'March 2026', tag: 'FAN CULTURE' },
  { slug: 'best-bars-vegas', title: 'Best Places to Watch the A\'s in Las Vegas', date: 'March 2026', tag: 'GUIDE' },
]
const C = { dark: '#050805', green: '#003831', gold: '#EFB21E', bone: '#F5F0E8', concrete: '#1A1C19', red: '#CC2200' }
export default function BlogPage() {
  return (
    <div style={{ background: C.dark, minHeight: '100vh' }}>
      <div style={{ background: `linear-gradient(165deg, ${C.green} 0%, #001A17 60%, ${C.dark} 100%)`, padding: '8rem 3rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', color: C.gold, textTransform: 'uppercase', marginBottom: '1rem' }}>Hot Takes Archive</div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 7rem)', color: C.bone, lineHeight: 0.9 }}>THE TAKES</h1>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {POSTS.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(239,178,30,0.12)', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <span style={{ background: C.red, color: '#fff', fontFamily: "'Space Mono', monospace", fontSize: '0.45rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.25rem 0.6rem', whiteSpace: 'nowrap', marginTop: '0.25rem' }}>{post.tag}</span>
                <div>
                  <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: C.bone, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>{post.title}</h2>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', color: 'rgba(245,240,232,0.3)', letterSpacing: '0.1em' }}>{post.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
