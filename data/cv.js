// ============================================================
//  CV  —  drives the /cv page. Edit any list to update.
//  The PDF download link points to /cv.pdf (drop your file in
//  the project root with that name, or change `pdfHref`).
// ============================================================

export const cv = {
  pdfHref: "/cv.pdf",

  education: [
    { school: "University of Edinburgh", href: "https://www.ed.ac.uk", place: "Edinburgh, UK", dates: "Sep 2023 \u2013 Present",
      degree: "PhD in Biomedical AI (expected Oct 2026)",
      notes: ["Thesis: Toward Trustworthy Clinical Language Models: Measuring and Mitigating Hallucination.", "Advisors: Pasquale Minervini, Beatrice Alex, Luke Daines."] },
    { school: "University of Edinburgh", href: "https://www.ed.ac.uk", place: "Edinburgh, UK", dates: "Sep 2022 \u2013 Aug 2023",
      degree: "MSc by Research in Biomedical AI \u2014 Distinction",
      notes: ["Thesis: Parameter-efficient fine-tuning of LLMs for the clinical domain.", "Advisors: Beatrice Alex, Pasquale Minervini, Luke Daines."] },
    { school: "Bina Nusantara University", href: "https://binus.ac.id", place: "Jakarta, Indonesia", dates: "Sep 2014 \u2013 Aug 2018",
      degree: "BSc in Computer Science \u2014 GPA 3.87/4.00",
      notes: ["Thesis: Sequence-to-sequence learning for motion-aware claim generation."] }
  ],

  experience: [
    { org: "Anthropic", href: "https://alignment.anthropic.com/2024/anthropic-fellows-program/", place: "London, UK", dates: "Mar 2025 \u2013 Nov 2025",
      role: "AI Safety Fellow",
      notes: ["Researched failure modes of reasoning models (inverse scaling in test-time compute).",
               "Researched the science of LLM misuse uplift."] },
    { org: "AstraZeneca", href: "https://www.astrazeneca.com/", place: "Cambridge, UK", dates: "Jul 2024 \u2013 Sep 2024",
      role: "Research Scientist Intern",
      notes: ["Worked on LLM hallucination mitigation via novel post-training strategies.",
               "Developed DeCoRe, a decoding framework using contrasting retrieval heads."] },
    { org: "Epigene Labs", href: "https://www.epigenelabs.com/", place: "Paris, France", dates: "Oct 2019 \u2013 Aug 2022",
      role: "Senior Data Scientist",
      notes: ["Maintained 20+ ML models in production for precision oncology.",
               "Built a language-, format-, and cancer-agnostic data harmonisation pipeline."] },
    { org: "Riminder (now HrFlow)", href: "https://www.hrflow.ai/", place: "Paris, France", dates: "Oct 2018 \u2013 Oct 2019",
      role: "Staff AI Research Scientist",
      notes: ["Improved in-house NER by 20% F1; profile-to-job matching by 10% ROC AUC."] },
    { org: "Julo", href: "https://www.julo.co.id/", place: "Jakarta, Indonesia", dates: "Sep 2017 \u2013 Jul 2018",
      role: "Data Scientist",
      notes: ["Built credit-grading and text-processing ML systems for fintech."] }
  ],

  // A few representative talks (full list in the PDF).
  talks: [
    { title: "Inverse Scaling in Test-Time Compute", venue: "MLO Lab@EPFL", date: "Mar 2026" },
    { title: "Inverse Scaling in Test-Time Compute", venue: "EleutherAI", date: "Jan 2026" },
    { title: "Inverse Scaling in Test-Time Compute", venue: "AI Safety Hub Edinburgh", date: "Sep 2025" },
    { title: "DeCoRe: Decoding by Contrasting Retrieval Heads", venue: "King's College London", date: "May 2025" },
    { title: "DeCoRe: Decoding by Contrasting Retrieval Heads", venue: "Alan Turing Institute", date: "Feb 2025" },
    { title: "Clinical NLP in the LLM Era", venue: "Discovery Sciences @ AstraZeneca", date: "Jul 2024" }
  ],

  service: [
    "ACL Rolling Review \u2014 reviewer since 2023 (Outstanding reviewer, EACL 2024 & EMNLP 2024)",
    "NeurIPS 2026, Mech Interp @ ICML 2026, COLM 2026, ICLR 2025, COLM 2025, BlackboxNLP @ EMNLP 2025",
    "Springer Nature Machine Learning, Healthcare Text Analytics Conference, AI for Health"
  ],

  awards: [
    "Binusian Award (2018) \u2014 most achieving graduate",
    "Applied Research Grant, Binus (2017)",
    "Student of Excellence Honour (2014, 2015)",
    "Champion, Indonesian Varsity English Debate \u2014 Novice (2015)"
  ],

  skills: {
    Languages: "Indonesian (native), Banjarese (native), English (bilingual), French (elementary)",
    Programming: "Python, C/C++, Go, JavaScript, SQL",
    Libraries: "PyTorch, TensorFlow, Transformers, Accelerate, scikit-learn, NumPy, Pandas",
    Tooling: "Git, Slurm, Docker, Kubernetes, Flask, Streamlit, PostgreSQL, MongoDB"
  },

  interests: "Chess, parliamentary debate, sports, cooking"
};
