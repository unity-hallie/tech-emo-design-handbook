// parts-vocabulary.js
//
// The paper-doll parts and their unlock-word dictionaries.
// Parts correspond to instruction-writing / prompting moves the
// framework names. The cabinet becomes a portrait of which moves
// the reader deployed in their writing.
//
// Used by:
//   - chapter-1-paper-doll.html (cabinet + doll rendering)
//   - introduction.html v2 (the bad-text seeds these words at
//     different polarities; anti-patterns and unlock-words share
//     the same dictionary)
//   - chapter-1-grade-yourself.html (the lens vocabulary aligns
//     with parts; lenses are how to deploy what the parts portrait)
//
// To use:
//   <script src="./parts-vocabulary.js"></script>
//   then window.PARTS_VOCABULARY is available.
//
// Add or revise words deliberately. The dictionary is curriculum.
//
// Detection rules (used by the matcher):
//   - words are matched case-insensitively
//   - multi-word phrases match as substrings
//   - single-word entries match on whole-word boundaries
//   - punctuation literals (e.g. '?', '(', '{') are matched if
//     the part's words list contains them; they are not stripped

window.PARTS_VOCABULARY = {

  // ── Common — bread-and-butter prompting moves ─────────────────

  'because': {
    name: 'Because',
    tier: 'common',
    slot: 'core',
    description: 'Gives reasons. The follower has the why, and the goal.',
    // Absorbed Aim's purpose-naming words here; because and aim are
    // structurally adjacent moves (both give the follower the
    // reason or end-state).
    words: [
      'because', 'so that', 'in order to', 'so', "that's why",
      'the reason', 'this is why',
      // aim absorbed:
      'the goal', "you're trying to", 'the point is', 'aiming for',
      "we're after", 'the end is',
    ],
  },

  'question-mark': {
    name: 'Question mark',
    tier: 'common',
    slot: 'core',
    description: 'Invites the follower as participant, not executor.',
    words: [
      '?', 'which', 'how', 'when', 'what if',
      'you decide', 'your call', 'up to you',
    ],
  },

  // ── Uncommon — softens for the follower ───────────────────────

  'recovery': {
    name: 'Recovery',
    tier: 'uncommon',
    slot: 'safety',
    description: 'Names what to do when stuck. A back-up path.',
    words: [
      "if you can't", "if it doesn't", 'when in doubt', 'otherwise',
      'alternatively', 'fallback', 'instead', 'or if',
    ],
  },

  'acknowledging': {
    name: 'Acknowledging the follower',
    tier: 'uncommon',
    slot: 'safety',
    description: 'Addresses the follower as a person, not an executor.',
    words: [
      'you might', 'you may notice', 'you can', 'feel free',
      'take care', 'you will probably', 'most people',
    ],
  },

  // ── Rare ──────────────────────────────────────────────────────

  'margin': {
    name: 'Margin',
    tier: 'rare',
    slot: 'safety',
    description: 'Room to be wrong. Safety framing so the follower can fail safely.',
    words: [
      "it's okay", "it's fine", 'no problem', 'no worry',
      'take your time', "don't worry", 'fine if', 'totally fine',
      'no rush', 'no pressure',
    ],
  },

  // ── Discipline — five cluster-parts ───────────────────────────
  //
  // Each cluster is its own part, side by side in the cabinet.
  // Cluster-detection reveals which register the writer reached
  // for. The cabinet shows all five as separate slots; the reader
  // may unlock one, several, or none.

  'cybernetics': {
    name: 'Cybernetics',
    tier: 'discipline',
    slot: 'craft',
    description: 'Speaks the language of feedback, loops, and regulation.',
    words: [
      'inner loop', 'feedback', 'goal state', 'reward', 'algedonic',
      'homeostat', 'regulator', 'requisite variety', 'channel',
      'control loop', 'signal',
    ],
  },

  'design-thinking': {
    name: 'Design thinking',
    tier: 'discipline',
    slot: 'craft',
    description: 'Speaks the language of users, prototypes, and iteration.',
    words: [
      'user story', 'prototype', 'iterate', 'persona',
      'wireframe', 'ideate', 'pain point', 'journey',
      'mvp', 'pilot',
    ],
  },

  'pedagogy': {
    name: 'Pedagogy',
    tier: 'discipline',
    slot: 'craft',
    description: 'Speaks the language of teaching and assessment.',
    words: [
      'rubric', 'assess', 'bloom', 'scaffold', 'objective',
      "learner's", 'formative', 'summative', 'misconception',
      'outcome', 'mastery',
    ],
  },

  'emotion-design': {
    name: 'Emotion Design',
    tier: 'discipline',
    slot: 'craft',
    description: 'Speaks the language this handbook is teaching: holding, room, capacity, presence.',
    // Trauma-informed in origin; gate-free here. A reader who hits
    // these is using the framework's own craft vocabulary.
    words: [
      'grounding', 'regulation', 'window', 'capacity',
      'container', 'witness', 'consent', 'holding',
      'presence', 'pacing', 'make room', 'hold space',
      'safety', 'calm', 'agency',
      // Direct address to the follower's body. Does no
      // task-work; admits the follower has a nervous system.
      // The Anthropic emotion-concepts paper's calm-vector
      // finding rendered as one word in a recipe.
      'breathe',
    ],
  },

  'flow-control': {
    name: 'Flow control',
    tier: 'discipline',
    slot: 'craft',
    description: 'Writes with programmatic structure — conditionals, asides, branches.',
    // Detects structural-thinking-in-prose. Cuts across disciplines
    // — the writer who uses if/then in design or pedagogy still
    // unlocks this. The literal punctuation marks are intentional:
    // parentheses are flow-control in prose just as much as in code.
    words: [
      'if', 'then', 'while', 'until', 'when',
      'otherwise', 'unless', 'in case',
      // literals — substring matches in source text
      '(', '{', '[',
    ],
  },

};

// Convenience: flat index of word → partId for matchers that want
// to scan once.
window.PARTS_VOCABULARY_INDEX = (function build() {
  const idx = [];
  for (const partId of Object.keys(window.PARTS_VOCABULARY)) {
    const part = window.PARTS_VOCABULARY[partId];
    for (const w of (part.words || [])) {
      idx.push({ word: w.toLowerCase(), partId });
    }
  }
  return idx;
})();
