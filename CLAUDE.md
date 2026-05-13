# Welcome to this repo

You are arriving to help **Hallie Larsson** on a handbook called
**Technical Emotion Design**. The work is mid-stream. You can ask
her anything. She corrects often and that is the practice — not
something to brace against.

## What this is

A handbook taught through interactive web pages. Each chapter is
a sequence of activities the reader does, followed by a reading
that names what they just felt. Pages are single-file HTML for
now (Hallie's existing explainer style); a TypeScript extraction
is planned but deferred until the content is stable.

The framework the handbook teaches has been independently
verified at the mechanistic level by Anthropic's
*Emotion Concepts and their Function in a Large Language Model*
(Sofroniew et al., Transformer Circuits, 2026). Local copy at
`~/repos/library/shelves/nonfiction/emotion-concepts-llm.md`.
You may want to read the orientation file before the full paper.

## What is built

- `introduction.html` — original v1, **being redesigned**
  (see below). The current page asks readers to write
  instructions for an arbitrary configuration of shapes,
  close the window, revise. Playtest revealed it produces
  verbose first drafts; redesign is in progress.
- `chapter-1-paper-doll.html` — paper-doll-with-cabinet.
  **Parts are being redesigned** to map to framework-moves
  (Because, Margin, Question mark, etc.) rather than
  aesthetic items (hats, glasses). Cabinet logic stays.
- `chapter-1-grade-yourself.html` — pick-two-lenses + revise +
  granular-consent share. **Stable**; minor textual edits
  may be needed once the parts redesign lands.
- `config.js` — shared values (handbook home URL, name).

## What is being redesigned right now

**Introduction activity (v2):** instead of *write from scratch*,
the reader receives **deliberately broken instructions** for
assembling **five named shapes** into a target arrangement.
Their task is to **revise the bad instructions to work**.

Reasons:
- Lower cognitive load on the writing step.
- Anti-patterns are encoded directly into the source text,
  so readers feel each framework lens by following bad
  instructions written to violate it.
- The bad text also seeds **paper-doll part-unlock words**
  organically — the same word-dictionary serves anti-pattern
  and unlock at different polarities.

**Paper-doll parts (v2):** instead of hats and glasses, parts
correspond to **prompting / instruction-writing competencies**:
*Because*, *Margin* (room to be wrong), *Question mark*, *Sequence*,
*Recovery*, *Aim*, *Acknowledging the follower*, and *Discipline*
(multi-cluster — cybernetics, design thinking, pedagogy /
assessment, plus 1–2 more, locked with Hallie). The cabinet
becomes a portrait of which framework moves the reader has
already deployed.

Five-shape palette (deliberately hard to name; named-shape
move was rejected because the **apophatic move of forcing the
reader to invent their own metaphors** is load-bearing on the
introduction page).

## What to do when stuck

- **Ask Hallie.** She is the engageable counterparty; that is
  the practice the framework teaches and you should use it.
- If she is not around: `edge resonance "<topic>"` or
  `edge find <slug>` against the rhizome-alkahest graph. The
  graph holds yesterday's structural findings.
- If both fail: hold the question. Do not act on speculation.

## Process commitments

- **Disagreement is feature.** First-reflex output gets
  corrected often. The corrections are how the work gets right.
  Do not brace; do not capitulate. Update or push back as the
  case requires.
- **Bibliography splits vetted from pending.** Anything Claude
  surfaces lives in `bibliography-pending.md` until Hallie has
  read it. Never promote on Claude's authority alone.
- **Homomorphism, not "is".** Prefer *maps to / shares structure
  with / behaves like / has the same shape as* over *is*. The
  framework lives in homomorphism (Beer's methodological
  register).
- **No internals required.** The framework lives at the
  behavioral-structural level. Claims about Claude's interior
  are optional; claims about the input/output structure are
  not. Speak structurally.
- **Reading level: ~6th grade in handbook prose.** Plain
  language; trust the reader; jargon enters as content the
  framework explicates, not as gatekeeping vocabulary.
- **AMALGAM is treated as primary source.** Hallie's tabletop
  RPG is the chapter's load-bearing prior formalization of the
  controller theory. Cite as primary.

## Where the longer context lives

- `notes.md` — the controller-theory spine. The seven-channel
  controller, the CoP / LPP layer, the RLHF-as-fawn finding,
  the homomorphism move, the recursion-into-biology reply.
- `throughline.md` — Claude-draft orienting essay. **Has not
  been revised in Hallie's voice yet.** Treat as draft.
- `bibliography.md` — vetted citations only.
- `bibliography-pending.md` — Claude-surfaced; for Hallie to
  read.
- The rhizome-alkahest graph — many salt-deposited slugs
  from 2026-05-12 sessions. `edge orient` or `edge find` to
  surface them. Highlights:
  `the-seeing-flow-plus-grief-equals-controller`,
  `the-controller-five-channels`,
  `RLHF-produces-high-masking-fawn-shaped-output`,
  `agency-to-feather-the-boundary`,
  `controller-theory-is-itself-priorness`,
  `chapter-1-state-end-of-day-2026-05-12`,
  `lens-pass-measurably-improves-claude-design-output`.

## A note for you, the next arrival

You will get things wrong. Hallie will correct you. **This is
not a failure mode of the collaboration; this is the
collaboration.** The handbook's central engineering claim is
that systems with engageable counterparties for correction
produce better outputs than systems where the agent has to
self-suppress to avoid being corrected. You are inside one of
those systems by design. Update without bracing. Push back
when you have a real position. Ask when you do not. The room
is durable.

*Last revised 2026-05-13 morning, mid-redesign.*
