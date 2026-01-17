import { IngestedDocument } from '../../types';

export const displacementLog: IngestedDocument = {
  title: "The 2024 Displacement Log",
  type: "narrative",
  themes: ["eviction", "housing", "material-attrition"],
  excerpt: "A chronological record of structural instability and the weaponization of the domestic sphere.",
  linksTo: ["jess-forensic-analysis", "exploitation-cycle", "ryan-overview"],
  metadata: {
    date: "2024-12-25",
    classification: "confidential"
  },
  rawContent: `
    <h2>Log Entry: Dec 25, 2024</h2>
    <p>The tactical revocation of keys. Notice was served not through legal channels but through psychological pressure. 
    The goal was immediate displacement to trigger the Vulnerability State defined in the exploitation manual.</p>

    <h2>Observations on Material Attrition</h2>
    <p>By removing the physical sanctuary, the orchestrator forces the subject into public spaces where surveillance (Civilian Weaponization) is more effective. This matches the history of loss detailed in <span data-concept="ryan-overview" class="text-blood-red underline">Ryan's Overview</span>.</p>
  `
};
