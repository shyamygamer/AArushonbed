/**
 * Luxury Comedy Web Audio API Synthesizer
 * No external files required. Sound is OFF by default.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioCtx) {
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Play a triumphant, upbeat comedy brass fanfare
 */
export function playComedyFanfare(isSoundEnabled: boolean): void {
  if (!isSoundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Notes for a classic celebratory fanfare: G4 -> C5 -> E5 -> G5, then high celebratory chord
  const melody = [
    { freq: 392.00, start: 0.0, dur: 0.15 }, // G4
    { freq: 523.25, start: 0.16, dur: 0.15 }, // C5
    { freq: 659.25, start: 0.32, dur: 0.15 }, // E5
    { freq: 783.99, start: 0.48, dur: 0.35 }, // G5 held
    // Final triumphant comedy flourish
    { freq: 659.25, start: 0.88, dur: 0.12 }, // E5
    { freq: 783.99, start: 1.02, dur: 0.12 }, // G5
    { freq: 1046.50, start: 1.16, dur: 0.60 }, // C6 high finale
  ];

  melody.forEach(({ freq, start, dur }) => {
    // Lead tone (sawtooth with low-pass filter for brassy trumpet vibe)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, now + start);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now + start);
    filter.frequency.exponentialRampToValueAtTime(3200, now + start + 0.05);
    filter.frequency.exponentialRampToValueAtTime(800, now + start + dur);

    gain.gain.setValueAtTime(0.001, now + start);
    gain.gain.linearRampToValueAtTime(0.18, now + start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, now + start + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + start);
    osc.stop(now + start + dur + 0.05);

    // Warm sub harmonic (sine) for richness
    const sub = ctx.createOscillator();
    const subGain = ctx.createGain();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(freq / 2, now + start);
    subGain.gain.setValueAtTime(0.001, now + start);
    subGain.gain.linearRampToValueAtTime(0.08, now + start + 0.03);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + start + dur);

    sub.connect(subGain);
    subGain.connect(ctx.destination);

    sub.start(now + start);
    sub.stop(now + start + dur + 0.05);
  });

  // Add a comedy sparkle slide at the end
  const sparkle = ctx.createOscillator();
  const sparkleGain = ctx.createGain();
  sparkle.type = 'triangle';
  sparkle.frequency.setValueAtTime(880, now + 1.2);
  sparkle.frequency.exponentialRampToValueAtTime(1760, now + 1.6);

  sparkleGain.gain.setValueAtTime(0.001, now + 1.2);
  sparkleGain.gain.linearRampToValueAtTime(0.07, now + 1.3);
  sparkleGain.gain.exponentialRampToValueAtTime(0.001, now + 1.7);

  sparkle.connect(sparkleGain);
  sparkleGain.connect(ctx.destination);
  sparkle.start(now + 1.2);
  sparkle.stop(now + 1.75);
}

/**
 * Play a light luxury bell chime when user interacts
 */
export function playChime(isSoundEnabled: boolean): void {
  if (!isSoundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(880, now); // A5
  osc.frequency.exponentialRampToValueAtTime(1320, now + 0.15); // E6

  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.45);
}
