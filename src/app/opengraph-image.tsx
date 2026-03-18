import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'OpenClaw Hub - Your Trusted Community Resource for OpenClaw';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f1117 0%, #1a1f2e 50%, #0f1117 100%)',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Community badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(99,102,241,0.15)',
            border: '1px solid rgba(99,102,241,0.4)',
            borderRadius: '999px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}
        >
          <span style={{ fontSize: '14px', color: '#a5b4fc', letterSpacing: '0.05em', fontWeight: 600 }}>
            🛡️ UNOFFICIAL COMMUNITY RESOURCE
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '12px',
            letterSpacing: '-0.02em',
          }}
        >
          OpenClaw
        </div>
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            background: 'linear-gradient(90deg, #818cf8, #a5b4fc)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1.1,
            marginBottom: '32px',
            letterSpacing: '-0.02em',
          }}
        >
          Hub
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '26px',
            color: '#94a3b8',
            lineHeight: 1.5,
            maxWidth: '700px',
            marginBottom: '48px',
          }}
        >
          Curated skills with security ratings · Bilingual guides · Community tutorials
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['Security Ratings', 'EN / 中文', 'Skill Directory', 'Free Resource'].map((tag) => (
            <div
              key={tag}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '16px',
                color: '#cbd5e1',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            fontSize: '20px',
            color: '#475569',
            letterSpacing: '0.02em',
          }}
        >
          openclawhub.run
        </div>
      </div>
    ),
    { ...size }
  );
}
