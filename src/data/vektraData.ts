import { DemoItem, FAQItem } from '../types';

export const INITIAL_DEMOS: DemoItem[] = [
  {
    id: 'demo-1',
    title: 'Midnight Loop',
    artist: 'Synthetica',
    label: 'Dap Media',
    genre: 'Synthwave / Cyberpunk',
    submittedAt: '12 mins ago',
    status: 'in_queue',
    bpm: 128,
    duration: '3:42',
    notes: 'Mastered 24-bit WAV attached. Targeted for Summer Compilation EP.',
    feedback: 'Queued for A&R batch review (Est. review: 4 hrs)'
  },
  {
    id: 'demo-2',
    title: 'Hyperdrive Sequence',
    artist: 'Kroma & Vane',
    label: 'Race Records',
    genre: 'Melodic Techno / Speed House',
    submittedAt: '1 hour ago',
    status: 'shortlist',
    bpm: 132,
    duration: '4:15',
    notes: 'Includes vocal stems and club extended mix.',
    feedback: 'Shortlisted by Race Records A&R. Stems requested for mixdown QC.'
  },
  {
    id: 'demo-3',
    title: 'Obsidian Pulse',
    artist: 'Aura Collective',
    label: 'Onyx Core Records',
    genre: 'Dark Industrial / Leftfield',
    submittedAt: '1 day ago',
    status: 'approved',
    bpm: 130,
    duration: '3:50',
    notes: 'Master approved. Track signed for upcoming catalog single.',
    feedback: 'Signed contract verified. Ready for label release schedule.'
  },
  {
    id: 'demo-4',
    title: 'Astral Echoes',
    artist: 'Velox',
    label: 'Astryx Media',
    genre: 'Liquid Drum & Bass',
    submittedAt: '3 hours ago',
    status: 'in_queue',
    bpm: 174,
    duration: '4:08',
    notes: 'VIP mix with live guitar layer.',
    feedback: 'Under automated audio spectral & spam link check.'
  },
  {
    id: 'demo-5',
    title: 'Glasswork (Club Edit)',
    artist: 'SubZero',
    label: 'Dap Media',
    genre: 'Deep House / UKG',
    submittedAt: '2 days ago',
    status: 'approved',
    bpm: 126,
    duration: '3:18',
    notes: 'Collaboration with UK vocalist.',
    feedback: 'A&R consensus: 5/5 approvals. Contract sent to artist.'
  },
  {
    id: 'demo-6',
    title: 'Apex Overdrive',
    artist: 'VectorPulse',
    label: 'Race Records',
    genre: 'DnB / Neurofunk',
    submittedAt: '4 hours ago',
    status: 'shortlist',
    bpm: 175,
    duration: '4:22',
    notes: 'Unreleased dubplate master.',
    feedback: 'Under senior A&R evaluation for upcoming EP release.'
  },
  {
    id: 'demo-7',
    title: 'Subterranean Frequency',
    artist: 'NullSet',
    label: 'Onyx Core Records',
    genre: 'Minimal Techno',
    submittedAt: '6 hours ago',
    status: 'in_queue',
    bpm: 128,
    duration: '5:02',
    notes: 'Extended mix for club rotation.',
    feedback: 'Queued for weekly staff listening session.'
  },
  {
    id: 'demo-8',
    title: 'Cosmic Drift',
    artist: 'Nebula',
    label: 'Astryx Media',
    genre: 'Progressive Trance',
    submittedAt: '1 day ago',
    status: 'approved',
    bpm: 138,
    duration: '4:45',
    notes: 'Clean mixdown, radio edit + extended mix included.',
    feedback: 'Approved by Astryx Media team. Delivery pack prepared.'
  }
];

export const DEMO_LABELS = [
  'All Labels',
  'Dap Media',
  'Race Records',
  'Onyx Core Records',
  'Astryx Media'
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do artists submit demos through Vektra?',
    answer: 'Artists can submit demos either directly through a label’s custom Discord bot panel (/submit) or via the universal web Artist Portal (artists.vektra.games). Both sync instantly to the same intake queue.',
    category: 'artists'
  },
  {
    question: 'Do artists need Discord to check their submission status?',
    answer: 'No! While you log in securely via Discord OAuth, the Artist Portal (artists.vektra.games) gives you a clean web dashboard showing live statuses (In Queue, Shortlisted, Approved, Shipped) across every label you’ve ever sent music to.',
    category: 'artists'
  },
  {
    question: 'How does per-guild isolation and storage work for labels?',
    answer: 'Each Discord server (guild) has completely isolated storage, custom branding, private staff review channels, and role permissions. You can use Vektra’s managed high-speed cloud or connect your own Neon / PostgreSQL database.',
    category: 'labels'
  },
  {
    question: 'Can we use Vektra if we already have an external distributor?',
    answer: 'Yes, absolutely! Many record labels use Vektra exclusively for rapid Discord demo intake, A&R team voting, and ticket support even when their final distribution is handled externally. Our intake and review workflow is built to streamline your team regardless of your distro setup.',
    category: 'labels'
  },
  {
    question: 'Can we customize the Discord Bot with our own label name and avatar?',
    answer: 'On the Pro tier, you can customize embed colors, DM templates, and panel branding, but you cannot change the bot\'s avatar. On the Pro+ tier, you create your own custom Discord bot in the Discord Developer Portal with your label\'s custom name and avatar, and connect it directly to Vektra\'s servers.',
    category: 'discord'
  },
  {
    question: 'How does AI spam and duplicate demo detection work?',
    answer: 'Vektra’s bot runs rapid audio fingerprinting and link integrity checks to filter spam links, duplicate submissions, and enforce custom cooldown periods configured by your label staff.',
    category: 'security'
  }
];
