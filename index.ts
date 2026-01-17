import { IngestedDocument } from '../types';

/**
 * FORENSIC REGISTRY: ACTIVE INTELLIGENCE SET
 * This registry defines the unique source of truth for the archive.
 * All raw text and duplicate imports have been consolidated into these 
 * structured TypeScript modules.
 */

import { coreConcepts } from './documents/core-concepts';
import { tacticalLexicon } from './documents/tactical-lexicon';
import { displacementLog } from './documents/displacement-log';
import { gaslightersDelight } from './documents/gaslighters-delight';
import { warfareManual } from './documents/warfare-manual';
import { doctrineArchive } from './documents/doctrine-archive';
import { civiliansAsWeapons } from './documents/civilians-as-weapons';
import { forensicPathology } from './documents/forensic-pathology';
import { neurobiologicalSequelae } from './documents/neurobiological-sequelae';
import { honeypotDoctrine } from './documents/honeypot-doctrine';
import { socialTestNarrative } from './documents/social-test';
import { multiTrailForensic } from './documents/multi-trail-forensic';
import { breadcrumbOrigin } from './documents/breadcrumb-origin';
import { ryanOverview } from './documents/ryan-overview';
import { ryanrealafAnalysis } from './documents/ryanrealaf-analysis';
import { streetPsych101 } from './documents/street-psych-101';
import { psychAnnihilation } from './documents/psych-annihilation';
import { infiltratorsPlaybook } from './documents/infiltrators-playbook';
import { unseenWarBriefing } from './documents/unseen-war-briefing';
import { skittlezBackstory } from './documents/skittlez-backstory';
import { unlikelyClassroom } from './documents/unlikely-classroom';
import { systemReform } from './documents/system-reform';
import { jessNarrative } from './documents/jess-narrative';

/**
 * MASTER VAULT REGISTRY
 * Only curated, unique documents are exported to the graph engine.
 * Unreferenced .txt and .md files in the directory are ignored by this registry.
 */
export const VAULT: IngestedDocument[] = [
  ...coreConcepts,
  ...tacticalLexicon,
  displacementLog,
  gaslightersDelight,
  warfareManual,
  doctrineArchive,
  civiliansAsWeapons,
  forensicPathology,
  neurobiologicalSequelae,
  honeypotDoctrine,
  socialTestNarrative,
  multiTrailForensic,
  breadcrumbOrigin,
  ryanOverview,
  ryanrealafAnalysis,
  streetPsych101,
  psychAnnihilation,
  infiltratorsPlaybook,
  unseenWarBriefing,
  skittlezBackstory,
  unlikelyClassroom,
  systemReform,
  jessNarrative
];
