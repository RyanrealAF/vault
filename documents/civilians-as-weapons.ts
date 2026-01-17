import { IngestedDocument } from '../../types';

export const civiliansAsWeapons: IngestedDocument = {
  id: "civilians-as-weapons",
  title: "Civilians as Weapons",
  type: "theory",
  themes: ["social-engineering", "surveillance", "civilian-weaponization"],
  excerpt: "Exploring the sophisticated strategies behind the weaponization of everyday individuals in targeted influence operations.",
  linksTo: ["warfare-manual", "the-smear", "forensic-pathology", "the-social-test"],
  metadata: {
    date: "2025-02-10",
    classification: "restricted"
  },
  rawContent: `
    <h2>1. Introduction: The Silent Soldiers</h2>
    <p>In hyper-connected societies, orchestrated smear campaigns rely on local faces—neighbors, baristas, colleagues—who unknowingly become tactical assets in psychological takedowns.</p>
    
    <h3>2. Mechanisms of Conscription</h3>
    <ul>
      <li><strong>Authenticity Leverage:</strong> Neighbors are seen as neutral. Their voices hold more social weight than digital avatars.</li>
      <li><strong>Deniable Diffusion:</strong> Decentralized suspicion allows orchestrators to remain hidden while each asset plays a small part.</li>
    </ul>

    <h3>3. Warning Indicators</h3>
    <p>Look for <span data-concept="pattern-framing" class="text-blood-red underline">Pattern Framing</span>: sudden spikes in secondhand anecdotes or parallel phrasing. See <span data-concept="the-social-test" class="text-blood-red underline">The Social Test</span> for narrative documentation of this phase.</p>
  `
};
