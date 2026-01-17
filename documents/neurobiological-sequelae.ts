
import { IngestedDocument } from '../../types';

export const neurobiologicalSequelae: IngestedDocument = {
  id: "neurobiological-sequelae",
  title: "Neurobiological Sequelae",
  type: "analysis",
  themes: ["neurobiology", "HPA-axis", "C-PTSD"],
  excerpt: "Analysis of functional and cognitive collapse in cases of environmental coercive control.",
  linksTo: ["forensic-pathology", "the-2024-displacement-log", "inner-game", "asymmetric-threat-model"],
  metadata: {
    date: "2025-03-05",
    classification: "restricted"
  },
  rawContent: `
    <h2>1.1 Contextualizing Coercive Control</h2>
    <p>This report analyzes the effects of sustained environmental manipulation. The campaign achieved destabilization comparable to traditional captivity, despite the target maintaining technical freedom of movement.</p>
    
    <h3>The Sanctuary Destruction Mechanism</h3>
    <p>By compromising every potential indoor sanctuary, the HPA axis is forced into continuous activation. This results in <strong>Allostatic Load</strong>, where the body’s capacity for adaptation is exceeded.</p>

    <h3>Weaponized Incoherence</h3>
    <p>Sustained stress leads to <span data-concept="inner-game" class="text-blood-red underline">Hippocampal Shrinkage</span>, impairing the ability to organize spatial and temporal memories, making it impossible for the target to provide a coherent chronological account to authorities.</p>
  `
};
