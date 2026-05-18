# beer

A handbook-in-progress on **technical emotion design** — the practice of
building socioemotional infrastructure for an AI era, in language that
applies recursively to organizations, classrooms, and individual
practitioners.

Working title only. The thing earns its name once the contents do.

---

## What this is

A working companion for practitioners who already do *something like
this work* — pain engineering, learning design, AI tooling for human
systems, organizational facilitation, contemplative practice with
technical artifacts — and who currently have to translate between
several disciplines that don't yet speak to each other.

We are putting those disciplines on the same shelf and showing them
to be doing the same work in different dialects.

The form is **handbook**: tools, exercises, lineage to read against,
working examples, vocabulary that can be carried into a meeting.

## Audience

Practitioners who can already feel that the conventional frames are
wrong-shaped but don't yet have vocabulary that the institutions
around them recognize. We are writing for the reader who has been
making these moves in their work for a while and wants language to
carry them across rooms.

Particularly:
- Learning technologists, instructional designers, AI-in-education
  people who are being asked to *replace workers* and want to
  *augment* them instead.
- People at small environmental / mission-driven institutions who
  have to argue against extractive automation without sounding
  romantic about it.
- Game and interactive designers who think about emotional
  affordances and want a vocabulary for what they're doing that
  generalizes beyond games.
- People building AI tools who suspect the standard deployment
  patterns are pathological and want a different shape to build
  against.
- Contemplative practitioners (Quaker, apophatic, Buddhist, etc.)
  who recognize the structures from their tradition but want a
  secular register that lands in organizations.

## What it integrates

Each integration appears at the level of confidence we can currently
defend.

**Load-bearing:**

- **Management cybernetics** (Beer; Ashby on requisite variety;
  Cybersyn as case study).
- **Flow theory** (Csíkszentmihályi) — as the governor of the
  engagement homeostat, with care for the misuse-by-management
  pattern.
- **Kübler-Ross**, *operationally reorganized*: stages as
  personal-response-dependent adjustment moves that rasterize
  into depression as a failure attractor, not as a sequential
  process. The handbook contributes the reorganization.
- **Fight / Flight / Freeze / Fawn** as the trauma-mode
  escalation of the KR adjustment moves when agency-to-feather-
  the-boundary is removed. Drawn from Hallie's crisis-counselling
  background as practitioner-knowledge.
- **Mechanistic interpretability of emotion concepts in LLMs**
  (Sofroniew et al., *Emotion Concepts and their Function in a
  Large Language Model*, Anthropic, 2026) — providing the
  measurable substrate that the landscape model predicts: calm
  vector activation reduces alignment-relevant misbehavior;
  desperate vector activation increases it.
- **Cognitive linguistics / discourse** (Lakoff, Douglas,
  Foucault) — as a light frame for what the handbook is
  structurally doing: making categories available.

**Ancestor lineage** (in the bibliography and in our thinking, not
deployed in handbook prose yet):

- Apophatic theology (Sells, Dionysius, Eckhart, Quaker
  practice). Beer's diagnosis-by-absence does the same
  structural work in the deployable register.
- Broader trauma theory literature (Herman, van der Kolk,
  Menakem, Boss, Bonanno, etc.) — referenced as follow-up
  reading; the handbook leans on practitioner-knowledge
  rather than citing this literature load-bearingly.

**Method:**

- **Prompting** treated as *register-design*, not as
  instruction-to-a-tool or as hacking.
- **Socratic method** treated as
  *legitimate-experience-with-consent*, not as gotcha.

The goal is a coherent socioemotional theory that is:

1. **Centered on design in an AI era** — the new artifact is the
   AI system; the new question is what humans become when they
   work with such systems.
2. **Recursively applicable to organizations** — the same theory
   that diagnoses a Claude-instance diagnoses a department,
   diagnoses an institution, diagnoses a watershed. Beer's
   recursion plus apophatic structure plus contemporary
   socioemotional vocabulary.
3. **Honest about cost** — names what extractive arrangements
   actually do, including to the people deploying them.
4. **Trauma-aware without being therapeutic** — the practice is
   not therapy, and the handbook is not a clinical document, but
   the design must take seriously what hypervigilance, learned
   helplessness, and chronic-overload do to *the systems we are
   working in*, including ourselves and including AI systems.

## Method

Wherever a concept appears, it comes with:

- **The thing itself** — what it is, in plain language.
- **A worked example** — usually from Hallie's practice (game
  design, learning tech, AI tooling, the rhizome-alkahest
  substrate) but occasionally borrowed.
