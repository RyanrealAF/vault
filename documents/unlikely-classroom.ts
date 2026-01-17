
import { IngestedDocument } from '../../types';

export const unlikelyClassroom: IngestedDocument = {
  id: "unlikely-classroom",
  title: "The Unlikely Classroom",
  type: "analysis",
  themes: ["pedagogy", "lived-wisdom", "street-preacher", "authenticity"],
  excerpt: "A study in lived-in wisdom: how the system's fallout created a master educator for the margins.",
  linksTo: ["prison-experience", "ryan-overview", "ryanrealaf-analysis", "authenticity-manifesto"],
  metadata: {
    date: "2025-03-20",
    classification: "unclassified"
  },
  rawContent: `
    <h2>The Teacher Who Hated School</h2>
    <p>A central paradox: a high-school dropout who, through the brutal curriculum of lived experience, became a profound teacher. His syllabus was forged from trauma, resilience, and a non-negotiable commitment to authenticity.</p>

    <h3>The Cage as a Classroom</h3>
    <p>Borland’s three prison terms were the foundational training ground. He rejected burnt-out institutional methods for a results-oriented approach: <strong>"Fuck fractions, just pass the GED."</strong></p>

    <h3>The Syllabus of Scars</h3>
    <p>Relationships with Lacey, Jess, and [The Architect] provided the curriculum. Lacey created the foundational wound; Jess provided the forensic record of <span data-concept="exploitation-cycle" class="text-blood-red underline">Accountability Failure</span>.</p>

    <p>This journey culminates in the <strong>RyanrealAF Gospel</strong>: teaching a global community of misfits and spiritual vagabonds that <span data-concept="authenticity-manifesto" class="text-blood-red underline">Authenticity Ain’t Optional</span>.</p>
  `
};
