
import { IngestedDocument } from '../../types';

const conceptLink = (id: string, text: string) => 
  `<span data-concept="${id}" class="text-blood-red underline cursor-help decoration-solid decoration-2 underline-offset-4 hover:bg-amber-500/10 transition-colors px-1 rounded">${text}</span>`;

export const tacticalLexicon: IngestedDocument[] = [
  {
    id: "dead-mans-switch",
    title: "Dead Man's Switch",
    type: "technique",
    themes: ["deterrence", "legal", "security"],
    excerpt: "A pre-emptive legal deterrent functioning as a 'Bait Shield'. It ensures accountability if the operative is silenced.",
    rawContent: `<h2>Mutually Assured Exposure</h2>
    <p>The Dead Man's Switch is a non-negotiable insurance policy. It involves a pre-executed legal agreement that automatically releases the complete ${conceptLink('breadcrumb-web', 'Breadcrumb Web')} archive to a designated third party (attorney/media) upon a 'Silence Threshold' (e.g., 72 hours offline).</p>
    <h3>Psychological Deterrent</h3>
    <p>It shifts operational risk to the Orchestrator. By guaranteeing exposure regardless of the target's fate, it neutralizes the incentive for physical escalation.</p>`,
    linksTo: ["breadcrumb-web", "warfare-manual", "infiltrators-playbook"],
    metadata: { date: "2025-01-10", classification: "restricted" }
  },
  {
    id: "tactical-pause",
    title: "The Tactical Pause",
    type: "technique",
    themes: ["cognitive-defense", "response-control", "mindset"],
    excerpt: "A cognitive circuit breaker implemented immediately upon detecting provocation to override the limbic system.",
    rawContent: `<h2>Stop. Breathe. Focus.</h2>
    <p>The Tactical Pause is essential mental armor against ${conceptLink('exploitation-cycle', 'Engineered Outrage')}. It forces a shift from impulsive System 1 processing to analytical System 2 thought.</p>
    <p>This protocol denies the adversary the emotional reaction they require to fuel the ${conceptLink('forensic-pathology', 'Justification Engine')}.</p>`,
    linksTo: ["inner-game", "forensic-pathology", "soft-probe"],
    metadata: { date: "2025-01-12", classification: "unclassified" }
  },
  {
    id: "narrative-shockwave",
    title: "Narrative Shockwave",
    type: "technique",
    themes: ["counter-offensive", "public-relations", "disruption"],
    excerpt: "The deliberate, rapid dissemination of a core narrative to overwhelm the adversary's distributed disinformation network.",
    rawContent: `<h2>Seizing Narrative Control</h2>
    <p>A pre-emptive strike that utilizes the ${conceptLink('content-as-record', 'Content-as-Record')} protocol. By releasing a comprehensive, evidence-based account, the target disorients unwitting operatives and forces the Orchestrator into a defensive posture.</p>`,
    linksTo: ["the-smear", "civilians-as-weapons", "ryanrealaf-analysis"],
    metadata: { date: "2025-02-01", classification: "restricted" }
  },
  {
    id: "blame-cascade",
    title: "The Blame Cascade",
    type: "theory",
    themes: ["social-trap", "manipulation", "group-dynamics"],
    excerpt: "A tactical protocol creating a situation with no 'good' outcome, forcing the target to accept responsibility for manufactured chaos.",
    rawContent: `<h2>The No-Win Scenario</h2>
    <p>An ${conceptLink('asymmetric-threat-model', 'Unwitting Operative')} is leveraged to initiate a public blame sequence. If the target defends themselves, they look heartless; if they accept it, they validate the ${conceptLink('the-smear', 'Smear')}.</p>`,
    linksTo: ["the-smear", "civilians-as-weapons", "the-social-test"],
    metadata: { date: "2025-02-15", classification: "confidential" }
  },
  {
    id: "atmospheric-intelligence",
    title: "Atmospheric Intelligence",
    type: "theory",
    themes: ["intuition", "pattern-recognition", "survival"],
    excerpt: "Refined environmental pattern recognition allowing perception of subtle, pre-cognitive shifts signaling an impending setup.",
    rawContent: `<h2>The Vibration</h2>
    <p>Atmospheric shifts are not paranoia; they are subconscious pre-computation of threat. Recognizing the 'weird silence' or the 'twitchy urge' allows the target to smell the setup hours before it drops.</p>`,
    linksTo: ["inner-game", "soft-probe", "ryan-overview"],
    metadata: { date: "2025-03-01", classification: "confidential" }
  },
  {
    id: "beta-bros",
    title: "The Beta Bros",
    type: "narrative",
    themes: ["pacific-beach", "conflict", "skit"],
    excerpt: "A threatening group of 'normies' in Pacific Beach rebranded through a collaborative skit with Lacey.",
    rawContent: `<h2>Rebranding the Threat</h2>
    <p>Ryan and Lacey collaborated to rebrand a group of hostile individuals in Pacific Beach as 'Beta Bros,' mocking them for macing homeless people while they sleep. This was a 'double down' strategy—turning fear into content and ridicule.</p>`,
    linksTo: ["lacey-relationship", "ryan-overview", "civilians-as-weapons"],
    metadata: { date: "2024-08-20", classification: "unclassified" }
  },
  {
    id: "circle-k-incident",
    title: "The Circle K Incident",
    type: "narrative",
    themes: ["gut-feeling", "premonition", "setup"],
    excerpt: "A specific event where a physical sensation—a tightness in the gut—immediately preceded a deliberately engineered accusation.",
    rawContent: `<h2>The Body as Barometer</h2>
    <p>The Circle K incident serves as a case study for ${conceptLink('atmospheric-intelligence', 'Atmospheric Intelligence')}. The feeling wasn't random; it was a premonition of a deliberate setup, turning intuition into a verifiable data point.</p>`,
    linksTo: ["inner-game", "soft-probe", "forensic-pathology"],
    metadata: { date: "2024-11-15", classification: "confidential" }
  },
  {
    id: "institutional-weaponization",
    title: "Institutional Weaponization",
    type: "theory",
    themes: ["bureaucracy", "law-enforcement", "co-option"],
    excerpt: "Exploiting formal power structures and bureaucratic processes to restrict a target's freedom and reinforce a false narrative.",
    rawContent: `<h2>Legitimacy by Proxy</h2>
    <p>Orchestrators file anonymous tips to trigger ${conceptLink('civilians-as-weapons', 'Official Inquiries')}. The goal is to use the police presence itself to create a public narrative of suspicion and implied guilt, independent of any actual crime.</p>`,
    linksTo: ["warfare-manual", "the-smear", "civilians-as-weapons", "lacey-relationship"],
    metadata: { date: "2025-02-28", classification: "restricted" }
  },
  {
    id: "strategic-silence",
    title: "Strategic Silence",
    type: "technique",
    themes: ["defense", "disengagement", "power"],
    excerpt: "Refusing to engage, explain, or defend when baited to break the adversary's operational rhythm.",
    rawContent: `<h2>The Vacuum of Information</h2>
    <p>By denying the ${conceptLink('asymmetric-threat-model', 'Orchestrator')} the reactive fuel they need, Strategic Silence starves the ${conceptLink('exploitation-cycle', 'Feedback Loop of Attrition')}. It forces the adversary to expose their hand by escalating to more overt, documentable attacks.</p>`,
    linksTo: ["tactical-pause", "infiltrators-playbook", "forensic-pathology"],
    metadata: { date: "2025-01-25", classification: "unclassified" }
  },
  {
    id: "pattern-framing",
    title: "Pattern Framing",
    type: "theory",
    themes: ["reframing", "manipulation", "narrative"],
    excerpt: "Selectively highlighting and re-contextualizing innocent, routine behaviors into a sinister 'pattern' of activity.",
    rawContent: `<h2>Manufacturing Menace</h2>
    <p>A target's consistent walking route or frequent visits to a store are described to authorities as 'stalking' or 'casing'. This reframes innocent routine as evidence of malevolence.</p>`,
    linksTo: ["the-smear", "institutional-weaponization", "forensic-pathology"],
    metadata: { date: "2025-03-05", classification: "restricted" }
  },
  {
    id: "cognitive-inoculation",
    title: "Cognitive Inoculation",
    type: "theory",
    themes: ["resilience", "psychology", "defense"],
    excerpt: "Building resistance to persuasion by exposing individuals to weakened versions of manipulative arguments.",
    rawContent: `<h2>Vaccinating the Mind</h2>
    <p>A communication theory applied to ${conceptLink('street-psychology-101', 'Street Defense')}. By understanding the mechanics of the ${conceptLink('soft-probe', 'Soft Probe')} and ${conceptLink('gaslighters-delight', 'Gaslighting')}, the target builds attitudinal resistance against future, stronger persuasive attacks.</p>`,
    linksTo: ["street-psychology-101", "inner-game", "warfare-manual"],
    metadata: { date: "2025-03-10", classification: "unclassified" }
  },
  {
    id: "justification-engine",
    title: "The Justification Engine",
    type: "technique",
    themes: ["manipulation", "gaslighting", "escalation"],
    excerpt: "A protocol where the target's defensive reactions are weaponized to justify further aggression.",
    rawContent: `<h2>Weaponizing Defense</h2>
    <p>Any attempt by the target to clarify or explain a provocation is immediately reframed as an admission of guilt or sign of instability. This fuels the ${conceptLink('exploitation-cycle', 'Attrition Loop')}, placing the target in a no-win scenario where silence is admission and defense is volatility.</p>`,
    linksTo: ["forensic-pathology", "tactical-pause", "exploitation-cycle"],
    metadata: { date: "2025-03-12", classification: "restricted" }
  },
  {
    id: "rapport-as-a-weapon",
    title: "Rapport as a Weapon",
    type: "technique",
    themes: ["infiltration", "betrayal", "intelligence"],
    excerpt: "The deliberate building of trust and emotional intimacy for the sole purpose of compromising defenses.",
    rawContent: `<h2>Psychological Infiltration</h2>
    <p>Access Agents use techniques like ${conceptLink('soft-probe', 'Confession-as-Cover')} to extract sensitive information. By mirroring the target's wounds, they bypass natural defenses to build a ${conceptLink('vulnerability-dossier', 'Vulnerability Dossier')} used for later exploitation.</p>`,
    linksTo: ["asymmetric-threat-model", "soft-probe", "skittlez-relationship"],
    metadata: { date: "2025-01-05", classification: "confidential" }
  },
  {
    id: "fog-of-attrition",
    title: "The Fog of Attrition",
    type: "theory",
    themes: ["psychology", "disorientation", "stress"],
    excerpt: "A state of psychological disorientation where the target loses the ability to distinguish threats.",
    rawContent: `<h2>Compromised Threat Assessment</h2>
    <p>Sustained ${conceptLink('warfare-manual', 'Psychological Attrition')} creates a cognitive haze. The target, exhausted by constant micro-aggressions, loses the ability to distinguish between legitimate major threats and minor benign annoyances, leading to errors in judgment.</p>`,
    linksTo: ["forensic-pathology", "warfare-manual", "neurobiological-sequelae"],
    metadata: { date: "2025-03-14", classification: "restricted" }
  },
  {
    id: "acoustic-containment",
    title: "Acoustic Containment",
    type: "technique",
    themes: ["suppression", "noise", "censorship"],
    excerpt: "The coordinated deployment of 'noise' to drown out the target's voice and counter-narrative.",
    rawContent: `<h2>Degrading the Signal</h2>
    <p>Orchestrators flood the public discourse with rumors, distractions, and irrelevant controversy. This lowers the ${conceptLink('ryanrealaf-analysis', 'Signal-to-Noise Ratio')}, making it impossible for the target's truth to be heard without direct censorship.</p>`,
    linksTo: ["the-smear", "civilians-as-weapons", "street-psychology-101"],
    metadata: { date: "2025-03-15", classification: "restricted" }
  },
  {
    id: "vulnerability-dossier",
    title: "The Vulnerability Dossier",
    type: "theory",
    themes: ["intelligence", "profiling", "weak-points"],
    excerpt: "A detailed intelligence file mapping a target's trauma, fears, and emotional sensitivities.",
    rawContent: `<h2>Mapping the Soul</h2>
    <p>Compiled by Access Agents, this dossier documents specific triggers—not for empathy, but for tactical utility. It identifies ${conceptLink('inner-game', 'Core Insecurities')} and ${conceptLink('lacey-relationship', 'Relational Fault Lines')} to create high-leverage threats.</p>`,
    linksTo: ["asymmetric-threat-model", "soft-probe", "inner-game"],
    metadata: { date: "2025-01-20", classification: "confidential" }
  },
  {
    id: "c2-by-insinuation",
    title: "C2 by Insinuation",
    type: "theory",
    themes: ["command-control", "plausible-deniability", "leadership"],
    excerpt: "Command and Control exerted through subtle cues and leading questions rather than direct orders.",
    rawContent: `<h2>The Invisible Hand</h2>
    <p>The ${conceptLink('asymmetric-threat-model', 'Orchestrator')} manages the network by asking seemingly innocent questions like 'Has anyone noticed X acting strangely?' This plants a seed that ${conceptLink('civilians-as-weapons', 'Unwitting Operatives')} then cultivate into a narrative on their own.</p>`,
    linksTo: ["asymmetric-threat-model", "civilians-as-weapons", "warfare-manual"],
    metadata: { date: "2025-02-10", classification: "restricted" }
  },
  {
    id: "digital-reputation-blockade",
    title: "Digital Reputation Blockade",
    type: "technique",
    themes: ["suppression", "technology", "erasure"],
    excerpt: "A comprehensive strategy to ensure the target's counter-narrative is completely inaccessible.",
    rawContent: `<h2>Algorithmic Erasure</h2>
    <p>The culmination of the suppression phase. This involves search engine manipulation and coordinated mass reporting to shadowban the target, effectively turning them into a ghost in the digital realm.</p>`,
    linksTo: ["the-smear", "ryanrealaf-analysis", "acoustic-containment"],
    metadata: { date: "2025-03-18", classification: "restricted" }
  }
];
