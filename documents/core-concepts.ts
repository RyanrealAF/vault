
import { IngestedDocument } from '../../types';

const conceptLink = (id: string, text: string) => 
  `<span data-concept="${id}" class="text-blood-red underline cursor-help decoration-solid decoration-2 underline-offset-4 hover:bg-amber-500/10 transition-colors px-1 rounded">${text}</span>`;

export const coreConcepts: IngestedDocument[] = [
  {
    id: "breadcrumb-web",
    type: "technique",
    title: "The Breadcrumb Web",
    themes: ["counter-surveillance", "evidence-mesh", "BCW"],
    excerpt: "The core administrative survival protocol: converting proximity and patterns into irrefutable evidence.",
    rawContent: `<h2>The Architecture of Accountability</h2>
<p>The Breadcrumb Web is a meticulously engineered evidence network that transforms scattered observations into an impervious record. By documenting ${conceptLink('soft-probe', 'Nodes')} and their ${conceptLink('asymmetric-threat-model', 'Branches')}, the subject moves from passive victim to proactive field analyst.</p>
<h3>Operational Core</h3>
<p>Unlike a linear trail, the Web detects ${conceptLink('exploitation-cycle', 'Operational Signatures')} by mapping the synchronization of multiple independent processes across time and geography. This forms the data layer for the ${conceptLink('multi-trail-forensic-approach', 'Multi-Trail Forensic Approach')}.</p>`,
    linksTo: ["exploitation-cycle", "warfare-manual", "soft-probe", "asymmetric-threat-model", "multi-trail-forensic-approach"],
    metadata: { date: "2024-06-01", classification: "restricted" }
  },
  {
    id: "jess-forensic-analysis",
    type: "narrative",
    title: "Jess: Relational Duality",
    themes: ["accountability-disorder", "darvo", "eviction"],
    excerpt: "Forensic analysis of a bond defined by lifelong friendship and the weaponization of housing dependency.",
    rawContent: `<h2>The Christmas Eve Escalation</h2>
<p>The relationship with Jess reveals a core paradox: a foundational friend who consistently employed ${conceptLink('exploitation-cycle', 'DARVO tactics')} to evade accountability. This case study provides the primary evidence for the ${conceptLink('the-smear', 'Social Exile')} protocol, where a benign request for connection was reframed as a punishable transgression.</p>`,
    linksTo: ["the-smear", "inner-game", "lacey-relationship", "exploitation-cycle", "soft-probe", "skittlez-relationship", "authenticity-manifesto"],
    metadata: { date: "2024-12-24", classification: "confidential" }
  },
  {
    id: "skittlez-relationship",
    type: "narrative",
    title: "[The Access Agent]: The Trauma Twin",
    themes: ["loyalty", "trauma-twin", "systemic-betrayal"],
    excerpt: "A bond defined by shared hardship and unconditional loyalty, contrasting the transactional nature of manipulated networks.",
    rawContent: `<h2>Trauma Twins Navigating Chaos</h2>
<p>The relationship with [The Access Agent] represents a non-traditional kinship structure. Ryan describes it as being 'more like trauma twins navigating the chaos' rather than a standard friendship or romance. Despite the ${conceptLink('asymmetric-threat-model', 'Systemic Pressures')}, Ryan demonstrated profound loyalty—walking 16 hours to reach her when she was in distress. This relationship serves as the benchmark for ${conceptLink('authenticity-manifesto', 'Authentic Loyalty')} over performative perfection.</p>`,
    linksTo: ["authenticity-manifesto", "soft-probe"],
    metadata: { date: "2024-01-01", classification: "confidential" }
  },
  {
    id: "asymmetric-threat-model",
    type: "theory",
    title: "The HUMINT Network",
    themes: ["C2", "intelligence", "handlers"],
    excerpt: "Deconstructing the tiered structure of modern psychological operations.",
    rawContent: `<h2>Tiered Command and Control</h2>
<p>Psychological operations require a networked HUMINT unit. The Orchestrator remains invisible, managing the ${conceptLink('soft-probe', 'Access Agents')} through insinuation. This model achieves ${conceptLink('inner-game', 'Reality Erosion')} by ensuring the attack appears to originate from a collective, organic source rather than a centralized command.</p>`,
    linksTo: ["exploitation-cycle", "inner-game", "soft-probe", "the-smear", "infiltrators-playbook", "multi-trail-forensic-approach"],
    metadata: { date: "2024-01-01", classification: "restricted" }
  },
  {
    id: "lacey-relationship",
    type: "narrative",
    title: "Lacey: Pure Gold to Streets",
    themes: ["foundational-bedrock", "CPS-trauma", "recovery"],
    excerpt: "The ultimate benchmark for connection, lost to systemic pressure.",
    rawContent: `<h2>The Foundational Bedrock</h2>
<p>Ryan's relationship with Lacey was the Ultimate Benchmark for authenticity. Its destruction via ${conceptLink('asymmetric-threat-model', 'Systemic Pressure')} and CPS surveillance created the foundational wound that the ${conceptLink('authenticity-manifesto', 'Authenticity Manifesto')} was eventually built to protect.</p>`,
    linksTo: ["prison-experience", "authenticity-manifesto", "inner-game"],
    metadata: { date: "2015-01-01", classification: "confidential" }
  },
  {
    id: "prison-experience",
    type: "narrative",
    title: "The Cage as a Classroom",
    themes: ["GED-tutor", "leadership", "transformation"],
    excerpt: "How Ryan transformed incarceration into a platform for academic leadership.",
    rawContent: `<h2>Turning the Cage into a Classroom</h2>
<p>Ryan served three prison terms, turning the time into a job site as a tutor. This environment of high-stakes honesty and rigid power structures informed the ${conceptLink('authenticity-manifesto', 'Authenticity Ain’t Optional')} directive and provided the vocal grit found in tracks like ${conceptLink('still-here', 'Still Here')}.</p>`,
    linksTo: ["authenticity-manifesto", "still-here", "asymmetric-threat-model"],
    metadata: { date: "2013-01-01", classification: "unclassified" }
  },
  {
    id: "authenticity-manifesto",
    type: "theory",
    title: "Authenticity Ain't Optional",
    themes: ["sovereignty", "manifesto", "street-ethics"],
    excerpt: "The philosophical mandate for radical honesty as a necessary survival mechanism.",
    rawContent: `<h2>Narrative Sovereignty</h2>
<p>In the concrete canyons of Southern California, authenticity is a survival mechanism. This manifesto acts as a rigid cognitive firewall against ${conceptLink('inner-game', 'Gaslighting')} and the ${conceptLink('the-smear', 'Smear Campaigns')} that rely on the target hiding their truth. It is the cornerstone analyzed in ${conceptLink('ryanrealaf-analysis', 'Multifaceted Analysis of RyanrealAF')}.</p>`,
    linksTo: ["still-here", "ryanrealaf-analysis", "unseen-war-briefing"],
    metadata: { date: "2024-01-01", classification: "unclassified" }
  },
  {
    id: "exploitation-cycle",
    type: "theory",
    title: "The Exploitation Cycle",
    themes: ["reconnaissance", "profiling", "cascade"],
    excerpt: "Deconstructing the three-stage feedback loop of psychological attrition.",
    rawContent: `<h2>The Feedback Loop</h2>
<p>A continuous cycle beginning with ${conceptLink('soft-probe', 'Reconnaissance')}, escalating through targeted ${conceptLink('the-smear', 'Reputation Assassination')}, and terminating in functional ${conceptLink('inner-game', 'Cognitive Collapse')}. This cycle is clinical evidence of the damage detailed in ${conceptLink('forensic-pathology', 'Forensic Pathology')}.</p>`,
    linksTo: ["soft-probe", "inner-game", "warfare-manual", "forensic-pathology", "unseen-war-briefing", "multi-trail-forensic-approach"],
    metadata: { date: "2024-06-01", classification: "restricted" }
  },
  {
    id: "soft-probe",
    type: "technique",
    title: "The Soft Probe",
    themes: ["recon", "boundaries", "psych-soft-spots"],
    excerpt: "Benign interactions designed to gather intelligence without alerting the target.",
    rawContent: `<h2>Reconnaissance in the Gray</h2>
<p>Psychological probes, often disguised as casual favors or questions, collect data on ${conceptLink('asymmetric-threat-model', 'Soft Spots')}. These probes provide the raw data for the ${conceptLink('exploitation-cycle', 'Exploitation Cascade')}.</p>`,
    linksTo: ["inner-game"],
    metadata: { date: "2024-06-01", classification: "unclassified" }
  },
  {
    id: "inner-game",
    type: "theory",
    title: "The Inner Game",
    themes: ["intuition", "gaslighting", "mental-warfare"],
    excerpt: "The final battlefield: weaponizing the target's emotions against them.",
    rawContent: `<h2>Internal Sovereignty</h2>
<p>The mind is the final battlespace. Orchestrators use ${conceptLink('soft-probe', 'Atmospheric Shifts')} to sow seeds of doubt. The goal is to make the target question their own ${conceptLink('authenticity-manifesto', 'Sovereignty')}.</p>`,
    linksTo: ["still-here", "authenticity-manifesto"],
    metadata: { date: "2024-06-01", classification: "confidential" }
  },
  {
    id: "the-smear",
    type: "technique",
    title: "The Smear: Social Exile",
    themes: ["disinformation", "reputation", "sabotage"],
    excerpt: "The systematic destruction of public image through rumor dusting.",
    rawContent: `<h2>Reputation Assassination</h2>
<p>The smear leverages ${conceptLink('asymmetric-threat-model', 'Civilian Weaponization')} to distribute negative narratives. It is the tactical arm of the ${conceptLink('exploitation-cycle', 'Exploitation Cycle')}.</p>`,
    linksTo: ["soft-probe", "exploitation-cycle", "asymmetric-threat-model"],
    metadata: { date: "2024-06-01", classification: "unclassified" }
  },
  {
    id: "still-here",
    type: "song",
    title: "Still Here",
    themes: ["sonic-weapon", "memory", "rhythm"],
    excerpt: "A sonic signature designed to anchor the subject's narrative sovereignty.",
    rawContent: `<h3>Sonic Analysis</h3>
<p>A grounded rhythm section forged in the ${conceptLink('prison-experience', 'Cage')}, designed to stabilize the subject against ${conceptLink('inner-game', 'Internal Erosion')}. The refrain "Still Here" is the sonic embodiment of the ${conceptLink('authenticity-manifesto', 'Manifesto')}.</p>`,
    linksTo: ["prison-experience"],
    metadata: { date: "2024-06-01", classification: "unclassified" }
  }
];
