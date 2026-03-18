'use client'

import { useState, useEffect } from 'react'

const C = {
  dark: '#050805',
  green: '#003831',
  forest: '#1B5E20',
  gold: '#EFB21E',
  goldHot: '#FFD700',
  amber: '#F5A623',
  bone: '#F5F0E8',
  concrete: '#1A1C19',
  red: '#CC2200',
}

const TARGET = new Date('2028-04-01T19:05:00-07:00').getTime()

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number }

const TAKES = [
  { label: 'HOT TAKE', text: 'Vegas will have the best baseball atmosphere in America by 2030', link: '/blog/best-atmosphere' },
  { label: 'HISTORY', text: 'From Moneyball to the Mojave — the full A\'s story', link: '/blog/moneyball-to-vegas' },
  { label: 'STADIUM', text: '$1.75B stadium on the Strip is the most important ballpark since Camden Yards', link: '/blog/stadium-tracker' },
  { label: 'FAN CULTURE', text: 'Oakland grief is real. Vegas energy is real. Both can be true.', link: '/blog/oakland-to-vegas' },
  { label: 'VALUE', text: 'A\'s games will be the best bang for your buck on the Las Vegas Strip', link: '/vegas-comparison' },
]

const STATS = [
  { num: '4', label: 'World Series Titles' },
  { num: '2028', label: 'Vegas Ballpark Opens' },
  { num: '$1.75B', label: 'New Stadium Value' },
  { num: '56', label: 'Years Of A\'s Baseball' },
]

const TICKER_ITEMS = [
  'STADIUM CONSTRUCTION ON SCHEDULE',
  '2028 FIRST PITCH COUNTDOWN',
  'TROPICANA AVE SITE — ALLEGIANT ADJACENT',
  '30,000 SEAT PURPOSE-BUILT BALLPARK',
  'NIGHT GAMES ON THE STRIP',
  'THE A\'S ARE OURS NOW VEGAS',
  'GREEN AND GOLD FOREVER',
  'SEASON TICKETS AVAILABLE NOW',
]

const FEATURES = [
  {
    emoji: '🎯',
    title: 'Lock of the Week',
    subtitle: 'Parlay Builder',
    body: 'Exclusive Same Game Parlay picks. Bold, confident, crunched from the numbers. The best action on the Strip.',
    link: '/parlay-builder',
    cta: 'Get Today\'s Lock',
  },
  {
    emoji: '📊',
    title: 'Accountability',
    subtitle: 'Rate My Take Tracker',
    body: 'We don\'t just talk. We track. Every bold prediction with a win/loss record. How hot are our takes really?',
    link: '/prediction-tracker',
    cta: 'Check Our Record',
  },
  {
    emoji: '💵',
    title: 'Value Check',
    subtitle: 'Athletics vs Knights/Raiders',
    body: 'Why Athletics games are the absolute best bang for your buck on the Las Vegas Strip. Ticket price comparisons.',
    link: '/vegas-comparison',
    cta: 'View Comparison',
  },
  {
    emoji: '🏟️',
    title: 'Stadium',
    subtitle: 'Construction Tracker',
    body: 'Monthly updates on the $1.75B construction project at the heart of the Strip. 2028 is coming.',
    link: '/blog/stadium-tracker',
    cta: 'Track The Build',
  },
  {
    emoji: '📜',
    title: 'History',
    subtitle: 'From Moneyball to Vegas',
    body: 'A deep dive into the A\'s franchise history, from Philadelphia to the newest chapter in Las Vegas.',
    link: '/blog/moneyball-to-vegas',
    cta: 'Read The History',
  },
  {
    emoji: '🍺',
    title: 'Fan Guide',
    subtitle: 'Best Places to Watch',
    body: 'Our curated list of the best sports bars and sportsbooks in Vegas to catch every Athletics game.',
    link: '/blog/best-bars-vegas',
    cta: 'Find Your Bar',
  },
]

