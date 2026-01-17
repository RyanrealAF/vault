import { IngestedDocument } from '../../types';

export const unseenWarBriefing: IngestedDocument = {
  id: "unseen-war-briefing",
  title: "Unseen War: Strategic Briefing",
  type: "analysis",
  themes: ["briefing", "non-kinetic-warfare", "counter-intel"],
  excerpt: "A synthesis of insights outlining a comprehensive framework for surviving the 'Unseen War'.",
  linksTo: ["warfare-manual", "asymmetric-threat-model", "honeypot-doctrine", "exploitation-cycle", "infiltrators-playbook"],
  metadata: {
    date: "2025-03-16",
    classification: "restricted"
  },
  rawContent: `
    <h2>Executive Summary</h2>
    <p>The "Unseen War" prioritizing maximum impact with minimal attributable trace. This operation utilizes <span data-concept="warfare-manual" class="text-blood-red underline">Non-Kinetic Maneuver</span> to achieve strategic objectives.</p>

    <h3>Operational Synergy</h3>
    <p>The <strong>RyanrealAF</strong> brand serves as the weaponized origin story. The "realAF" provides the raw footage, while "The Game Unseen" series provides the cold, hard <span data-concept="asymmetric-threat-model" class="text-blood-red underline">Battlefield Analysis</span>.</p>

    <p>Objective: Flip the board by transforming from a passive victim into a <strong>proactive counter-intelligence operative</strong>. Success requires mastering the <span data-concept="exploitation-cycle" class="text-blood-red underline">Exploitation Cycle</span> and deploying the <span data-concept="infiltrators-playbook" class="text-blood-red underline">Infiltrator's Playbook</span>.</p>
  `
};
