import { IngestedDocument } from '../../types';

export const streetPsych101: IngestedDocument = {
  id: "street-psychology-101",
  title: "Street Psychology 101",
  type: "theory",
  themes: ["curriculum", "defense-strategies", "mental-fortitude"],
  excerpt: "A raw, streetwise guide to understanding and outmaneuvering the hidden forces of social manipulation.",
  linksTo: ["warfare-manual", "exploitation-cycle", "inner-game", "the-social-test", "infiltrators-playbook", "unseen-war-briefing"],
  metadata: {
    date: "2025-03-10",
    classification: "unclassified"
  },
  rawContent: `
    <h2>Module: The Foundation</h2>
    <p>Defining social manipulation as a form of influence exploiting <span data-concept="soft-probe" class="text-blood-red underline">Vulnerabilities</span>. Understanding the difference between ethical influence and extractive manipulation.</p>

    <h3>Psychological Warfare Tactics</h3>
    <ul>
      <li><strong>Doppelganger Setups:</strong> Mirroring a target's style to stage discrediting events.</li>
      <li><strong>Weaponization of Rumors:</strong> Utilizing repetition to convert falsehoods into facts.</li>
      <li><strong>Decision Fatigue:</strong> Wearing down the target through chaos until they break.</li>
    </ul>

    <p>Evidence of these tactics in action can be found in <span data-concept="the-social-test" class="text-blood-red underline">The Social Test</span>. Reclaim control by <span data-concept="breadcrumb-web" class="text-blood-red underline">Documenting Relentlessly</span> and using tools like the <span data-concept="infiltrators-playbook" class="text-blood-red underline">Infiltrator's Playbook</span>. This material is a key component of the <span data-concept="unseen-war-briefing" class="text-blood-red underline">Unseen War Briefing</span>.</p>
  `
};
