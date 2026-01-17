import { IngestedDocument } from '../../types';

export const warfareManual: IngestedDocument = {
  id: "warfare-manual",
  title: "Warfare Manual",
  type: "theory",
  themes: ["tactical-doctrine", "non-kinetic", "C2"],
  excerpt: "The definitive tactical guide to non-kinetic maneuver and the systematic compromise of a target's reality.",
  linksTo: ["forensic-pathology", "civilians-as-weapons", "asymmetric-threat-model", "exploitation-cycle", "architecture-of-psychological-annihilation", "infiltrators-playbook", "multi-trail-forensic-approach", "unseen-war-briefing", "doctrine-archive"],
  metadata: {
    date: "2025-01-15",
    classification: "restricted"
  },
  rawContent: `
    <h2>0.0 Preface: Doctrine of Non-Kinetic Warfare</h2>
    <p>The core doctrine of this discipline is <strong>non-kinetic maneuver</strong>, which dictates that strategic objectives are achieved without direct physical confrontation, instead utilizing human and social vulnerabilities as the primary battlespace.</p>
    
    <h3>1.0 Foundational Constructs</h3>
    <p>Manipulation is characterized by an asymmetry of intent. We define the difference through four critical vectors: 
    <span data-concept="intent" class="text-blood-red underline">Intent</span>, 
    <span data-concept="transparency" class="text-blood-red underline">Transparency</span>, 
    <span data-concept="reciprocity" class="text-blood-red underline">Reciprocity</span>, and 
    <span data-concept="autonomy" class="text-blood-red underline">Autonomy</span>.</p>

    <h3>The Asymmetric Threat Model</h3>
    <p>Systematic psychological campaigns are not the work of a lone actor; they are executed by a networked human intelligence (HUMINT) unit. This includes the <span data-concept="asymmetric-threat-model" class="text-blood-red underline">Orchestrator</span> and the <span data-concept="asymmetric-threat-model" class="text-blood-red underline">Access Agent</span>.</p>

    <h3>Strategic Synergy</h3>
    <p>Operational success requires the integration of <span data-concept="architecture-of-psychological-annihilation" class="text-blood-red underline">Psychological Annihilation</span> tactics with the defensive rigor of the <span data-concept="breadcrumb-web" class="text-blood-red underline">Breadcrumb Web</span> and the offensive protocols found in the <span data-concept="infiltrators-playbook" class="text-blood-red underline">Infiltrator's Playbook</span>.</p>
  `
};
