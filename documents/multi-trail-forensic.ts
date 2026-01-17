import { IngestedDocument } from '../../types';

export const multiTrailForensic: IngestedDocument = {
  id: "multi-trail-forensic-approach",
  title: "Multi-Trail Forensic Approach",
  type: "theory",
  themes: ["coordination-detection", "legal-forensics", "node-analysis"],
  excerpt: "A systematic methodology for detecting covert orchestration by analyzing converging streams of evidence.",
  linksTo: ["forensic-pathology", "asymmetric-threat-model", "breadcrumb-web", "infiltrators-playbook", "breadcrumb-web-origin-story", "exploitation-cycle"],
  metadata: {
    date: "2025-03-12",
    classification: "restricted"
  },
  rawContent: `
    <h2>The Architecture of Convergence</h2>
    <p>Coordination reveals itself not through a "smoking gun," but through the synchronization of multiple independent processes. This methodology maps <span data-concept="breadcrumb-web" class="text-blood-red underline">Nodes and Intersections</span> where separate streams of influence meet.</p>
    
    <h3>Trail Taxonomy</h3>
    <ul>
      <li><strong>Internal Communications Trails:</strong> Metadata analysis of information flow.</li>
      <li><strong>Procedural Maneuver Trails:</strong> Tracking the subversion of formal processes.</li>
      <li><strong>Media/PR Trails:</strong> Fine-grained temporal data from narrative shifts.</li>
    </ul>

    <p>When multiple trails converge with precise temporal alignment, the probability of coincidence decreases exponentially, exposing the <span data-concept="asymmetric-threat-model" class="text-blood-red underline">Operational Signature</span>. This method is the engine behind the <span data-concept="infiltrators-playbook" class="text-blood-red underline">Infiltrator's Playbook</span> and identifies patterns of the <span data-concept="exploitation-cycle" class="text-blood-red underline">Exploitation Cycle</span>.</p>

    <h3>Historical Context</h3>
    <p>The transition from defensive logging to predictive analysis is detailed in the <span data-concept="breadcrumb-web-origin-story" class="text-blood-red underline">Breadcrumb Origin</span>.</p>
  `
};
