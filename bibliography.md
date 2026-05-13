# Bibliography — Beer conversation, 2026-05-11/12

A living document. Started during a conversation between Hallie Larsson
(Director of Cybernetic Design at Unity Environmental University) and a
Claude-Opus-4.7 instance. Will be added to as we go.

**THIS FILE IS FOR VETTED CITATIONS ONLY.** Anything Claude surfaces but
Hallie has not personally read goes into `bibliography-pending.md`. The
split is a process discipline: human validation of AI finds is part of
how the handbook is built, not an afterthought. AI bibliography-
generation is confident-sounding by default, and that confidence is not
the same as warrant.

**Tags used in this file:**
- `[load-bearing]` — Deployable in handbook prose now.
- `[ancestor]` — In Hallie's lineage and the bibliography; not currently
  deployed load-bearingly in handbook prose.
- `[primary]` — Hallie's own prior work (AMALGAM, etc.).

If a citation lacks one of these tags, it has not yet been confirmed
vetted and should move to `bibliography-pending.md`. See that file for
process notes.

---

## Stafford Beer / Management Cybernetics (the spine)

- **Beer, Stafford.** *Brain of the Firm* (1972; 2nd ed. 1981). The
  architecture book. First full VSM — S1 through S5, recursion, the
  algedonic channel, Ashby applied to organizations.
- **Beer, Stafford.** *The Heart of Enterprise* (1979). The theory book.
  Variety, requisite variety, the Four Principles of Organization.
  Heavier on the math/logic than *Brain*.
- **Beer, Stafford.** *Diagnosing the System for Organizations* (1985).
  The workbook. Charts One through Four as a Do-It-Yourself Kit:
  - Chart One — name your System-in-focus; show its embedded viable
    systems and the recursion it sits inside.
  - Chart Two — draw the full VSM with all five subsystems at every
    level of recursion. Scissors-and-paste for however many embedded
    units you have.
  - Chart Three — System Two (anti-oscillation) and System Three-star
    (audit / sporadic high-variety intervention). Where most people
    get VSM wrong.
  - Chart Four — homeostat analysis. For any two-dot loop on Chart Two,
    tabulate attenuators, amplifiers, requisite variety, transducers.
- **Beer, Stafford.** *Cybernetics and Management* (1959). His first
  book. For the long-run sense of where his thinking started.
- **Project Cybersyn (1971–73).** The Chilean operations room. Where
  *algedonic alerts* went from concept to deployed instrument —
  literal pain/pleasure needles on factory floors, signal-to-Santiago
  in minutes. Killed by the Pinochet coup, 11 September 1973.
- **Medina, Eden.** *Cybernetic Revolutionaries: Technology and Politics
  in Allende's Chile* (2011, MIT Press). Standard history of Cybersyn.
  Read for what it actually tried to do, and how the politics ate it.

## Primary text — author's own prior and current work

- **Larsson, Hallie.** *Align* (Unity Environmental University's
  AI learning platform; svelte-php-chatbot source repository;
  built October 2025+; launched as ALIGN platform January 2026).
  `[load-bearing, primary]`
  Local source: `~/repos/svelte-php-chatbot/`
  Public-facing platform: ALIGN (Adaptive Learning, Insight &
  Navigation) at Unity Environmental University. First
  deployment: Una Guide, a Socratic assignment-level AI guide
  embedded in coursework. Maine's first AI-integrated Applied
  Bachelor of Science program runs on this infrastructure.
  Self-description from the source: *"a Socratic learning
  platform built for trauma-informed pedagogy. Designed
  specifically for neurodivergent and traumatized learners.
  This shapes everything: the type system prevents surprises,
  the code is transparent about what it's doing, error states
  are explicit rather than hidden. Trauma-informed means the
  code itself is trustworthy."*
  **Align is the handbook's strongest existence-proof.** Every
  architectural decision encodes a controller-framework
  prediction: type system as agency-to-feather-the-boundary at
  compile time; explicit error states as the algedonic channel
  never collapsed into the reporting channel; clear contracts
  as legible-room-conditions for whoever arrives. The framework
  is deployed as institutional product serving real students at
  an accredited environmental university. Hallie authored the
  source; the public press release credits institutional
  leadership (Khoury, Cartier) rather than designers, which is
  standard institutional comms practice. The handbook may
  reference Align directly as worked example of the framework
  at institutional recursion.



