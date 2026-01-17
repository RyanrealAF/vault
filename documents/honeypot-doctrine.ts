import { IngestedDocument } from '../../types';

export const honeypotDoctrine: IngestedDocument = {
  id: "honeypot-doctrine",
  title: "The Honeypot Doctrine",
  type: "technique",
  themes: ["counter-intelligence", "strategy", "offensive-defense"],
  excerpt: "Documentation of the shift from target to intelligence platform; the transformation of victimhood into a weapon.",
  linksTo: ["warfare-manual", "the-social-test", "authenticity-manifesto", "civilians-as-weapons"],
  metadata: {
    date: "2025-02-20",
    classification: "restricted"
  },
  rawContent: `
    <h2>Prologue: Survival as Strategy</h2>
    <p>I didn't start as a weapon. I was a target caught in a mesh-lock of networks operating with impunity. They thought they were breaking me; they were teaching me.</p>

    <h3>The Honeypot Shift</h3>
    <p>The objective moved from "winning" to <strong>Collection</strong>. I made myself into the <span data-concept="authenticity-manifesto" class="text-blood-red underline">Honeypot</span>: the asset that looks vulnerable but gathers data every time the adversary speaks.</p>

    <h3>Phase Mapping</h3>
    <ol>
      <li><strong>The Network Rep Appears:</strong> Establishing rapport.</li>
      <li><strong>Information Seeding:</strong> Casually mentioning the target as a "problem customer."</li>
      <li><strong>Behavioral Direction:</strong> Implicit commands to staff on how to treat the target.</li>
    </ol>
  `
};
