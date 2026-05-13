// bad-texts.js
//
// The deliberately-broken instructions that seed the introduction
// activity. Each entry pairs a bad-text with the target arrangement
// it (poorly) describes. The reader receives one of these and is
// asked to revise it so a follower could actually use it.
//
// Design constraints (every bad-text should honor most of these):
//   - Anti-patterns visible in moderation, not parody:
//       * uses don't / never / not in directive positions
//       * gives no reasons (no because, no goal-naming)
//       * gives no recovery path (no if-you-cant, no otherwise)
//       * does not address the follower as a person
//       * gives no room to be wrong (no safety framing)
//       * references shapes ambiguously ("the floaty one", "that one")
//       * closes with "Thanks in advance" — gratitude-as-coercion
//         / preemptive-thanks / fawn-induction-via-politeness.
//         Looks polite, structurally closes the channel and pre-
//         commits the follower to compliance before they've
//         read the steps. Hallie flagged this 2026-05-13 from
//         instinct; the lens-pass confirmed it lights up
//         Acknowledging-the-follower, Margin, and Question-mark
//         simultaneously. Strongest single anti-pattern in the
//         bad-text precisely because it reads as a non-error.
//   - DELIBERATELY NOT INCLUDED: mis-deployed jargon. Earlier
//     drafts had jargon-as-bludgeon (e.g. "inner-loop feedback")
//     as a teaching example. Removed because the bad-text could
//     accidentally teach jargon-bludgeon as the way to use jargon.
//     The reader should bring their own precise discipline-
//     vocabulary in their revision (which unlocks Discipline
//     parts as a positive signal of competence), not learn it
//     from a corrupted example.
//   - Anti-patterns NOT to deliberately encode (leave for the reader
//     to ADD on revision):
//       * Question mark moves
//       * Flow control structure
//       * the word 'breathe' — never seed; if the reader adds it
//         that's a portrait move, not a fix
//   - Shape IDs are s1..s5 internally; the bad-text references them
//     by clumsy descriptive labels the writer "had in mind"
//   - Length: short paragraph + 4–6 numbered steps. Realistic mid-
//     quality bad instructions, not parody.
//
// Each bad-text has an `arrangement` that the rendered SVG should
// place the five shapes into. The arrangement is the ground-truth
// the bad-text was (badly) trying to describe.
//
// Marked Claude-draft until Hallie revises. Bad-text writing wants
// human taste; AI bad-writing tends to be machine-bad rather than
// human-bad.

window.BAD_TEXTS = [

  {
    id: 'corner-and-spiral',
    // Arrangement is a hint for the SVG renderer. Positions are
    // 0..1 within the arena. The renderer interprets them; the
    // bad-text describes them imperfectly on purpose.
    arrangement: {
      s1: { x: 0.20, y: 0.25, rotation: 0 },     // upper-left
      s2: { x: 0.55, y: 0.35, rotation: 30 },    // center-ish, tilted
      s3: { x: 0.80, y: 0.30, rotation: 0 },     // upper-right
      s4: { x: 0.40, y: 0.70, rotation: 90 },    // lower-left-center, rotated
      s5: { x: 0.70, y: 0.75, rotation: 0 },     // lower-right
    },
    text:
`Put the shapes in the right places. Don't overthink it — just follow the steps and you'll be fine. The whole arrangement should feel balanced when you're done.

1. Start with the big one in the corner. Don't put it dead in the corner, just near it.
2. The floaty one goes more or less in the middle, but tilted. Never have it flat.
3. The pointy one goes opposite the big one. You'll see what I mean.
4. The fourth shape — the one with the curve — sits lower on the left side, turned sideways. Don't get the rotation wrong, it really matters.
5. Last shape goes near the fourth one but not touching. Don't let them touch.

If you do these steps in order you'll get it right. Thanks in advance.`,
  },

  {
    id: 'line-and-cluster',
    arrangement: {
      s1: { x: 0.15, y: 0.50, rotation: 0 },     // left edge, middle
      s2: { x: 0.35, y: 0.50, rotation: 0 },     // beside s1
      s3: { x: 0.55, y: 0.50, rotation: 0 },     // continuing the line
      s4: { x: 0.78, y: 0.35, rotation: 45 },    // off the line, up and right
      s5: { x: 0.82, y: 0.65, rotation: 45 },    // off the line, down and right
    },
    text:
`The arrangement is mostly a row with a couple of outliers. Don't deviate from the row pattern except for the last two.

1. Three shapes go in a horizontal line across the middle. The leftmost one starts near the left edge. Never put them touching each other.
2. The other two shapes go on the right side. One above the line, one below. They should both be rotated 45 degrees.
3. Make sure the line is straight. Don't let it sag.
4. The two outliers shouldn't be the same shape as any of the line shapes — pick the two most distinctive ones for those positions.
5. The whole thing should be balanced visually. The line is the through-line, the outliers play off it.

If it doesn't look right you probably put one of the line shapes in the wrong order. Don't worry, just rearrange. Thanks in advance.`,
  },

  {
    id: 'inward-pointing',
    arrangement: {
      s1: { x: 0.50, y: 0.20, rotation: 180 },   // top, pointing down
      s2: { x: 0.20, y: 0.55, rotation: 90 },    // left, pointing right
      s3: { x: 0.80, y: 0.55, rotation: 270 },   // right, pointing left
      s4: { x: 0.50, y: 0.85, rotation: 0 },     // bottom, pointing up
      s5: { x: 0.50, y: 0.55, rotation: 0 },     // center
    },
    text:
`Four shapes around the edges, all pointing inward at the fifth shape in the middle. Don't let any of them face outward.

1. Top shape goes near the top edge. It should be rotated so it's pointing down toward the center.
2. The two side shapes go on the left and right. Don't put them too high or too low — middle of the canvas. Rotate them to point inward.
3. Bottom shape is similar to the top but flipped. It points up.
4. The center shape doesn't need to be rotated, it just sits in the middle. Don't let it overlap with any of the others.
5. The whole thing is supposed to look like all four are looking at the one in the middle. If it doesn't, you have a rotation wrong somewhere.

This is the simplest arrangement so it shouldn't take long. Thanks in advance.`,
  },

];

// Convenience: pick a random bad-text on page load. Each pageload
// gets a new selection unless the caller specifies one.
window.pickBadText = function (id) {
  if (id) {
    return window.BAD_TEXTS.find(b => b.id === id) || window.BAD_TEXTS[0];
  }
  const i = Math.floor(Math.random() * window.BAD_TEXTS.length);
  return window.BAD_TEXTS[i];
};