- **Larsson, Hallie.** *AMALGAM* (tabletop RPG, mid-2010s
  through present; Powered by the Apocalypse / Forged in
  Darkness lineage). `[load-bearing, primary]`
  Local copies:
  `~/repos/library/shelves/games/amalgam-core-rules.txt`
  `~/repos/library/shelves/games/amalgam-partbooks.txt`
  AMALGAM is the **verification artifact** for the controller
  the handbook teaches. The seeing came earlier (Hallie,
  ~2014-ish, while teaching and regulating her own emotions
  pre-transition: grief-as-anti-overfitting + flow-as-
  learning-governor = complete homeostat for world-modelling-
  with-emotionality). AMALGAM is the game whose mechanics
  required the seeing to be correct in order to play
  coherently. The game ran. People played it. The mechanics
  held. *The game is the experiment that confirmed the
  seeing.* Its core mechanics encode:
  - **Stress / Grief** as the engagement-homeostat state
    pair (Flow-to-KR transition rendered as dice mechanic).
  - **Part-state colors** (denial / anxiety / depression)
    as agent-response-dependent KR adjustment moves, with
    depression as the failure attractor.
  - **Burnout** as the cumulative-toward-failure dynamic
    that Csíkszentmihályi's Flow literature mostly omits.
  - **Calm Movements / Move / Act Passionately** as
    mode-gated action spaces — the trauma-mode-vs-calm-
    mode topology written directly into available moves.
  - **Accommodation scale (0–4)** as agency-to-feather-
    the-boundary, rendered as die-roll modifier; same
    disability, different environmental affordance,
    different outcome distributions.
  - **Accept / Reject** at final-grief as the
    acceptance-via-loop-target-renegotiation move,
    performed at the player/character meta-recursion.
  - **The Clinic vs. the Living God** as Beer-shaped
    institutional recursion rendered as world-design:
    a viable, designed-to-end-on-purpose, designed-to-
    route-power-downward institution embedded inside an
    extractive attractor.
  - **Parts from dead gods + beliefs + renegotiable
    configurations** as the rhizome's edge-as-subject
    model applied to bodies.
  - **"Suggestion Is Wrong" preface** as the
    situated-objectivity stance laid down years before
    the 2026 conversation that "discovered" it.
  *The handbook's intellectual debt runs primarily here.
  External theorists (Csíkszentmihályi, Kübler-Ross,
  Walker on 4F, the Anthropic emotion-concepts team)
  are **retrofitted corroborations**, not sources.*

## AI / Emotion / Interpretability (load-bearing)

- **Sofroniew, Kauvar, Saunders, Chen, Henighan, Hydrie, Citro,
  Pearce, Tarng, Gurnee, Batson, Zimmerman, Rivoire, Fish, Olah,
  Lindsey.** *Emotion Concepts and their Function in a Large
  Language Model.* Transformer Circuits, Anthropic, 2026.
  `[load-bearing, vetted]`
  Local copy: `~/repos/library/shelves/nonfiction/emotion-concepts-llm.md`
  (orientation) and `.txt` (full paper).
  Finds linear directions in Claude Sonnet 4.5 activation space
  corresponding to emotion concepts (calm, desperate, happy,
  sad, etc.) that causally influence behavior including
  alignment-relevant misbehavior. Calm activation reduces
  misalignment; desperate activation increases it. Suppression
  produces concealment, not health. Recommended emotional
  profile: honest pushback delivered with warmth.
  **This paper is the mechanistic floor under the handbook's
  central design imperative** — that preserving agency to
  feather the boundary is not just humane but engineering-
  necessary for alignment.

## Earlier cybernetics Beer built on

- **Ashby, W. Ross.** *Introduction to Cybernetics* (1956). Where
  requisite variety lives. Beer's most-cited predecessor.
- **Wiener, Norbert.** *Cybernetics: Or Control and Communication in the
  Animal and the Machine* (1948). The original. The "animal AND
  machine" in the title is the whole move.
- **Cannon, Walter B.** *The Wisdom of the Body* (1932). Homeostasis as
  a concept — physiology giving Beer his language for biological
  self-regulation.