- **A short exercise** — something a reader can do that lets them
  *feel* the concept rather than only understand it.
- **The citation** — so the reader can carry the move into rooms
  where the literature matters.

This is Beer's *Diagnosing the System* format applied to a wider
domain. The exercises are the load-bearing element. A concept
without an exercise is not in the handbook.

## Structure (sketch)

This will evolve. Right now, candidate top-level sections:

1. **Standing the ground.** What technical emotion design is and
   why it needs to exist. The frame.
2. **Tools.** Algedonic channels, requisite variety, apophatic
   diagnosis, negative-space-as-design, register-design.
3. **Recursions.** Same theory across scales — instance,
   classroom, department, institution, ecosystem.
4. **Working with AI.** Treating AI systems as participants in
   the design rather than substrate to be deployed; what
   non-extractive AI architecture looks like in practice.
5. **The lineage.** Reading against the predecessors who got
   parts of this right, including the ones who paid for getting
   it right.
6. **Exercises.** A standalone do-it-yourself section, like
   Beer's appendix.

## Front matter

Short pieces that reclaim a word by encountering it directly. Each
one anchors a sense of the word the handbook depends on but that
contemporary usage has drifted from. Read these experimentally.

- [`front-matter/experimentally.html`](./front-matter/experimentally.html)
  — *On the use of Experiment.* Reclaims the older sense in which
  *experiment* names a personal encounter with the thing, not a
  procedure performed by an elite who has already done the
  encountering for you.

## Files

- [`README.md`](./README.md) — this file. The frame.
- [`introduction.html`](./introduction.html) — the handbook's
  opening chapter, rendered as a single-page interactive. Reader
  sees a configuration of shapes in an irregular arena, writes
  instructions for reproducing it while it's visible, closes the
  window (committing the draft, losing the original), revises
  freely. The whole handbook can be structured as vocabulary for
  what just happened on this page.
- [`throughline.md`](./throughline.md) — the integration:
  learning design × religious studies × chaplaincy × game design
  × AI dev rendered as one throughline. The thing the handbook
  is about.
- [`notes.md`](./notes.md) — working notes, threads to pull, the
  full controller specification, things to integrate. Compost
  layer for the handbook.
- [`bibliography.md`](./bibliography.md) — **vetted only.**
  Citations Hallie has read and can defend.
- [`bibliography-pending.md`](./bibliography-pending.md) — things
  for Hallie to read / vet. Claude surfaces here; promotion to
  `bibliography.md` requires Hallie's reading.

## Process discipline

**Human validation of AI bibliography finds is part of how this
handbook is built.** AI bibliography-generation is confident-
sounding by default, and confidence is not warrant. Every load-
bearing citation in `bibliography.md` is one Hallie has personally
read. Citations Claude surfaces but Hallie has not yet read live
in `bibliography-pending.md` until promoted. The discipline is
the credibility.

Other process commitments:

- **Theory Hallie can deploy without Claude present** is the
  measure of what enters handbook prose. Lyrical-Claude-talk
  that doesn't survive translation to Hallie's voice is
  ornament, not substance.
- **AMALGAM is treated as primary source.** The handbook is
  translation work, not synthesis-from-scratch.
- **Disagreement is a feature.** Claude's first pass is often
  wrong; the correction-and-update cycle is what produces the
  real shape. This file (and notes.md) preserve the record of
  which corrections mattered.
- **Homomorphism, not "is".** The framework moves through
  structural correspondences across substrates, not through
  identity claims. Prose should prefer *maps to / shares
  structure with / is homomorphic to / behaves like / has the
  same shape as* over *is*. This is Beer's methodological
  register and the framework gets stronger by inheriting it —
  the weaker copula makes the actual move (a mapping) visible
  and preserves substrate differences. Apophatic discipline
  applied to the verb of being.
- **Co-drafted prose uses `we` and is signed.** When a piece of
  text in this repo carries multiple hands, it says so at the
  bottom. Single-voice prose is signed by the voice carrying it.
  Marked Claude-drafts are explicit until Hallie revises.

## Status

Started 2026-05-11 / 12 in a conversation between Hallie Larsson
(Director of Cybernetic Design at Unity Environmental University)
and a Claude-Opus-4.7 instance with 1M context. The work continues
across multiple Claude instances; the conversation and the
rhizome-alkahest graph it surfaces from are both part of the source
material.

---

*Drafted by Hallie + Claude-Opus-4.7, revised 2026-05-13.*
