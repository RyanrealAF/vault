import { IngestedDocument } from '../../types';

export const forensicPathology: IngestedDocument = {
  id: "forensic-pathology",
  title: "Forensic Pathology",
  type: "analysis",
  themes: ["pathology", "cognitive-degradation", "trauma"],
  excerpt: "A clinical dissection of how murder of the mind is achieved through sustained environmental invalidation.",
  linksTo: ["warfare-manual", "neurobiological-sequelae", "asymmetric-threat-model", "inner-game"],
  metadata: {
    date: "2025-03-01",
    classification: "redacted"
  },
  rawContent: `
    <h2>I. The Erosion of Cognitive Integrity</h2>
    <p>Systematic psychological warfare is a high-structure asymmetric threat designed for the non-kinetic destruction of a target’s internal reality.</p>

    <h3>II. Functional Impairment Vectors</h3>
    <ul>
      <li><strong>The Fog of Attrition:</strong> Disorientation where the target loses the ability to distinguish between legitimate threats and minor annoyances.</li>
      <li><strong>Learned Helplessness:</strong> Conditioning the subject to stop resisting through inescapable, minor, unprovable aggressions.</li>
    </ul>

    <p>The resulting clinical manifestation often mirrors <span data-concept="inner-game" class="text-blood-red underline">Complex PTSD</span>, characterized by affective dysregulation and negative self-perception.</p>
  `
};
