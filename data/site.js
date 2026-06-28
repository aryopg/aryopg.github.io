// ============================================================
//  SITE-WIDE CONTENT  —  edit this file to update your identity,
//  bio, and links everywhere on the site.
// ============================================================

export const site = {
  name: "Aryo Pradipta Gema",
  shortName: "Aryo",
  // Shown under the name in the sidebar (one item per line)
  roleLines: ["PhD in [CDT in Biomedical AI](https://informatics.ed.ac.uk/ukri-cdt-in-biomedical-ai/people/doctoral-researchers/2022-cohort)"],
  // Used in the page <title> and meta description
  tagline: "AI researcher working on the safety and reliability of large language models.",
  affiliation: "University of Edinburgh",
  location: "Edinburgh, UK",
  email: "aryopg [at] gmail [dot] com",
  emailHref: "mailto:aryopg@gmail.com",

  // Set to null or empty string to hide the availability banner on the home page.
  available: "I\u2019m actively looking for a full-time industry position working on AI safety, particularly CoT monitoring and evaluations ([open to relocate*](#availability-details)).",
  availableMore: "*to the UK, US, or mainland Europe",

  // Bio paragraphs shown on the home page. Add / edit freely.
  // Inline links use Markdown syntax:  [visible text](https://url)
  bio: [
    "I'm a final-year PhD student in [Biomedical AI](https://informatics.ed.ac.uk/ukri-cdt-in-biomedical-ai/people/doctoral-researchers/2022-cohort) at the [University of Edinburgh](https://www.ed.ac.uk), supervised by [Pasquale Minervini](http://www.neuralnoise.com/), [Beatrice Alex](https://uk.linkedin.com/in/beatricealex), and [Luke Daines](https://www.research.ed.ac.uk/en/persons/luke-daines/).",
    "Recently I was an [AI Safety Fellow at Anthropic](https://alignment.anthropic.com/2024/anthropic-fellows-program/), working on inverse scaling in test-time compute and the science of misuse uplift. Before that I built hallucination-mitigation methods at [AstraZeneca](https://www.astrazeneca.com/)."
  ],

  // Current research focus on the home page. `current` shows by default;
  // `more` is revealed when the visitor clicks “and more”.
  research: {
    lead: "I study what goes wrong inside LLMs and how to make them reliable enough to trust in high-stakes settings. Specifically:",
    current: [
      { title: "CoT Faithfulness & Monitoring", blurb: "Whether a model's chain-of-thought is the real reason for its answer (and how to monitor it)." },
      { title: "Robust Evaluation Methods", blurb: "Benchmarks and protocols that demonstrate strong construct validity." },
      { title: "Mechanistic Interpretability", blurb: "Understanding the internal computation that causes model's failure modes." }
    ],
    more: [
      { title: "AI Misuse", blurb: "Measuring the uplift large language models give to harmful tasks."},
    ]
  },

  // Social / academic links. Order is preserved in the sidebar.
  links: [
    { label: "Scholar",  href: "https://scholar.google.com/citations?user=Vf4Ij2MAAAAJ&hl=en" },
    { label: "GitHub",   href: "https://github.com/aryopg" },
    { label: "X",        href: "https://x.com/aryopg" },
    { label: "LinkedIn", href: "https://linkedin.com/in/aryopg" },
    { label: "Email",    href: "mailto:aryopg@gmail.com" }
  ],

  // Canonical site URL (used for SEO / structured data)
  url: "https://aryopg.com"
};
