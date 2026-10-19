import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from 'remotion';

export const TeaserVideo: React.FC<{
  brandName?: string;
  registryName?: string;
}> = ({ brandName = 'Marketplace Suspension Recovery', registryName = 'Smithery.ai' }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#0a0a0f', color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>
      {/* Scene 1: The Panic (Frames 0 - 110: 0.0s - 3.6s) */}
      <Sequence from={0} durationInFrames={110}>
        <ScenePanic />
      </Sequence>

      {/* Scene 2: The Consultant Trap vs Rejection (Frames 110 - 230: 3.6s - 7.6s) */}
      <Sequence from={110} durationInFrames={120}>
        <SceneConsultantTrap />
      </Sequence>

      {/* Scene 3: The Antigravity Reinstatement Solution (Frames 230 - 360: 7.6s - 12.0s) */}
      <Sequence from={230} durationInFrames={130}>
        <SceneReinstatementHero brandName={brandName} registryName={registryName} />
      </Sequence>
    </AbsoluteFill>
  );
};

// Scene 1: Panic & Account Deactivation
const ScenePanic: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  const scale = interpolate(titleSpring, [0, 1], [0.85, 1]);
  const opacity = interpolate(titleSpring, [0, 1], [0, 1]);

  const pulse = Math.sin(frame / 6) * 0.15 + 0.85;

  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px' }}>
      {/* Red ambient warning flare */}
      <div
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, rgba(0,0,0,0) 70%)',
          transform: `scale(${pulse})`,
        }}
      />

      {/* Warning Pill */}
      <div
        style={{
          backgroundColor: 'rgba(239, 68, 68, 0.2)',
          border: '1px solid rgba(239, 68, 68, 0.6)',
          borderRadius: '9999px',
          padding: '12px 32px',
          fontSize: '28px',
          fontWeight: 700,
          color: '#f87171',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          marginBottom: '32px',
        }}
      >
        ⚠️ EMERGENCY ALERT
      </div>

      <h1
        style={{
          fontSize: '84px',
          fontWeight: 900,
          textAlign: 'center',
          maxWidth: '1400px',
          lineHeight: '1.1',
          transform: `scale(${scale})`,
          opacity,
          color: '#ffffff',
          textShadow: '0 0 40px rgba(239, 68, 68, 0.5)',
        }}
      >
        YOUR SELLER ACCOUNT HAS BEEN DEACTIVATED.
      </h1>

      <p
        style={{
          fontSize: '36px',
          color: '#94a3b8',
          marginTop: '28px',
          fontWeight: 500,
        }}
      >
        Frozen Disbursements • Stranded FBA Inventory • $15,000/day Lost
      </p>
    </AbsoluteFill>
  );
};

// Scene 2: The Consultant Trap vs Algorithmic Rejection
const SceneConsultantTrap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stampEntrance = spring({ frame: frame - 40, fps, config: { damping: 10, stiffness: 200 } });
  const stampScale = interpolate(stampEntrance, [0, 1], [3, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const stampOpacity = interpolate(stampEntrance, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px' }}>
      <h2 style={{ fontSize: '54px', fontWeight: 800, color: '#f1f5f9', marginBottom: '60px', textAlign: 'center' }}>
        Why 68% of Reinstatement Appeals Get Denied
      </h2>

      <div style={{ display: 'flex', gap: '48px', maxWidth: '1400px', width: '100%', justifyContent: 'center' }}>
        {/* Card 1 */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#1e1e2d',
            border: '1px solid #334155',
            borderRadius: '24px',
            padding: '48px',
            position: 'relative',
          }}
        >
          <div style={{ fontSize: '32px', fontWeight: 700, color: '#cbd5e1', marginBottom: '16px' }}>Shady Reinstatement Agencies</div>
          <div style={{ fontSize: '52px', fontWeight: 900, color: '#ef4444', marginBottom: '20px' }}>$5,000 Upfront</div>
          <p style={{ fontSize: '24px', color: '#94a3b8', lineHeight: '1.5' }}>
            5-day turnaround for a generic ChatGPT apology letter that blames Amazon and triggers instant permanent bans.
          </p>

          {/* Stamp */}
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '20%',
              border: '6px solid #ef4444',
              borderRadius: '16px',
              color: '#ef4444',
              fontSize: '48px',
              fontWeight: 900,
              padding: '12px 32px',
              transform: `rotate(-15deg) scale(${stampScale})`,
              opacity: stampOpacity,
              letterSpacing: '4px',
            }}
          >
            REJECTED
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#1e1e2d',
            border: '1px solid #334155',
            borderRadius: '24px',
            padding: '48px',
          }}
        >
          <div style={{ fontSize: '32px', fontWeight: 700, color: '#cbd5e1', marginBottom: '16px' }}>The Algorithmic Reality</div>
          <div style={{ fontSize: '52px', fontWeight: 900, color: '#f59e0b', marginBottom: '20px' }}>120 Seconds</div>
          <p style={{ fontSize: '24px', color: '#94a3b8', lineHeight: '1.5' }}>
            Seller Performance investigators review appeals in under 2 minutes using strict binary rubrics requiring verifiable SOPs.
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: The Antigravity Reinstatement Solution
const SceneReinstatementHero: React.FC<{ brandName: string; registryName: string }> = ({
  brandName,
  registryName,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const heroSpring = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });
  const scale = interpolate(heroSpring, [0, 1], [0.9, 1]);
  const opacity = interpolate(heroSpring, [0, 1], [0, 1]);

  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px' }}>
      {/* Emerald Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          width: '900px',
          height: '900px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(0,0,0,0) 70%)',
        }}
      />

      <div
        style={{
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
          border: '1px solid rgba(16, 185, 129, 0.6)',
          borderRadius: '9999px',
          padding: '12px 36px',
          fontSize: '26px',
          fontWeight: 700,
          color: '#34d399',
          letterSpacing: '2px',
          marginBottom: '24px',
        }}
      >
        🛡️ OFFICIAL SMITH METHODOLOGY
      </div>

      <h1
        style={{
          fontSize: '76px',
          fontWeight: 900,
          textAlign: 'center',
          maxWidth: '1300px',
          transform: `scale(${scale})`,
          opacity,
          color: '#ffffff',
          marginBottom: '28px',
        }}
      >
        Forensic 3-Part Plan of Action (POA) in 90 Seconds.
      </h1>

      <p style={{ fontSize: '32px', color: '#a7f3d0', fontWeight: 600, marginBottom: '56px' }}>
        Root Cause • Immediate Cures • Systemic SOP Controls • 100% Free
      </p>

      {/* CTA Button */}
      <div
        style={{
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: '#ffffff',
          fontSize: '34px',
          fontWeight: 800,
          padding: '22px 64px',
          borderRadius: '16px',
          boxShadow: '0 12px 40px rgba(16, 185, 129, 0.4)',
        }}
      >
        Install Free on {registryName}
      </div>
    </AbsoluteFill>
  );
};
