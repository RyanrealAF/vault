
import { IngestedDocument } from '../../types';

export const socialTestNarrative: IngestedDocument = {
  id: "the-social-test",
  title: "The Social Test",
  type: "narrative",
  themes: ["san-diego", "loyalty-tests", "betrayal", "doppelganger"],
  excerpt: "A firsthand account of doppelganger mimicry, predetermined narratives, and the escalation from psychological probes to physical threats.",
  linksTo: ["honeypot-doctrine", "the-smear", "soft-probe", "exploitation-cycle", "civilians-as-weapons", "warfare-manual"],
  metadata: {
    date: "2024-06-12",
    classification: "confidential"
  },
  rawContent: `
    <h2>The Initial Setup: Doppelgangers in Orbit</h2>
    <p>It began with <span data-concept="skittlez-relationship" class="text-blood-red underline">[The Access Agent]</span> insisting I meet her friend, [The Proxy]. This initiated a pattern of <span data-concept="pattern-framing" class="text-blood-red underline">Proximal Impersonation</span>. [The Proxy]'s boyfriend would appear with a bike identical to mine (orange), or I would be gifted a hat only to see him wearing the same one shortly after.</p>
    <p>They weren't just being friendly; they were learning my mannerisms and habits. They made no real effort to hide it. They were building a mirror to confuse the signal.</p>

    <h2>The Debit-Card Probe</h2>
    <p>In San Diego, a woman gave me her debit card for an errand. Halfway through, she sent a text reminding me to 'bring back everything.' When I returned with every cent, she was inexplicably angry.</p>
    <p>The point wasn't for me to succeed; it was for me to fail. I was being set up to steal so that it would fit a predetermined <span data-concept="the-smear" class="text-blood-red underline">Folk Devil</span> narrative.</p>

    <h3>The 'CRUSH' Tactic: Escalation to Kinetic Threat</h3>
    <p>When soft probes failed to compromise my integrity, they deployed the 'CRUSH' tactic: <strong>Coercive Raid Upon Safety & Health</strong>.</p>
    <p>A handler demanded I enter a store and steal a shopping cart full of groceries. When I refused, citing my boundary against criminal activity, the mask slipped. She screamed, causing a scene, and delivered the ultimatum: <em>"You either go get it or the homies gonna deal with you, dude."</em></p>
    
    <p>This was no longer a game of manipulation; it was a kinetic threat. I became public enemy number one simply for refusing to validate their narrative of me as a criminal.</p>
  `
};
