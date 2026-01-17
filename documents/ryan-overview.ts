
import { IngestedDocument } from '../../types';

export const ryanOverview: IngestedDocument = {
  id: "ryan-overview",
  title: "Ryan: Forensic Overview",
  type: "narrative",
  themes: ["identity", "prison-transformation", "lacey-bedrock"],
  excerpt: "An integration of personal notes and academic analysis exploring the impact of systemic failure and betrayal.",
  linksTo: ["lacey-relationship", "prison-experience", "authenticity-manifesto", "breadcrumb-web-origin-story", "still-here", "unlikely-classroom", "system-reform", "skittlez-relationship"],
  metadata: {
    date: "2025-03-15",
    classification: "confidential"
  },
  rawContent: `
    <h2>Core Identity and Transformation</h2>
    <p>Forged through three prison terms described as turning <span data-concept="prison-experience" class="text-blood-red underline">the cage into a classroom</span>. Ryan's pragmatic approach to leadership is defined by the <span data-concept="authenticity-manifesto" class="text-blood-red underline">Authenticity Manifesto</span>.</p>

    <blockquote>
      "What's the best way to destroy a person? Give them free money. Purpose is found in the grind, not the handout."
    </blockquote>

    <h3>The Lacey Benchmark</h3>
    <p>Relationship with Lacey serves as the <strong>foundational bedrock</strong>. Their shared dream of a recovery community was destroyed by <span data-concept="asymmetric-threat-model" class="text-blood-red underline">Systemic Pressure</span> (CPS surveillance).</p>

    <blockquote>
      "Eighty percent of our relationship was pure gold. I’d live through the betrayal a hundred times just to taste that sweetness again. It was a priceless sanctuary."
    </blockquote>

    <h3>Strategic Vigilance</h3>
    <p>Developed the "Hansel and Gretel method" to analyze complex social data. Ryan is constantly prepared for the "unthinkable," a burden of <span data-concept="inner-game" class="text-blood-red underline">PTSD-driven hypervigilance</span>.</p>

    <blockquote>
      "Paranoia is loud. This is quiet. It walks beside you and takes notes on your breathing."
    </blockquote>

    <h3>Sonic Identity</h3>
    <p>The refusal to be erased is sonically documented in the track <span data-concept="still-here" class="text-blood-red underline">Still Here</span>.</p>
  `
};