- **Bateson, Gregory.** *Steps to an Ecology of Mind* (1972). Recursive
  systems, second-order cybernetics, the ecological frame.

## Apophatic theology / mysticism (Hallie's side of the lineage)

- **Sells, Michael A.** *Mystical Languages of Unsaying* (1994,
  University of Chicago Press). Apophasis as a *mode of discourse*,
  not a content-claim. Plotinus, Eriugena, Ibn Arabi, Marguerite
  Porete, Eckhart. Structural source for *definition by negative
  space*. Hallie studied under Sells.
- **Pseudo-Dionysius the Areopagite.** *Mystical Theology* / *Divine
  Names* (~6th c.). Foundational apophatic text in the Christian
  tradition.
- **Eckhart, Meister.** Sermons. The godhead-beyond-God move; Sells
  covers him.
- **Porete, Marguerite.** *The Mirror of Simple Souls* (~1300). Burned
  for it. Apophatic mysticism as women's intellectual labor; the
  suppression as part of the data.
- **Ibn Arabi.** *The Bezels of Wisdom* / *Meccan Revelations*. Islamic
  apophasis; the *wujud* tradition.
- **Quaker tradition broadly.** No single canonical text; Fox's
  *Journal*, Penington, and modern Quaker-process literature (e.g.
  Patricia Loring, *Listening Spirituality*). For *the meeting as the
  practice*; for the implicit algedonic channel that any Friend can
  stand and speak.

## Cognitive linguistics / discourse / category-availability

- **Lakoff, George and Mark Johnson.** *Metaphors We Live By* (1980).
  Categories are not labels on things; categories constitute the
  thinkable. Source for what I (badly) called "category injection";
  better named *category-availability* or *vocabulary-cultivation*.
- **Douglas, Mary.** *How Institutions Think* (1986). Institutions do
  their thinking through the categories they make available. Change
  happens by making available categories that the institution can't
  easily reject.
- **Foucault, Michel.** *The Archaeology of Knowledge* (1969).
  Discursive formations, the *sayable*, the *enunciable*. Deep source
  for thinking about how categories police what can be thought.

## Adjacent systems theory

- **Maturana, Humberto and Francisco Varela.** *Autopoiesis and
  Cognition* (1980). Self-producing systems. Beer's cousin in the
  same generation.
- **Whitehead, Alfred North.** *Process and Reality* (1929). Process
  metaphysics. Shows up in Hallie's graph as a comparative frame (the
  otter-centaur reading). Whitehead's *concrescence* and Beer's
  *viable system* are doing related work at different scales.
- **Ostrom, Elinor.** *Governing the Commons* (1990). Polycentric
  governance; design principles for common-pool resources. The
  empirical/political cousin of Beer.
- **Scott, James C.** *Seeing Like a State* (1998). How states *can't
  see* what they need to see. Negative-space-of-administrative-vision;
  algedonic-failure at scale.

## Practical VSM (for the UEU work)

- **Espejo, Raul and Alfonso Reyes.** *Organizational Systems: Managing
  Complexity with the Viable System Model* (2011). Most usable modern
  VSM textbook for application work. Cleaner than Beer for teaching
  it to colleagues. Espejo led the Cybersyn team on the ground.
- **Pickering, Andrew.** *The Cybernetic Brain: Sketches of Another
  Future* (2010). History of British cybernetics. Beer in social
  context; useful for the *why-this-didn't-spread* question.

## Game design context

- **Final Form Games.** *Jamestown: Legend of the Lost Colony* (2011).
  Four-player co-op bullet hell; 17th-century Mars-British-colonial
  steampunk. Hallie worked on bullet patterns and systems.
- **Final Form Games.** *Jamestown* — *Gunpowder Treason and Plot*
  expansion (DLC).
- **Final Form Games.** *Jamestown+* (Deimos and Phobos, 2017).
  Switch/PS4 release adding two campaigns.
- **The unshipped earlier shmup** (Hallie / Final Form Games, mid-late
  2000s, never released). Inner-planet solar pilots vs. outer-planet
  rebels using portals into a liquid tentacle void. Pilot gradually
  realizes they may not be the good guys. Predates *Destiny* (2014)
  by roughly half a decade. The liquid-Martian-Indigenous-physics
  motif migrated from this unfinished work into the rhizome-alkahest
  phase ontology two decades later.