export default function Home() {
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [activeTake, setActiveTake] = useState(0)

  useEffect(() => {
    setMounted(true)
    const tick = () => {
      const diff = TARGET - Date.now()
      if (diff <= 0) return setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  // Rotate hero take every 5s
  useEffect(() => {
    const id = setInterval(() => setActiveTake(n => (n + 1) % TAKES.length), 5000)
    return () => clearInterval(id)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div style={{ background: C.dark, minHeight: '100vh' }}>
      {/* ============ NAV ============ */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: 'linear-gradient(to bottom, rgba(5,8,5,0.97), transparent)',
        backdropFilter: 'blur(6px)',
        padding: '1.2rem 2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.9rem',
          color: C.gold,
          textDecoration: 'none',
          letterSpacing: '0.05em',
          textShadow: `0 0 24px rgba(239,178,30,0.5)`,
        }}>
          The LV A&apos;s
        </a>
        <div className="hide-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {[
            { label: 'Hot Takes', href: '/blog' },
            { label: 'Parlay Builder', href: '/parlay-builder' },
            { label: 'Predictions', href: '/prediction-tracker' },
            { label: 'Vegas Value', href: '/vegas-comparison' },
          ].map(item => (
            <a key={item.label} href={item.href} style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.6)',
              textDecoration: 'none',
            }}>
              {item.label}
            </a>
          ))}
          <a href="/blog" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            background: C.gold,
            color: C.dark,
            padding: '0.5rem 1.2rem',
            textDecoration: 'none',
          }}>
            Read The Takes
          </a>
        </div>
        <button
          onClick={() => setMobileNav(!mobileNav)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: C.gold, fontSize: '1.5rem' }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >☰</button>
      </nav>

      {/* ============ TICKER ============ */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
        height: '28px',
        background: C.green,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        borderBottom: `1px solid rgba(239,178,30,0.25)`,
      }}>
        <div style={{ overflow: 'hidden', flex: 1 }}>
          <div className="ticker-track" style={{ display: 'flex', gap: '0' }}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.55rem',
                letterSpacing: '0.15em',
                color: C.gold,
                textTransform: 'uppercase',
                padding: '0 3rem',
                whiteSpace: 'nowrap',
              }}>
                ⚾ {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ============ HERO ============ */}
      <section style={{
        minHeight: '100vh',
        paddingTop: '100px',
        padding: '100px 3rem 0',
        background: `linear-gradient(165deg, ${C.green} 0%, #001A17 40%, ${C.dark} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Stars */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {[...Array(55)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: i % 7 === 0 ? '2px' : '1px',
              height: i % 7 === 0 ? '2px' : '1px',
              background: `rgba(239,178,30,${0.3 + (i % 4) * 0.15})`,
              borderRadius: '50%',
              left: `${(i * 18.3) % 100}%`,
              top: `${(i * 12.7) % 65}%`,
              animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.22) % 2.5}s`,
            }} />
          ))}
        </div>

        {/* Ghost A */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'min(80vw, 860px)',
          color: 'rgba(200,170,90,0.022)',
          lineHeight: 1,
          userSelect: 'none',
          right: '-8%',
          top: '50%',
          transform: 'translateY(-50%)',
          letterSpacing: '-0.05em',
        }}>
          A
        </div>

        {/* Vegas Strip skyline SVG */}
        <svg aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: '160px', opacity: 0.07, pointerEvents: 'none' }} viewBox="0 0 1440 160" preserveAspectRatio="none">
          {/* Skyline buildings */}
          <rect x="0" y="80" width="40" height="80" fill={C.gold}/>
          <rect x="45" y="60" width="30" height="100" fill={C.gold}/>
          <rect x="80" y="40" width="50" height="120" fill={C.gold}/>
          <rect x="135" y="70" width="35" height="90" fill={C.gold}/>
          <rect x="175" y="50" width="45" height="110" fill={C.gold}/>
          <rect x="225" y="30" width="60" height="130" fill={C.gold}/>
          <rect x="290" y="55" width="40" height="105" fill={C.gold}/>
          <rect x="335" y="20" width="70" height="140" fill={C.gold}/>
          {/* Center: Allegiant Stadium shape in Athletics green */}
          <rect x="600" y="60" width="240" height="100" rx="8" fill={C.green} opacity="1.5"/>
          <ellipse cx="720" cy="60" rx="120" ry="30" fill={C.green} opacity="1.5"/>
          <rect x="680" y="45" width="80" height="15" rx="3" fill={C.gold} opacity="0.8"/>
          {/* Right side buildings */}
          <rect x="900" y="35" width="65" height="125" fill={C.gold}/>
          <rect x="970" y="55" width="45" height="105" fill={C.gold}/>
          <rect x="1020" y="25" width="75" height="135" fill={C.gold}/>
          <rect x="1100" y="45" width="50" height="115" fill={C.gold}/>
          <rect x="1155" y="65" width="40" height="95" fill={C.gold}/>
          <rect x="1200" y="35" width="55" height="125" fill={C.gold}/>
          <rect x="1260" y="55" width="45" height="105" fill={C.gold}/>
          <rect x="1310" y="70" width="60" height="90" fill={C.gold}/>
          <rect x="1375" y="50" width="65" height="110" fill={C.gold}/>
        </svg>

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px', paddingBottom: '8rem' }}>
            {/* Label */}
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              color: C.gold,
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <span style={{ width: '2rem', height: '1px', background: C.gold, display: 'inline-block' }} />
              Las Vegas Athletics Fan Site
            </div>

            {/* Main headline */}
            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(4rem, 10vw, 9rem)',
              lineHeight: 0.88,
              color: C.bone,
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em',
            }}>
              THE A&apos;S<br />
              <span style={{ color: C.gold, WebkitTextStroke: `2px ${C.gold}` }}>ARE OURS</span><br />
              NOW, VEGAS.
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '480px',
            }}>
              Hot takes, game recaps, and fan culture for Las Vegas Athletics fans. No mercy. No filter. Just baseball.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <a href="/blog" style={{
                background: C.gold,
                color: C.dark,
                fontFamily: "'Oswald', sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '1rem 2rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                animation: 'pulse-gold 2.5s ease-in-out infinite',
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="6" width="14" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M5 6V4a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5"/></svg>
                Read The Takes
              </a>
              <a href="https://www.mlb.com/athletics/tickets" target="_blank" rel="noopener noreferrer" style={{
                background: 'transparent',
                color: C.gold,
                fontFamily: "'Oswald', sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '1rem 2rem',
                textDecoration: 'none',
                border: `1px solid rgba(239,178,30,0.4)`,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                🎟️ Get Tickets
              </a>
            </div>

            {/* Countdown */}
            <div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: 'rgba(245,240,232,0.35)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                First Pitch — Las Vegas Ballpark
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
                {mounted && [
                  { val: time.days, label: 'Days' },
                  { val: time.hours, label: 'Hrs' },
                  { val: time.minutes, label: 'Min' },
                  { val: time.seconds, label: 'Sec' },
                ].map((item, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                      color: C.gold,
                      lineHeight: 1,
                      minWidth: '3rem',
                    }}>
                      {i === 3 ? pad(item.val) : item.val}
                    </div>
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.45rem',
                      letterSpacing: '0.15em',
                      color: 'rgba(245,240,232,0.3)',
                      textTransform: 'uppercase',
                      marginTop: '0.25rem',
                    }}>
                      {item.label}
                    </div>
                  </div>
                ))}
                {!mounted && <div style={{ height: '4rem' }} />}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STAT BAR ============ */}
      <section style={{
        background: C.green,
        padding: '3.5rem 3rem',
        borderTop: `2px solid rgba(239,178,30,0.3)`,
        borderBottom: `2px solid rgba(239,178,30,0.15)`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
          {STATS.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                color: C.gold,
                lineHeight: 1,
              }}>
                {stat.num}
              </div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                color: 'rgba(245,240,232,0.5)',
                textTransform: 'uppercase',
                marginTop: '0.4rem',
                fontWeight: 600,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ STADIUM STATUS BAR ============ */}
      <section style={{ background: C.concrete, padding: '4rem 3rem', borderBottom: `1px solid rgba(239,178,30,0.1)` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', color: C.gold, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Construction Status</div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', fontWeight: 700, color: C.bone, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Allegiant Stadium District — Under Construction
              </h2>
            </div>
            <a href="/blog/stadium-tracker" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.gold, textDecoration: 'none', border: `1px solid rgba(239,178,30,0.3)`, padding: '0.6rem 1.2rem' }}>
              Full Update →
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {[
              { label: 'Status', value: 'Under Construction', color: C.amber },
              { label: 'Location', value: 'Tropicana Ave, LV Strip', color: C.bone },
              { label: 'Capacity', value: '30,000 seats', color: C.bone },
              { label: 'Target Opening', value: 'April 2028', color: C.gold },
            ].map(item => (
              <div key={item.label} style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(239,178,30,0.1)' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.3)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{item.label}</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1rem', fontWeight: 700, color: item.color, letterSpacing: '0.05em' }}>{item.value}</div>
              </div>
            ))}
          </div>
          {/* Build progress bar */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.4)', textTransform: 'uppercase' }}>Build Progress</span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', color: C.gold }}>~35%</span>
            </div>
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '35%', background: `linear-gradient(90deg, ${C.green}, ${C.gold})` }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.45rem', color: 'rgba(245,240,232,0.25)', letterSpacing: '0.1em' }}>GROUNDBREAKING</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.45rem', color: 'rgba(245,240,232,0.25)', letterSpacing: '0.1em' }}>APRIL 2028 FIRST PITCH</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOT TAKE OF THE WEEK ============ */}
      <section style={{ background: C.dark, padding: '7rem 3rem', borderBottom: `1px solid rgba(239,178,30,0.08)` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            background: C.red,
            color: '#fff',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '0.35rem 0.9rem',
            display: 'inline-block',
            marginBottom: '2rem',
          }}>
            🔥 Hot Take of the Week
          </span>
          <blockquote style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            lineHeight: 1.0,
            color: C.bone,
            marginBottom: '2rem',
            letterSpacing: '0.01em',
          }}>
            Las Vegas will be the best baseball atmosphere in America{' '}
            <strong style={{ color: C.gold }}>by 2030.</strong>
          </blockquote>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'rgba(245,240,232,0.6)', maxWidth: '640px', margin: '0 auto 2.5rem', fontFamily: "'Inter', sans-serif" }}>
            Night games on the Strip. No wind. A stadium built for the sport instead of shoehorned into an aging coliseum. Vegas knows how to entertain. Baseball has never seen anything like what&apos;s coming.
          </p>
          <a href="/blog/best-atmosphere" style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: C.gold,
            textDecoration: 'none',
            borderBottom: `2px solid ${C.gold}`,
            paddingBottom: '0.2rem',
          }}>
            Read The Full Take →
          </a>
        </div>
      </section>

      {/* ============ FEATURES GRID ============ */}
      <section style={{ background: C.concrete, padding: '7rem 3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', color: C.gold, textTransform: 'uppercase', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ width: '2rem', height: '1px', background: C.gold, display: 'inline-block' }} />
              What We&apos;re Talking About
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 0.9, color: C.bone }}>
              LATEST <em style={{ color: C.gold, fontStyle: 'normal' }}>TAKES</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {FEATURES.map(f => (
              <a key={f.title} href={f.link} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(239,178,30,0.12)',
                  padding: '2rem',
                  height: '100%',
                  transition: 'border-color 0.2s, transform 0.2s',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}>
                  <div style={{ fontSize: '2rem' }}>{f.emoji}</div>
                  <div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', letterSpacing: '0.15em', color: C.gold, textTransform: 'uppercase', marginBottom: '0.4rem' }}>{f.subtitle}</div>
                    <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: C.bone, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{f.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, flex: 1, fontFamily: "'Inter', sans-serif" }}>{f.body}</p>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.gold }}>{f.cta} →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ROTATING TAKES STRIP ============ */}
      <section style={{ background: C.green, padding: '5rem 3rem', borderTop: `2px solid rgba(239,178,30,0.25)`, borderBottom: `2px solid rgba(239,178,30,0.25)` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.4)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>From The Archive</div>
          <div style={{ minHeight: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ background: C.red, color: '#fff', fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0.3rem 0.8rem', display: 'inline-block', marginBottom: '1.2rem' }}>
              {TAKES[activeTake].label}
            </span>
            <p style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              color: C.bone,
              lineHeight: 1.1,
              textAlign: 'center',
              maxWidth: '700px',
            }}>
              {TAKES[activeTake].text}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            {TAKES.map((_, i) => (
              <button key={i} onClick={() => setActiveTake(i)} style={{
                width: i === activeTake ? '1.5rem' : '0.4rem',
                height: '0.3rem',
                background: i === activeTake ? C.gold : 'rgba(245,240,232,0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section style={{ background: C.dark, padding: '7rem 3rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', color: C.gold, textTransform: 'uppercase', marginBottom: '1rem' }}>Fan Newsletter</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: C.bone, lineHeight: 0.9, marginBottom: '1.5rem' }}>
            DON&apos;T MISS A<br /><span style={{ color: C.gold }}>SINGLE TAKE</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, marginBottom: '2.5rem', fontFamily: "'Inter', sans-serif" }}>
            Hot takes, roster news, stadium updates. No spam. Just A&apos;s stuff.
          </p>
          {subscribed ? (
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.3rem', color: C.gold, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              You&apos;re in. Let&apos;s go. ⚾
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); if (email) setSubscribed(true) }} style={{ display: 'flex', gap: '0' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.06)',
                  border: `1px solid rgba(239,178,30,0.3)`,
                  borderRight: 'none',
                  padding: '1rem 1.5rem',
                  color: C.bone,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
              <button type="submit" style={{
                background: C.gold,
                color: C.dark,
                fontFamily: "'Oswald', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '1rem 2rem',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}>
                Let&apos;s Go
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{
        background: C.concrete,
        borderTop: `1px solid rgba(239,178,30,0.1)`,
        padding: '4rem 3rem 3rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: C.gold, marginBottom: '1rem', letterSpacing: '0.05em' }}>The LV A&apos;s</div>
              <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)', lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
                Fan site. Not affiliated with the Oakland or Las Vegas Athletics.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(245,240,232,0.3)', textTransform: 'uppercase', marginBottom: '1rem' }}>The Network</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { label: 'TheLVAs.com', href: 'https://thelvas.com' },
                  { label: 'TheLVAthletics.com', href: 'https://thelvathletics.com' },
                  { label: 'LVAthleticsNation.com', href: 'https://lvathleticsnation.com' },
                  { label: 'TheVoiceOfCash.com', href: 'https://thevoiceofcash.com' },
                ].map(link => (
                  <a key={link.label} href={link.href} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.85rem', color: 'rgba(245,240,232,0.5)', textDecoration: 'none', letterSpacing: '0.04em' }}>{link.label}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(245,240,232,0.3)', textTransform: 'uppercase', marginBottom: '1rem' }}>MLB Resources</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { label: 'MLB.com Athletics', href: 'https://www.mlb.com/athletics' },
                  { label: 'ESPN MLB', href: 'https://www.espn.com/mlb/' },
                  { label: 'Baseball Reference', href: 'https://www.baseball-reference.com' },
                  { label: 'SABR Research', href: 'https://sabr.org' },
                ].map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.85rem', color: 'rgba(245,240,232,0.5)', textDecoration: 'none', letterSpacing: '0.04em' }}>{link.label} ↗</a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(245,240,232,0.06)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', letterSpacing: '0.12em', color: 'rgba(245,240,232,0.2)', textTransform: 'uppercase' }}>
              © 2026 A&apos;s Coverage Network
            </span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {['/privacy', '/disclaimer', '/dmca'].map(href => (
                <a key={href} href={href} style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.45rem', letterSpacing: '0.1em', color: 'rgba(245,240,232,0.2)', textDecoration: 'none', textTransform: 'uppercase' }}>
                  {href.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
