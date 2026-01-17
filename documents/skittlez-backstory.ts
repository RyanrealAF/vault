
import { IngestedDocument } from '../../types';

export const skittlezBackstory: IngestedDocument = {
  id: "skittlez-full-record",
  title: "[The Access Agent]: The Full Record",
  type: "narrative",
  themes: ["loyalty", "trauma-twins", "street-survival", "sacrifice"],
  excerpt: "A comprehensive record of the bond with [The Access Agent]—loyalty through the fire and acts of extreme physical endurance.",
  linksTo: ["skittlez-relationship", "asymmetric-threat-model", "authenticity-manifesto", "breadcrumb-web"],
  metadata: {
    date: "2025-01-05",
    classification: "confidential"
  },
  rawContent: `
    <h2>The Origin Story ([The Architect])</h2>
    <p>First contact occurred in an abandoned apartment complex in Santa Barbara. The setting was post-apocalyptic—a straight-up ghost town. This is where the <span data-concept="skittlez-relationship" class="text-blood-red underline">Trauma Twin</span> bond was established.</p>

    <h3>Acts of Loyalty</h3>
    <ul>
      <li><strong>Montecito Tent Incident:</strong> Moving from Goleta to Montecito on foot (running/power-walking) at night to provide immediate security.</li>
      <li><strong>The 16-Hour Walk:</strong> Walking from Malibu to Oxnard with no money or food, driven solely by the "I need you ASAP" communication. Marker: Point Mugu.</li>
      <li><strong>The Broken Collarbone:</strong> Riding a pedal bike half the distance to an LA hospital with a shattered collarbone to ensure her security.</li>
    </ul>

    <h3>The Ritual Pressure</h3>
    <p>The relationship was defined by an unequal dynamic. Ryan described ranking "below the dog" on the hierarchy scale. High-pressure drug rituals (red mushroom clouds and vibrators) created an environment where the subject felt like a tool/helper rather than a partner.</p>

    <p>Despite being pushed away, the bond remained. She saw all of him—and didn’t flinch. This is the bedrock of the <span data-concept="authenticity-manifesto" class="text-blood-red underline">Authenticity Protocol</span>.</p>
  `
};
