// ============================================================
//  PUBLICATIONS
//  ----------------------------------------------------------
//  To add a paper, copy an entry and edit it.
//    title   : paper title
//    authors : full author string (your name is auto-bolded)
//    venue   : conference / journal
//    year    : number (used for grouping + sorting)
//    type    : "conference" | "journal" | "preprint"
//    selected: true  -> also shown on the home page
//    links   : optional { arxiv, pdf, code }
//  Newest first is recommended but the page sorts by year too.
// ============================================================

// Your name, used to bold your authorship in the list.
export const me = "Aryo Pradipta Gema";

// Venue homepages. Any publication whose `venue` contains one of these
// keys gets its venue linked automatically (good for SEO / discoverability).
export const venueLinks = {
  "EMNLP": "https://2025.emnlp.org/",
  "ICLR": "https://iclr.cc/",
  "ICML": "https://icml.cc/",
  "NAACL": "https://naacl.org/",
  "COLM": "https://colmweb.org/",
  "NeurIPS": "https://neurips.cc/",
  "TMLR": "https://jmlr.org/tmlr/"
};

export const publications = [
  {
    title: "SCOPE: Self-Play via Co-Evolving Policies for Open-Ended Tasks",
    authors: "Wai-Chung Kwan, Aryo Pradipta Gema, Joshua Ong Jun Leang, Pasquale Minervini",
    venue: "arXiv preprint", year: 2026, type: "preprint",
    links: { arxiv: "https://arxiv.org/abs/2605.31433" }
  },
  {
    title: "Do Composed Image Retrieval Benchmarks Require Multimodal Composition?",
    authors: "Matteo Attimonelli, Alessandro De Bellis, Aryo Pradipta Gema, ..., Dietmar Jannach, Tommaso Di Noia, Pasquale Minervini",
    venue: "arXiv preprint", year: 2026, type: "preprint",
    links: { arxiv: "https://arxiv.org/abs/2605.14787" }
  },
  {
    title: "Same Answer, Different Representations: Hidden instability in VLMs",
    authors: "Farooq Ahmad Wani, Alessandro Suglia, Rohit Saxena, Aryo Pradipta Gema, ..., Fabrizio Silvestri, Pasquale Minervini",
    venue: "arXiv preprint", year: 2026, type: "preprint",
    links: { arxiv: "https://arxiv.org/abs/2602.06652" }
  },
  {
    title: "The Hot Mess of AI: How Does Misalignment Scale With Model Intelligence and Task Complexity?",
    authors: "Alexander Hägele, Aryo Pradipta Gema, Henry Sleight, Ethan Perez, Jascha Sohl-Dickstein",
    venue: "ICLR", year: 2026, type: "conference", selected: true,
    links: { arxiv: "https://arxiv.org/abs/2601.23045" }
  },
  {
    title: "Beyond Data Filtering: Knowledge Localization for Capability Removal in LLMs",
    authors: "Igor Shilov, Alex Cloud, Aryo Pradipta Gema, ..., Erik Jones, Cem Anil",
    venue: "arXiv preprint", year: 2025, type: "preprint",
    links: { arxiv: "https://arxiv.org/abs/2512.05648" }
  },
  {
    title: "PiCSAR: Probabilistic Confidence Selection And Ranking",
    authors: "Joshua Ong Jun Leang, Zheng Zhao, Aryo Pradipta Gema, Sohee Yang, ..., Shay B. Cohen",
    venue: "arXiv preprint", year: 2025, type: "preprint",
    links: { arxiv: "https://arxiv.org/abs/2508.21787" }
  },
  {
    title: "An Analysis of Decoding Methods for LLM-based Agents for Faithful Multi-Hop Question Answering",
    authors: "Alexander Murphy, ..., Aryo Pradipta Gema, Pasquale Minervini",
    venue: "arXiv preprint", year: 2025, type: "preprint",
    links: { arxiv: "https://arxiv.org/abs/2503.23415" }
  },
  {
    title: "Inverse Scaling in Test-Time Compute",
    authors: "Aryo Pradipta Gema, ..., Yanda Chen, Joe Benton, Ethan Perez",
    venue: "TMLR", year: 2025, type: "journal", selected: true,
    links: { arxiv: "https://arxiv.org/abs/2507.14417" }
  },
  {
    title: "DeCoRe: Decoding by Contrasting Retrieval Heads to Mitigate Hallucinations",
    authors: "Aryo Pradipta Gema, Chen Jin, ..., Pasquale Minervini, Amrutha Saseendran",
    venue: "EMNLP", year: 2025, type: "conference", selected: true,
    links: { arxiv: "https://arxiv.org/abs/2410.18860" }
  },
  {
    title: "Are We Done with MMLU?",
    authors: "Aryo Pradipta Gema, Joshua Ong Jun Leang, Giwon Hong, Alessio Devoto, ..., Pasquale Minervini",
    venue: "NAACL", year: 2025, type: "conference", selected: true,
    links: { arxiv: "https://arxiv.org/abs/2406.04127" }
  },
  {
    title: "Scalpel vs. Hammer: GRPO Amplifies Existing Capabilities, SFT Replaces Them",
    authors: "Neel Rajani, Aryo Pradipta Gema, Seraphina Goldfarb-Tarrant, Ivan Titov",
    venue: "Actionable Interpretability @ ICML", year: 2025, type: "conference"
  },
  {
    title: "GRADA: Graph-based Reranker against Adversarial Documents Attack",
    authors: "Jingjie Zheng, Aryo Pradipta Gema, Giwon Hong, Xuanli He, Pasquale Minervini, Youcheng Sun, Qiongkai Xu",
    venue: "EMNLP", year: 2025, type: "conference"
  },
  {
    title: "Noiser: Bounded Input Perturbations for Attributing Large Language Models",
    authors: "Mohammad Reza Ghasemi Madani, Aryo Pradipta Gema, Gabriele Sarti, Yu Zhao, Pasquale Minervini, Andrea Passerini",
    venue: "COLM", year: 2025, type: "conference"
  },
  {
    title: "Balancing Act: Diversity and Consistency in Large Language Model Ensembles",
    authors: "Ahmed Abdulaal, Chen Jin, Nina Monta\u00f1a-Brown, Aryo Pradipta Gema, ..., Amrutha Saseendran",
    venue: "ICLR", year: 2025, type: "conference"
  },
  {
    title: "Lost in Time: Clock and Calendar Understanding Challenges in Multimodal LLMs",
    authors: "Rohit Saxena, Aryo Pradipta Gema, Pasquale Minervini",
    venue: "Reasoning and Planning for LLMs @ ICLR", year: 2025, type: "conference"
  },
  {
    title: "Fostering Effective Hybrid Human-LLM Reasoning and Decision Making",
    authors: "Andrea Passerini, Aryo Pradipta Gema, Pasquale Minervini, Burcu Sayin, Katya Tentori",
    venue: "Frontiers in Artificial Intelligence", year: 2025, type: "journal"
  },
  {
    title: "CoMAT: Chain of Mathematically Annotated Thought Improves Mathematical Reasoning",
    authors: "Joshua Ong Jun Leang, Aryo Pradipta Gema, Shay B. Cohen",
    venue: "EMNLP", year: 2025, type: "conference"
  },
  {
    title: "Self-Training Large Language Models for Tool-Use Without Demonstrations",
    authors: "Ne Luo, Aryo Pradipta Gema, ..., Pasquale Minervini",
    venue: "NAACL", year: 2025, type: "conference"
  },
  {
    title: "Steering Knowledge Selection Behaviours in LLMs via SAE-based Representation Engineering",
    authors: "Yu Zhao, Alessio Devoto, Giwon Hong, Xiaotang Du, Aryo Pradipta Gema, ..., Kam-Fai Wong, Pasquale Minervini",
    venue: "NAACL", year: 2025, type: "conference"
  },
  {
    title: "The Hallucinations Leaderboard \u2014 An Open Effort to Measure Hallucinations in LLMs",
    authors: "Giwon Hong, Aryo Pradipta Gema, ..., Cl\u00e9mentine Fourrier, Pasquale Minervini",
    venue: "arXiv preprint", year: 2024, type: "preprint", selected: true,
    links: { arxiv: "https://arxiv.org/abs/2404.05904" }
  },
  {
    title: "Analysing the Residual Stream of Language Models Under Knowledge Conflicts",
    authors: "Yu Zhao, Xiaotang Du, Giwon Hong, Aryo Pradipta Gema, ..., Kam-Fai Wong, Pasquale Minervini",
    venue: "Foundation Model Interventions @ NeurIPS", year: 2024, type: "conference"
  },
  {
    title: "Learning Binding Affinities via Fine-tuning of Protein and Ligand Language Models",
    authors: "Rohan Gorantla, Aryo Pradipta Gema, ..., Benjamin Suutari, Jordi Ju\u00e1rez Jim\u00e9nez, Antonia S. J. S. Mey",
    venue: "Journal of Chemical Information and Modeling", year: 2024, type: "journal"
  },
  {
    title: "Can GPT-3.5 Generate and Code Discharge Summaries?",
    authors: "Matus Falis, Aryo Pradipta Gema, Hang Dong, ..., Beatrice Alex",
    venue: "JAMIA", year: 2024, type: "journal"
  },
  {
    title: "Knowledge Graph Embeddings in the Biomedical Domain: Are They Useful?",
    authors: "Aryo Pradipta Gema, Dominik Grabarczyk, Wolf De Wulf, Piyush Borole, Javier Alfaro, Pasquale Minervini, Antonio Vergari, Ajitha Rajan",
    venue: "Bioinformatics Advances", year: 2024, type: "journal"
  },
  {
    title: "Edinburgh Clinical NLP at MEDIQA-CORR 2024: Guiding LLMs with Hints",
    authors: "Aryo Pradipta Gema, Chaeeun Lee, Pasquale Minervini, Luke Daines, Ian Simpson, Beatrice Alex",
    venue: "ClinicalNLP @ NAACL", year: 2024, type: "conference"
  },
  {
    title: "Edinburgh Clinical NLP at SemEval-2024 Task 2: Fine-tune Your Model Unless You Have Access to GPT-4",
    authors: "Aryo Pradipta Gema, Giwon Hong, Pasquale Minervini, Luke Daines, Beatrice Alex",
    venue: "SemEval", year: 2024, type: "conference"
  },
  {
    title: "Parameter-Efficient Fine-tuning of LLaMA for the Clinical Domain",
    authors: "Aryo Pradipta Gema, Pasquale Minervini, Luke Daines, Tom Hope, Beatrice Alex",
    venue: "ClinicalNLP @ NAACL", year: 2024, type: "conference",
    links: { arxiv: "https://arxiv.org/abs/2307.03042" }
  },
  {
    title: "A Comparative Study on Patient Language across Therapeutic Domains for Effective Patient Voice Classification",
    authors: "Giorgos Lysandrou, ..., Aryo Pradipta Gema, Beatrice Alex, Elizabeth Fairley",
    venue: "arXiv preprint", year: 2024, type: "preprint",
    links: { arxiv: "https://arxiv.org/abs/2407.16593" }
  },
  {
    title: "Natural Language Processing for Detecting Adverse Drug Events: Systematic Review",
    authors: "Imane Guellil, Jinge Wu, Aryo Pradipta Gema, ..., Honghan Wu, Bruce Guthrie, Beatrice Alex",
    venue: "NIHR Open Research", year: 2023, type: "journal"
  },
  {
    title: "Vaxformer: Antigenicity-controlled Transformer for Vaccine Design Against SARS-CoV-2",
    authors: "Aryo Pradipta Gema, Michal Kobiela, Achille Fraisse, Ajitha Rajan, Diego Oyarzun, Javier Alfaro",
    venue: "arXiv preprint", year: 2023, type: "preprint",
    links: { arxiv: "https://arxiv.org/abs/2305.11194" }
  },
  {
    title: "BERT and ULMFiT Ensemble for Personality Prediction from Indonesian Social Media Text",
    authors: "Noptovius Halimawan, Derwin Suhartono, Aryo Pradipta Gema, Rezki Yunanda",
    venue: "ISITDI", year: 2022, type: "conference"
  },
  {
    title: "Leveraging BERT with Extractive Summarization for Depression Detection on Social Media",
    authors: "David William, Said Achmad, Derwin Suhartono, Aryo Pradipta Gema",
    venue: "ISITIA", year: 2022, type: "conference"
  },
  {
    title: "Sequence-to-Sequence Learning for Motion-Aware Claim Generation",
    authors: "Derwin Suhartono, Aryo Pradipta Gema, Suhendro Winton, Theodorus David, Mohamad Ivan Fanany, Aniati Murni Arymurthy",
    venue: "IJComp", year: 2020, type: "journal"
  },
  {
    title: "Argument Annotation and Analysis using Deep Learning with Attention Mechanism in Bahasa Indonesia",
    authors: "Derwin Suhartono, Aryo Pradipta Gema, Suhendro Winton, Theodorus David, Mohamad Ivan Fanany, Aniati Murni Arymurthy",
    venue: "Journal of Big Data", year: 2020, type: "journal"
  },
  {
    title: "Attention-based Argumentation Mining",
    authors: "Derwin Suhartono, Aryo Pradipta Gema, Suhendro Winton, Theodorus David, Mohamad Ivan Fanany, Aniati Murni Arymurthy",
    venue: "International Journal of Computational Vision and Robotics", year: 2019, type: "journal"
  },
  {
    title: "Facial Attractiveness Classification using Deep Learning",
    authors: "Ricky Anderson, Aryo Pradipta Gema, Sani M. Isa, others",
    venue: "INAPR", year: 2018, type: "conference"
  },
  {
    title: "Hierarchical Attention Network with XGBoost for Recognizing Insufficiently Supported Argument",
    authors: "Derwin Suhartono, Aryo Pradipta Gema, Suhendro Winton, Theodorus David, Mohamad Ivan Fanany, Aniati Murni Arymurthy",
    venue: "MIWAI", year: 2017, type: "conference"
  },
  {
    title: "It Takes Two to Tango: Siamese LSTM with Attention for Argumentative Relations in Persuasive Essays",
    authors: "Aryo Pradipta Gema, Suhendro Winton, Theodorus David, Derwin Suhartono, Muhsin Shodiq, Wikaria Gazali",
    venue: "Procedia Computer Science", year: 2017, type: "conference"
  }
];
