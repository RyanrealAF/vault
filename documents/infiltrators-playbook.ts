
import { IngestedDocument } from '../../types';

export const infiltratorsPlaybook: IngestedDocument = {
  id: "infiltrators-playbook",
  title: "The Infiltrator's Playbook",
  type: "technique",
  themes: ["strategic-reversal", "tactical-kamikaze", "data-harvesting"],
  excerpt: "A guide for the one tired of being prey; transforming victimhood into offensive counter-intelligence.",
  linksTo: ["honeypot-doctrine", "breadcrumb-web", "authenticity-manifesto", "multi-trail-forensic-approach", "doctrine-archive"],
  metadata: {
    date: "2025-03-12",
    classification: "restricted"
  },
  rawContent: `
    <h2>Tactical Kamikaze Doctrine</h2>
    <p>Transition from defense to forcing the hit. This is <strong>Building While Bleeding</strong>: accepting the onset of <span data-concept="exploitation-cycle" class="text-blood-red underline">Psychological Attrition</span> to validate the adversary's operational signature.</p>

    <h3>The Inverse Triangulation Protocol</h3>
    <ul>
      <li><strong>Vulnerability Control:</strong> Deliberately deploying controlled, non-critical anxieties as bait.</li>
      <li><strong>Access Agent Acceptance:</strong> Treating agents as primary intelligence conduits rather than threats.</li>
    </ul>

    <p>The <span data-concept="breadcrumb-web" class="text-blood-red underline">Breadcrumb Web</span> is now an offensive weapon used to prove causality. This methodology is codified in the <span data-concept="multi-trail-forensic-approach" class="text-blood-red underline">Multi-Trail Forensic Approach</span> and stored in the <span data-concept="doctrine-archive" class="text-blood-red underline">Doctrine Archive</span>.</p>
  `
};