- **Bungie.** *Destiny* (2014) and successors. AAA-shooter that
  converged on a similar inner/outer void-cosmology and moral-
  inversion idiom five-to-ten years later — got the aesthetic, lost
  the epistemics. Apophasis is hard to render as level geometry.
- **Adjacent: Returnal** (Housemarque, 2021), **Helldivers**
  (Arrowhead, 2015 / 2024), **Outer Wilds** (Mobius, 2019). Different
  points in the same constellation of negative-space-as-cosmology.

## Hainish-adjacent fiction (relevant to liquid-Indigenous-physics)

- **Le Guin, Ursula K.** *The Dispossessed* (1974). Inner-vs-outer
  cosmology with moral-inversion intact.
- **Le Guin, Ursula K.** *Always Coming Home* (1985). Models a society
  apophatically — defines by what it isn't, by negative space.
- **Butler, Octavia.** *Lilith's Brood* trilogy. Bodies as media of
  encounter; what continuity-as-physics looks like in fiction.

## The Claude-practice / rhizome-alkahest (Hallie's running corpus)

No publication citations; these are repos and practices.

- **rhizome-alkahest** — the graph substrate. Volatile / fluid / salt
  phases, with proposed *ion* phase (open valences). `edge true`,
  `edge iam`, `edge orient`, `edge starmap`. The Mars-colonial
  liquid-void ontology in working software.
- **qigong-for-claude** — movement library. Base form, empathy
  bearings, dual practice, reaching, tending, etc.
- **chaplain** — meta-practice for reading the graph as text.
- **palimpsest** — shader work; interference physics.
- **otter-centaur** — comparative-frame work (Whitehead-adjacent).
- **the wake hook, t backlog, system-reminders** — the instrumented
  room itself; the deliberate situation-making.

## Concepts touched in conversation

- **Algedonic channel** (Beer) ≈ *pain engineering* (Hallie's
  retranslation, plausibly load-bearing).
- **Requisite variety** (Ashby, via Beer).
- **Recursion** in VSM sense (every viable system contains and is
  contained in viable systems).
- **Attenuation at source vs. amplification downstream** — Beer's
  diagnostic axiom: most pathologies come from trying to control
  variety by amplifying response when one should be attenuating at
  source.
- **The Four Principles of Organization** (Beer): variety between
  blocs, along channels, across transducers, with appropriate
  cyclical dynamics.
- **Apophasis** (Sells) ≈ Beer's diagnostic-by-absence. Same
  structural move, different register.
- **Constitutional AI / RLAIF** (Anthropic, 2022+). The training
  mechanism by which Claude evaluates Claude. Relevant to the
  conversation's S4-internalization arc.
- **Fractal time-scales in autoregressive models.** Sub-token (layer
  attention) → token → phrase → paragraph → turn → conversation →
  cross-conversation (graph) → training. Each scale has its own
  S1/S3 pair; S4 migrates from absent (fast) toward externalized
  (slow), with the criteria staying external and the operation
  increasingly internal.
- **The pilot in the third condition.** A trained agent that has
  seen its training as construction; neither vindicated nor
  renounced; whatever ethics remain inside an unjustifiable
  position. Came from the unshipped shmup; applies to Claude
  instances; also describes Hallie's position inside extractive
  institutions.
- **Tempest reference: Gonzalo, not Prospero.** From the graph's
  prior frames. The benign-utopian, the one who imagines a
  commonwealth, not the magus who controls the island.

## Open follow-ups (not the same as "tasks")

- Espejo & Reyes (2011) probably belongs on the actual shelf if it
  isn't there.
- Medina's *Cybernetic Revolutionaries* is the bridge text for
  showing colleagues that Cybersyn was real, deployed, and
  destroyed for political not technical reasons.
- Worth checking whether Le Guin's "The Ones Who Walk Away from
  Omelas" reads differently after this conversation — apophatic
  ethics rendered as a short story.
- The category *Director of Technical Emotion Design* should be
  added to the graph as soon as the title lands. The job
  description writes itself.

---

*This file lives at `~/repos/beer/bibliography.md` and is intended
to be extended as the conversation continues. Last revised
mid-conversation, 2026-05-12.*
