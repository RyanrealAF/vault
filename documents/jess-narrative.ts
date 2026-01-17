import { IngestedDocument } from '../../types';

export const jessNarrative: IngestedDocument = {
  id: "jess-full-narrative",
  title: "Jess: The 12-Chapter Chronicle",
  type: "narrative",
  themes: ["jess-narrative", "schoolyard-crush", "life-on-the-run", "reconciliation-failure"],
  excerpt: "The complete odyssey of Jess and Ryry: from schoolyard yearnings to fugitive hotels and the final 'Nope' of the soul.",
  linksTo: ["jess-forensic-analysis", "prison-experience", "exploitation-cycle", "asymmetric-threat-model"],
  metadata: {
    date: "2024-12-30",
    classification: "confidential"
  },
  rawContent: `
    <h2>Chronicle: Umpa and Ryry</h2>
    <p>A lifelong bond that began with academic undercurrents and schoolyard escapades. Jess's admiration clashed with Ryan's fixation on others, setting the stage for an unconventional journey.</p>

    <h3>The Fugitive Solace</h3>
    <p>Catapulted into a life on the run, Jess and Ryry sought refuge in hotels, finding solace in the <span data-concept="authenticity-manifesto" class="text-blood-red underline">Authenticity of Connection</span>. This resilient fabric was tested by incarceration and the wait for mail in isolation.</p>

    <h3>The Resurfacing Shadows</h3>
    <p>After rebuilding from the ground up, shadows from the past (Kandice) wove threads of deceit into their lives. The once-sturdy walls of trust cracked, leading to a haunted homecoming and empty vibrance.</p>

    <h3>The Soul's Veto: The 'Nope'</h3>
    <p>Reconnection years later unveiled the truth, but the scars ran deep. Despite a desire to reignite passion, Ryan's soul stood as a <strong>stoic gatekeeper</strong>. The "Nope" became an unspoken anthem, signaling that the heart sometimes leads to acceptance rather than revival.</p>
  `
};
