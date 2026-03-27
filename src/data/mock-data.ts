import {
  LearningPath,
  Topic,
  Trend,
  WorkspaceState,
} from "@/data/types";

export const topics: Topic[] = [
  {
    slug: "large-language-models",
    name: "Large Language Models",
    discipline: "Computer Science",
    shortDescription:
      "Study how large generative models are trained, aligned, evaluated, and adapted for real-world tasks.",
    overview:
      "Large Language Models combine large-scale pretraining, instruction tuning, retrieval, and evaluation to support reasoning, generation, and decision assistance across domains.",
    whyItMatters:
      "LLMs are now a core research interface for coding, science assistance, education, and enterprise knowledge work. Beginners need a structured way to separate fundamentals from hype.",
    maturity: "Active",
    difficulty: "Intermediate",
    momentum: "Breakout",
    timeToRamp: "2-4 weeks to build a usable map",
    keywords: ["alignment", "reasoning", "retrieval", "evaluation", "multimodal"],
    coreQuestions: [
      "How do scaling, data quality, and architecture interact?",
      "Which evaluation methods actually reflect usefulness and safety?",
      "How can smaller or domain-adapted models remain competitive?",
    ],
    beginnerSteps: [
      "Read one survey on transformers and one on modern LLM alignment.",
      "Compare a foundational scaling paper with a recent systems or evaluation paper.",
      "Track one sub-area such as retrieval, agentic workflows, or multimodality for two weeks.",
    ],
    relatedDirections: ["Medical AI", "Education Technology", "Multi-Agent Systems"],
    subtopics: [
      {
        id: "llm-1",
        name: "Alignment and Preference Optimization",
        description: "How models are tuned toward useful, safe behavior.",
        signal: "Strong publication and product adoption signal.",
      },
      {
        id: "llm-2",
        name: "Domain Adaptation",
        description: "Specializing models for medicine, law, science, or education.",
        signal: "High demand in applied research teams.",
      },
      {
        id: "llm-3",
        name: "Evaluation and Benchmarks",
        description: "Measuring robustness, reasoning, calibration, and factuality.",
        signal: "Critical for separating progress from noise.",
      },
    ],
    papers: [
      {
        id: "llm-paper-1",
        title: "Attention Is All You Need",
        authors: "Vaswani et al.",
        year: 2017,
        venue: "NeurIPS",
        summary: "Introduced the transformer architecture that underpins modern LLMs.",
        type: "Foundational",
        takeaways: ["Core attention mechanism", "Parallel sequence modeling"],
        url: "https://arxiv.org/abs/1706.03762",
      },
      {
        id: "llm-paper-2",
        title: "Language Models are Few-Shot Learners",
        authors: "Brown et al.",
        year: 2020,
        venue: "NeurIPS",
        summary: "Showed scale-driven in-context learning behavior in GPT-3.",
        type: "Foundational",
        takeaways: ["Scaling trends", "Prompt-based adaptation"],
        url: "https://arxiv.org/abs/2005.14165",
      },
      {
        id: "llm-paper-3",
        title: "Direct Preference Optimization",
        authors: "Rafailov et al.",
        year: 2023,
        venue: "NeurIPS",
        summary: "Simplified preference tuning for alignment.",
        type: "Recent",
        takeaways: ["Alignment without RL", "Clean training objective"],
        url: "https://arxiv.org/abs/2305.18290",
      },
    ],
  },
  {
    slug: "graphrag",
    name: "GraphRAG",
    discipline: "Interdisciplinary",
    shortDescription:
      "Combine graph-structured knowledge with retrieval-augmented generation to improve reasoning over connected information.",
    overview:
      "GraphRAG organizes entities, relations, and evidence into explicit structures that language models can retrieve and reason across.",
    whyItMatters:
      "Beginners often see retrieval as vector search only. GraphRAG offers a more interpretable path for scientific knowledge navigation and multi-hop reasoning.",
    maturity: "Emerging",
    difficulty: "Intermediate",
    momentum: "Rising",
    timeToRamp: "1-2 weeks to understand the landscape",
    keywords: ["knowledge graphs", "retrieval", "multi-hop reasoning", "entity linking"],
    coreQuestions: [
      "When do graphs outperform flat document retrieval?",
      "How should graph construction quality be measured?",
      "What are the right evaluation tasks for scientific discovery settings?",
    ],
    beginnerSteps: [
      "Learn baseline RAG before reading graph-based variants.",
      "Read one systems paper and one evaluation paper on GraphRAG.",
      "Build a small graph from 20 papers in one topic area and inspect missing links.",
    ],
    relatedDirections: ["Large Language Models", "Bioinformatics", "Medical AI"],
    subtopics: [
      {
        id: "graphrag-1",
        name: "Graph Construction",
        description: "Turning text corpora into usable entity-relation graphs.",
        signal: "Quality bottleneck for most systems.",
      },
      {
        id: "graphrag-2",
        name: "Hybrid Retrieval",
        description: "Combining dense retrieval, symbolic paths, and summaries.",
        signal: "A common frontier in practical deployments.",
      },
      {
        id: "graphrag-3",
        name: "Scientific Discovery Workflows",
        description: "Supporting hypothesis generation across literature graphs.",
        signal: "Increasing interest in interdisciplinary teams.",
      },
    ],
    papers: [
      {
        id: "graphrag-paper-1",
        title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        authors: "Lewis et al.",
        year: 2020,
        venue: "NeurIPS",
        summary: "A baseline paper for understanding retrieval-augmented generation.",
        type: "Foundational",
        takeaways: ["Parametric plus non-parametric memory", "Knowledge-intensive tasks"],
        url: "https://arxiv.org/abs/2005.11401",
      },
      {
        id: "graphrag-paper-2",
        title: "From Local to Global: A GraphRAG Approach to Query-Focused Summarization",
        authors: "Edge et al.",
        year: 2024,
        venue: "arXiv",
        summary: "Popularized GraphRAG pipelines for structured evidence exploration.",
        type: "Recent",
        takeaways: ["Community summaries", "Graph-guided evidence aggregation"],
        url: "https://arxiv.org/abs/2404.16130",
      },
      {
        id: "graphrag-paper-3",
        title: "A Survey on Knowledge Graph Enhanced Large Language Models",
        authors: "Pan et al.",
        year: 2024,
        venue: "arXiv",
        summary: "Useful survey for bridging knowledge graphs and LLM workflows.",
        type: "Survey",
        takeaways: ["Integration patterns", "Open challenges"],
        url: "https://arxiv.org/abs/2403.14446",
      },
    ],
  },
  {
    slug: "multi-agent-systems",
    name: "Multi-Agent Systems",
    discipline: "Computer Science",
    shortDescription:
      "Study how multiple autonomous agents coordinate, plan, negotiate, and learn in shared environments.",
    overview:
      "Modern multi-agent systems span robotics, simulation, agentic LLM workflows, and distributed optimization.",
    whyItMatters:
      "The field helps students reason about teamwork between models, robots, or software agents rather than single-model intelligence.",
    maturity: "Active",
    difficulty: "Advanced",
    momentum: "Rising",
    timeToRamp: "3-5 weeks for fundamentals and one niche",
    keywords: ["coordination", "planning", "simulation", "negotiation", "decentralization"],
    coreQuestions: [
      "What coordination protocols scale under uncertainty?",
      "How should communication be constrained or structured?",
      "How do we evaluate collective behavior reliably?",
    ],
    beginnerSteps: [
      "Start with classical MARL or distributed systems concepts.",
      "Choose either LLM agents or embodied agents as a first subfield.",
      "Track evaluation setups carefully because metrics vary a lot across papers.",
    ],
    relatedDirections: ["Robotics", "Large Language Models", "Energy Systems"],
    subtopics: [
      {
        id: "mas-1",
        name: "Coordination Protocols",
        description: "Rules that govern collaboration or competition.",
        signal: "Central for robust system design.",
      },
      {
        id: "mas-2",
        name: "Agentic LLM Workflows",
        description: "Task decomposition, tool use, and shared memory across agents.",
        signal: "Fast-growing applied area.",
      },
      {
        id: "mas-3",
        name: "Simulation and Benchmarking",
        description: "Synthetic worlds for evaluating multi-agent behavior.",
        signal: "High leverage for reproducible research.",
      },
    ],
    papers: [
      {
        id: "mas-paper-1",
        title: "Multi-Agent Actor-Critic for Mixed Cooperative-Competitive Environments",
        authors: "Lowe et al.",
        year: 2017,
        venue: "NeurIPS",
        summary: "A standard entry point for multi-agent reinforcement learning.",
        type: "Foundational",
        takeaways: ["Centralized training", "Decentralized execution"],
        url: "https://arxiv.org/abs/1706.02275",
      },
      {
        id: "mas-paper-2",
        title: "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation",
        authors: "Wu et al.",
        year: 2023,
        venue: "COLM",
        summary: "A visible paper on conversational agent collaboration frameworks.",
        type: "Recent",
        takeaways: ["Agent roles", "Conversation-driven orchestration"],
        url: "https://arxiv.org/abs/2308.08155",
      },
      {
        id: "mas-paper-3",
        title: "Large Language Model based Multi-Agents: A Survey of Progress and Challenges",
        authors: "Guo et al.",
        year: 2024,
        venue: "IJCAI Survey Track",
        summary: "Survey for mapping current LLM-based agent systems.",
        type: "Survey",
        takeaways: ["Taxonomy", "Evaluation challenges"],
        url: "https://arxiv.org/abs/2402.01680",
      },
    ],
  },
  {
    slug: "medical-ai",
    name: "Medical AI",
    discipline: "Medicine",
    shortDescription:
      "Use machine learning and human-centered evaluation to support diagnosis, prognosis, triage, and clinical workflows.",
    overview:
      "Medical AI includes imaging, multimodal patient data, clinical language processing, and safety evaluation under real-world constraints.",
    whyItMatters:
      "This field has high social impact but requires more than model accuracy: trust, validation, deployment context, and ethics matter.",
    maturity: "Active",
    difficulty: "Intermediate",
    momentum: "Rising",
    timeToRamp: "2-4 weeks to build a basic map",
    keywords: ["clinical NLP", "imaging", "multimodal", "safety", "evaluation"],
    coreQuestions: [
      "How do models generalize across hospitals and populations?",
      "What evidence is sufficient for clinical adoption?",
      "How should human oversight be incorporated?",
    ],
    beginnerSteps: [
      "Start with one modality like imaging or clinical text.",
      "Read papers on dataset shift and external validation early.",
      "Track both model performance and deployment constraints.",
    ],
    relatedDirections: ["Bioinformatics", "Large Language Models", "Education Technology"],
    subtopics: [
      {
        id: "med-1",
        name: "Clinical Language Models",
        description: "Modeling notes, reports, and patient-facing text.",
        signal: "Strong translational interest.",
      },
      {
        id: "med-2",
        name: "Medical Imaging AI",
        description: "Diagnosis support for radiology, pathology, and beyond.",
        signal: "Mature but still fast moving.",
      },
      {
        id: "med-3",
        name: "Safety and Validation",
        description: "Generalization, calibration, and clinical risk management.",
        signal: "Mandatory for serious work in the field.",
      },
    ],
    papers: [
      {
        id: "med-paper-1",
        title: "CheXNet: Radiologist-Level Pneumonia Detection on Chest X-Rays",
        authors: "Rajpurkar et al.",
        year: 2017,
        venue: "arXiv",
        summary: "A visible early paper in medical imaging AI.",
        type: "Foundational",
        takeaways: ["Deep learning in radiology", "Benchmark-driven adoption"],
        url: "https://arxiv.org/abs/1711.05225",
      },
      {
        id: "med-paper-2",
        title: "Toward Expert-Level Medical Question Answering with Large Language Models",
        authors: "Singhal et al.",
        year: 2023,
        venue: "Nature",
        summary: "Highlighted the potential of domain-adapted LLMs in medicine.",
        type: "Recent",
        takeaways: ["Domain tuning", "Benchmark-driven clinical QA"],
        url: "https://arxiv.org/abs/2305.09617",
      },
      {
        id: "med-paper-3",
        title: "A Survey of Clinical Natural Language Processing",
        authors: "Wang et al.",
        year: 2024,
        venue: "ACM Computing Surveys",
        summary: "Survey for students entering clinical NLP.",
        type: "Survey",
        takeaways: ["Tasks overview", "Data and privacy challenges"],
        url: "https://dl.acm.org/doi/10.1145/3641514",
      },
    ],
  },
  {
    slug: "materials-informatics",
    name: "Materials Informatics",
    discipline: "Materials",
    shortDescription:
      "Apply data-driven methods to materials discovery, property prediction, and experiment design.",
    overview:
      "Materials informatics connects materials science, chemistry, and machine learning to accelerate discovery of compounds and processes.",
    whyItMatters:
      "It offers a clear example of interdisciplinary research where data, simulation, and physical constraints all matter.",
    maturity: "Active",
    difficulty: "Intermediate",
    momentum: "Rising",
    timeToRamp: "2-3 weeks with domain basics",
    keywords: ["property prediction", "discovery", "simulation", "active learning", "crystals"],
    coreQuestions: [
      "How can models respect physical priors?",
      "Which representations work best for molecules and crystals?",
      "How do active learning loops reduce experiment cost?",
    ],
    beginnerSteps: [
      "Learn the problem framing before diving into benchmark leaderboards.",
      "Read one graph neural network paper and one active learning paper.",
      "Study how experiments or simulations generate labels.",
    ],
    relatedDirections: ["Energy Systems", "Physics", "Bioinformatics"],
    subtopics: [
      {
        id: "mat-1",
        name: "Molecular and Crystal Representation",
        description: "How materials are encoded for prediction tasks.",
        signal: "A recurring driver of performance gains.",
      },
      {
        id: "mat-2",
        name: "Inverse Design",
        description: "Searching for materials with target properties.",
        signal: "High-value frontier for discovery workflows.",
      },
      {
        id: "mat-3",
        name: "Closed-Loop Experimentation",
        description: "Active learning with robotic or lab pipelines.",
        signal: "Strong translational potential.",
      },
    ],
    papers: [
      {
        id: "mat-paper-1",
        title: "Crystal Graph Convolutional Neural Networks for an Accurate and Interpretable Prediction of Material Properties",
        authors: "Xie and Grossman",
        year: 2018,
        venue: "Physical Review Letters",
        summary: "Key work for crystal representation learning.",
        type: "Foundational",
        takeaways: ["Crystal graph encoding", "Interpretable property prediction"],
        url: "https://arxiv.org/abs/1710.10324",
      },
      {
        id: "mat-paper-2",
        title: "Benchmarking Graph Neural Networks for Materials Chemistry",
        authors: "Fung et al.",
        year: 2023,
        venue: "npj Computational Materials",
        summary: "Useful for understanding representation tradeoffs in practice.",
        type: "Recent",
        takeaways: ["Benchmark realism", "Model comparison"],
        url: "https://www.nature.com/articles/s41524-023-01035-z",
      },
      {
        id: "mat-paper-3",
        title: "Materials Informatics: Methods, Tools, and Applications",
        authors: "Butler et al.",
        year: 2018,
        venue: "Nature",
        summary: "A broad overview for entering the field.",
        type: "Survey",
        takeaways: ["Field overview", "Discovery workflow framing"],
        url: "https://www.nature.com/articles/s41578-018-0045-z",
      },
    ],
  },
  {
    slug: "bioinformatics",
    name: "Bioinformatics",
    discipline: "Biology",
    shortDescription:
      "Use computation to analyze biological sequences, structures, systems, and experimental data.",
    overview:
      "Bioinformatics spans genomics, transcriptomics, structural biology, and systems biology with a strong emphasis on reproducible data analysis.",
    whyItMatters:
      "It is one of the clearest entry points into data-intensive biology and an accessible bridge for interdisciplinary students.",
    maturity: "Foundational",
    difficulty: "Beginner",
    momentum: "Steady",
    timeToRamp: "1-2 weeks for a broad survey",
    keywords: ["genomics", "single-cell", "proteins", "pipelines", "reproducibility"],
    coreQuestions: [
      "How do we interpret high-dimensional biological data?",
      "Which models meaningfully reflect biology rather than artifacts?",
      "How can analysis pipelines stay reproducible and robust?",
    ],
    beginnerSteps: [
      "Choose one biological data type before broadening scope.",
      "Read one methods paper and one benchmark or review paper.",
      "Learn the pipeline assumptions, not only the model architecture.",
    ],
    relatedDirections: ["Medical AI", "Materials Informatics", "Education Technology"],
    subtopics: [
      {
        id: "bio-1",
        name: "Single-Cell Analysis",
        description: "Understanding cell populations from high-dimensional assays.",
        signal: "Still a fast-moving methods ecosystem.",
      },
      {
        id: "bio-2",
        name: "Protein Modeling",
        description: "Sequence, structure, and function prediction.",
        signal: "A major frontier with broad downstream impact.",
      },
      {
        id: "bio-3",
        name: "Reproducible Pipelines",
        description: "Workflow systems and standardized analysis practices.",
        signal: "High leverage for reliable research.",
      },
    ],
    papers: [
      {
        id: "bio-paper-1",
        title: "The Sequence Alignment/Map format and SAMtools",
        authors: "Li et al.",
        year: 2009,
        venue: "Bioinformatics",
        summary: "A foundational paper for practical genomics workflows.",
        type: "Foundational",
        takeaways: ["Core file formats", "Tooling standardization"],
        url: "https://academic.oup.com/bioinformatics/article/25/16/2078/204688",
      },
      {
        id: "bio-paper-2",
        title: "Highly accurate protein structure prediction with AlphaFold",
        authors: "Jumper et al.",
        year: 2021,
        venue: "Nature",
        summary: "A landmark paper in protein structure prediction.",
        type: "Recent",
        takeaways: ["Structure prediction leap", "Benchmark transformation"],
        url: "https://www.nature.com/articles/s41586-021-03819-2",
      },
      {
        id: "bio-paper-3",
        title: "A Review of Single-Cell RNA-seq Analysis Tools",
        authors: "Luecken and Theis",
        year: 2019,
        venue: "Molecular Systems Biology",
        summary: "A clean entry survey for single-cell workflows.",
        type: "Survey",
        takeaways: ["Pipeline map", "Method selection guidance"],
        url: "https://www.embopress.org/doi/full/10.15252/msb.20188746",
      },
    ],
  },
  {
    slug: "robotics",
    name: "Robotics",
    discipline: "Engineering",
    shortDescription:
      "Study perception, planning, control, and learning for embodied agents that act in the physical world.",
    overview:
      "Robotics integrates sensing, control, simulation, machine learning, and hardware realities into one research workflow.",
    whyItMatters:
      "It gives beginners a field where algorithms must survive contact with real environments, not just benchmarks.",
    maturity: "Foundational",
    difficulty: "Advanced",
    momentum: "Rising",
    timeToRamp: "3-6 weeks depending on background",
    keywords: ["control", "planning", "manipulation", "sim2real", "embodied AI"],
    coreQuestions: [
      "How do models transfer from simulation to hardware?",
      "What abstractions make planning robust?",
      "When should learning replace hand-engineered control?",
    ],
    beginnerSteps: [
      "Separate perception, planning, and control when first mapping the field.",
      "Choose one embodied task such as navigation or manipulation.",
      "Read both system papers and benchmarking papers.",
    ],
    relatedDirections: ["Multi-Agent Systems", "Energy Systems", "Education Technology"],
    subtopics: [
      {
        id: "rob-1",
        name: "Embodied Foundation Models",
        description: "General-purpose policies and representations for robot tasks.",
        signal: "Visible frontier in labs and industry.",
      },
      {
        id: "rob-2",
        name: "Manipulation Learning",
        description: "Grasping, dexterity, and task-conditioned interaction.",
        signal: "Strong benchmark and application activity.",
      },
      {
        id: "rob-3",
        name: "Sim-to-Real Transfer",
        description: "Bridging performance gaps from synthetic training to deployment.",
        signal: "Persistent systems bottleneck.",
      },
    ],
    papers: [
      {
        id: "rob-paper-1",
        title: "Probabilistic Robotics",
        authors: "Thrun, Burgard, and Fox",
        year: 2005,
        venue: "Book",
        summary: "Classic foundation for state estimation and decision making in robotics.",
        type: "Foundational",
        takeaways: ["Localization", "Bayesian inference"],
        url: "https://mitpress.mit.edu/9780262201629/probabilistic-robotics/",
      },
      {
        id: "rob-paper-2",
        title: "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control",
        authors: "Brohan et al.",
        year: 2023,
        venue: "CoRL",
        summary: "A notable example of foundation-model style robotics.",
        type: "Recent",
        takeaways: ["Vision-language-action scaling", "Knowledge transfer"],
        url: "https://arxiv.org/abs/2307.15818",
      },
      {
        id: "rob-paper-3",
        title: "A Survey of Robot Learning from Demonstration",
        authors: "Argall et al.",
        year: 2009,
        venue: "Robotics and Autonomous Systems",
        summary: "Useful for learning-centric entry into robotics.",
        type: "Survey",
        takeaways: ["Demonstration learning foundations", "Design challenges"],
        url: "https://www.sciencedirect.com/science/article/pii/S0921889008001772",
      },
    ],
  },
  {
    slug: "energy-systems",
    name: "Energy Systems",
    discipline: "Energy",
    shortDescription:
      "Model optimization, control, and forecasting problems across power grids, storage, and low-carbon energy systems.",
    overview:
      "Energy systems research spans operations research, grid reliability, forecasting, and policy-aware engineering for sustainable infrastructure.",
    whyItMatters:
      "It is a beginner-friendly way to enter impactful systems research with clear real-world constraints and interdisciplinary ties.",
    maturity: "Foundational",
    difficulty: "Intermediate",
    momentum: "Steady",
    timeToRamp: "2-3 weeks for grid basics plus one topic",
    keywords: ["grid optimization", "forecasting", "storage", "reliability", "decarbonization"],
    coreQuestions: [
      "How can renewable variability be handled reliably?",
      "What optimization methods are practical for real-time operations?",
      "How do market design and engineering constraints interact?",
    ],
    beginnerSteps: [
      "Start with the energy system component you understand least.",
      "Read one forecasting paper and one optimization paper.",
      "Track how assumptions change between academic and real deployment settings.",
    ],
    relatedDirections: ["Materials Informatics", "Multi-Agent Systems", "Nuclear Safety AI"],
    subtopics: [
      {
        id: "energy-1",
        name: "Grid Forecasting",
        description: "Prediction of demand, generation, and system conditions.",
        signal: "A practical and accessible entry topic.",
      },
      {
        id: "energy-2",
        name: "Storage and Dispatch Optimization",
        description: "Balancing generation, storage, and load over time.",
        signal: "Central to low-carbon infrastructure planning.",
      },
      {
        id: "energy-3",
        name: "Resilience and Reliability",
        description: "Planning for disruptions, uncertainty, and safety.",
        signal: "Increasingly important under climate stress.",
      },
    ],
    papers: [
      {
        id: "energy-paper-1",
        title: "Short-Term Load Forecasting: The Similar Day-Based Wavelet Neural Networks",
        authors: "Zhang et al.",
        year: 2001,
        venue: "IEEE Transactions",
        summary: "One early reference point for load forecasting.",
        type: "Foundational",
        takeaways: ["Forecasting basics", "Applied energy prediction framing"],
        url: "https://ieeexplore.ieee.org/document/946072",
      },
      {
        id: "energy-paper-2",
        title: "Deep Learning for Energy Markets and Systems: A Review and Taxonomy",
        authors: "Wen et al.",
        year: 2023,
        venue: "Applied Energy",
        summary: "Survey for modern ML in power and energy systems.",
        type: "Survey",
        takeaways: ["Methods map", "Use-case taxonomy"],
        url: "https://www.sciencedirect.com/science/article/pii/S0306261922017460",
      },
      {
        id: "energy-paper-3",
        title: "Physics-Informed Machine Learning for Power Systems",
        authors: "Chen et al.",
        year: 2024,
        venue: "arXiv",
        summary: "Representative of hybrid model trends in energy systems.",
        type: "Recent",
        takeaways: ["Constraint-aware learning", "Operational realism"],
        url: "https://arxiv.org/abs/2401.06186",
      },
    ],
  },
  {
    slug: "nuclear-safety-ai",
    name: "Nuclear Safety AI",
    discipline: "Interdisciplinary",
    shortDescription:
      "Apply AI to monitoring, anomaly detection, decision support, and safety analysis in nuclear systems.",
    overview:
      "This field combines safety-critical engineering, digital twins, signal analysis, and cautious AI deployment in tightly regulated environments.",
    whyItMatters:
      "It is a strong example of frontier work where reliability, explainability, and governance are as important as model performance.",
    maturity: "Emerging",
    difficulty: "Advanced",
    momentum: "Rising",
    timeToRamp: "3-4 weeks with systems background",
    keywords: ["anomaly detection", "digital twin", "monitoring", "safety-critical AI", "risk"],
    coreQuestions: [
      "How can AI support operators without undermining trust?",
      "What evidence is needed for validation in safety-critical environments?",
      "How should uncertainty be communicated for operational decisions?",
    ],
    beginnerSteps: [
      "Start with nuclear systems context, not only the model side.",
      "Read one anomaly detection paper and one safety evaluation paper.",
      "Map stakeholders and failure modes before proposing methods.",
    ],
    relatedDirections: ["Energy Systems", "Medical AI", "Robotics"],
    subtopics: [
      {
        id: "nuclear-1",
        name: "Anomaly Detection",
        description: "Monitoring signals and events for early risk detection.",
        signal: "Common entry point for applied projects.",
      },
      {
        id: "nuclear-2",
        name: "Digital Twin Support",
        description: "Hybrid models for system understanding and simulation.",
        signal: "Growing interest in modern plant analytics.",
      },
      {
        id: "nuclear-3",
        name: "Human-AI Decision Support",
        description: "Operator-facing interfaces for safe intervention.",
        signal: "Important but underexplored area.",
      },
    ],
    papers: [
      {
        id: "nuclear-paper-1",
        title: "Artificial Intelligence Methods for Nuclear Power Plant Diagnostics",
        authors: "Upadhyaya and Zhao",
        year: 1995,
        venue: "Nuclear Engineering and Design",
        summary: "Historical starting point for AI-assisted diagnostics.",
        type: "Foundational",
        takeaways: ["Diagnostics framing", "Early expert systems context"],
        url: "https://www.sciencedirect.com/science/article/pii/0029549395900616",
      },
      {
        id: "nuclear-paper-2",
        title: "Digital Twins in Nuclear Power Systems: Opportunities and Challenges",
        authors: "Aldemir et al.",
        year: 2023,
        venue: "Progress in Nuclear Energy",
        summary: "A relevant bridge between modeling, monitoring, and operations.",
        type: "Recent",
        takeaways: ["Digital twin architecture", "Validation concerns"],
        url: "https://www.sciencedirect.com/science/article/pii/S0149197023001278",
      },
      {
        id: "nuclear-paper-3",
        title: "AI for Safety-Critical Infrastructure: A Review",
        authors: "Various",
        year: 2024,
        venue: "arXiv",
        summary: "Useful broader survey context for safety-critical deployment.",
        type: "Survey",
        takeaways: ["Trust and governance", "Deployment risk"],
        url: "https://arxiv.org/abs/2403.01754",
      },
    ],
  },
  {
    slug: "education-technology",
    name: "Education Technology",
    discipline: "Education",
    shortDescription:
      "Research how digital tools, learning science, and AI can improve teaching, feedback, and personalized learning.",
    overview:
      "Education technology spans learning analytics, intelligent tutoring, assessment, and human-centered study support.",
    whyItMatters:
      "It is highly relevant to beginner researchers because it connects directly to how people learn, scaffold, and build research skills.",
    maturity: "Foundational",
    difficulty: "Beginner",
    momentum: "Steady",
    timeToRamp: "1-2 weeks to gain orientation",
    keywords: ["tutoring", "learning analytics", "feedback", "assessment", "personalization"],
    coreQuestions: [
      "What types of feedback actually improve learning outcomes?",
      "How do we design support without increasing cognitive overload?",
      "How should AI be evaluated in authentic classroom settings?",
    ],
    beginnerSteps: [
      "Begin with learning science concepts before product features.",
      "Compare one tutoring-system paper with one classroom deployment study.",
      "Focus on measurable learner outcomes, not only engagement metrics.",
    ],
    relatedDirections: ["Large Language Models", "Medical AI", "Bioinformatics"],
    subtopics: [
      {
        id: "edu-1",
        name: "Intelligent Tutoring Systems",
        description: "Personalized guidance and feedback loops for learners.",
        signal: "A long-running and still relevant foundation.",
      },
      {
        id: "edu-2",
        name: "Generative Feedback",
        description: "Using AI to support writing, practice, and reflection.",
        signal: "Rapidly growing frontier area.",
      },
      {
        id: "edu-3",
        name: "Learning Analytics",
        description: "Understanding student behavior and progress through data.",
        signal: "Important for evidence-based intervention design.",
      },
    ],
    papers: [
      {
        id: "edu-paper-1",
        title: "The Cognitive Tutor: Lessons Learned",
        authors: "Koedinger et al.",
        year: 1997,
        venue: "Journal of the Learning Sciences",
        summary: "A foundational reference for intelligent tutoring design.",
        type: "Foundational",
        takeaways: ["Scaffolding design", "Human learning model integration"],
        url: "https://www.tandfonline.com/doi/abs/10.1207/s15327809jls0603_1",
      },
      {
        id: "edu-paper-2",
        title: "Generative AI in Education: Opportunities and Challenges",
        authors: "Kasneci et al.",
        year: 2023,
        venue: "Nature Machine Intelligence",
        summary: "A good overview of current generative AI discussions in education.",
        type: "Recent",
        takeaways: ["Risk-benefit framing", "Evaluation gaps"],
        url: "https://www.nature.com/articles/s42256-023-00680-9",
      },
      {
        id: "edu-paper-3",
        title: "Learning Analytics: Definitions, Processes and Potential",
        authors: "Siemens and Long",
        year: 2011,
        venue: "EDUCAUSE Review",
        summary: "A classic entry point for analytics in education research.",
        type: "Survey",
        takeaways: ["Field framing", "Data-informed teaching"],
        url: "https://er.educause.edu/articles/2011/9/learning-analytics-definitions-processes-and-potential",
      },
    ],
  },
];

export const learningPaths: LearningPath[] = [
  {
    id: "path-7-day",
    name: "7-Day Quick Start",
    duration: "7 days",
    objective:
      "Get a practical map of one topic fast without drowning in papers.",
    targetUser: "Undergraduates or first-time research readers",
    outcomes: [
      "One topic summary",
      "A shortlist of 5 papers",
      "Three concrete questions to explore next",
    ],
    readingMilestones: [
      "Day 1: field overview",
      "Day 3: foundational papers",
      "Day 6: recent frontier scan",
    ],
    steps: [
      "Choose one topic and write a three-sentence why-it-matters note.",
      "Read one survey or overview before reading any recent papers.",
      "Identify two foundational papers and summarize their contributions.",
      "Scan five recent papers only for trends, not deep details.",
      "List knowledge gaps and turn them into beginner-friendly questions.",
    ],
  },
  {
    id: "path-14-day",
    name: "14-Day Topic Survey",
    duration: "14 days",
    objective:
      "Move from curiosity to a reliable field survey with reading structure.",
    targetUser: "Master's students exploring lab directions",
    outcomes: [
      "Topic landscape map",
      "Annotated reading list",
      "A first literature review outline",
    ],
    readingMilestones: [
      "Week 1: foundations and terminology",
      "Week 2: subtopics and active frontier",
    ],
    steps: [
      "Map the field into 3-4 subtopics and define each in plain language.",
      "Separate foundational, active, and emerging papers in your notes.",
      "Track recurring datasets, methods, and evaluation metrics.",
      "Write a one-page literature survey draft by the end of week two.",
    ],
  },
  {
    id: "path-30-day",
    name: "30-Day Research Onboarding",
    duration: "30 days",
    objective:
      "Build enough context to join a project or discuss a field with confidence.",
    targetUser: "New graduate students preparing for a lab or thesis topic",
    outcomes: [
      "Field briefing deck or memo",
      "A living workspace of notes",
      "A shortlist of candidate project ideas",
    ],
    readingMilestones: [
      "Week 1: orientation",
      "Week 2: deeper reading",
      "Week 3: trend tracking",
      "Week 4: idea framing",
    ],
    steps: [
      "Spend the first week building terminology, not chasing novelty.",
      "Use the workspace to save papers, notes, and unresolved questions.",
      "Track one fast-moving theme weekly and compare it against foundations.",
      "Draft two possible project directions with risks and dependencies.",
    ],
  },
  {
    id: "path-frontier",
    name: "Beginner to Frontier",
    duration: "4-6 weeks",
    objective:
      "Bridge from field basics to a defensible view of what is actually frontier.",
    targetUser: "Students who need to identify a promising research direction",
    outcomes: [
      "Frontier tracking dashboard",
      "Open question list",
      "A project-ready report draft",
    ],
    readingMilestones: [
      "Foundations first",
      "Then active baselines",
      "Finally frontier differentiation",
    ],
    steps: [
      "Define what counts as frontier in the topic and what is still unresolved.",
      "Compare recent papers against core limitations in the foundational work.",
      "Identify one underexplored niche with clear beginner entry points.",
      "Turn your notes into a structured report or presentation.",
    ],
  },
];

export const trends: Trend[] = [
  {
    id: "trend-1",
    name: "Scientific GraphRAG",
    discipline: "Interdisciplinary",
    summary:
      "Teams are using graph-backed retrieval to navigate fragmented scientific evidence more transparently.",
    signal: "Growing interest in literature synthesis and hypothesis support.",
    growthRate: 82,
    momentumLabel: "Hot",
    keywords: ["GraphRAG", "literature graph", "multi-hop evidence"],
  },
  {
    id: "trend-2",
    name: "Clinical Multimodal Foundation Models",
    discipline: "Medicine",
    summary:
      "Models combining text, images, and structured records are becoming central to medical AI roadmaps.",
    signal: "Strong cross-pollination from general multimodal model research.",
    growthRate: 77,
    momentumLabel: "Accelerating",
    keywords: ["clinical multimodal", "diagnosis support", "evaluation"],
  },
  {
    id: "trend-3",
    name: "Closed-Loop Materials Discovery",
    discipline: "Materials",
    summary:
      "Materials research is shifting from static prediction toward iterative experiment-design loops.",
    signal: "Higher interest in robotic labs and active learning systems.",
    growthRate: 69,
    momentumLabel: "Accelerating",
    keywords: ["active learning", "robotic lab", "inverse design"],
  },
  {
    id: "trend-4",
    name: "LLM Agents for Research Workflows",
    discipline: "Computer Science",
    summary:
      "Researchers are studying multi-agent coordination for planning, reviewing, and synthesis tasks.",
    signal: "Fast iteration, but evaluation remains immature.",
    growthRate: 85,
    momentumLabel: "Hot",
    keywords: ["agents", "tool use", "planning", "review automation"],
  },
  {
    id: "trend-5",
    name: "Grid-Aware ML",
    discipline: "Energy",
    summary:
      "Energy ML work is moving toward physics-aware and optimization-aware models instead of pure black-box prediction.",
    signal: "Signals stronger maturity in practical deployment thinking.",
    growthRate: 58,
    momentumLabel: "Watch",
    keywords: ["power systems", "physics-informed", "forecasting"],
  },
];

export const featuredTopicSlugs = [
  "large-language-models",
  "medical-ai",
  "materials-informatics",
  "energy-systems",
];

export const onboardingChecklist = [
  "Pick one field and define it in plain language.",
  "Read a survey before you read the latest trend paper.",
  "Separate foundational reading from frontier scanning.",
  "Write three research questions while reading.",
];

export const defaultWorkspaceState: WorkspaceState = {
  savedTopics: ["graphrag", "medical-ai"],
  savedPapers: ["graphrag-paper-2", "med-paper-2"],
  notes: [
    {
      id: "note-1",
      title: "Why GraphRAG feels promising",
      content:
        "Interpretability and multi-hop evidence tracing seem especially useful for literature synthesis and beginner understanding.",
      topicSlug: "graphrag",
      updatedAt: "2026-03-27",
    },
    {
      id: "note-2",
      title: "Medical AI caution",
      content:
        "Need to pay attention to external validation and deployment context, not only model scores.",
      topicSlug: "medical-ai",
      updatedAt: "2026-03-25",
    },
  ],
  researchQuestions: [
    {
      id: "rq-1",
      question:
        "How should graph construction quality be evaluated for scientific GraphRAG?",
      topicSlug: "graphrag",
      status: "refining",
    },
    {
      id: "rq-2",
      question:
        "What kind of validation is sufficient before a medical AI assistant enters workflow pilots?",
      topicSlug: "medical-ai",
      status: "open",
    },
  ],
  tasks: [
    { id: "task-1", label: "Finish one survey paper this week", done: true },
    { id: "task-2", label: "Summarize 3 foundational papers", done: false },
    { id: "task-3", label: "Write one possible project idea", done: false },
  ],
  readingProgress: 42,
};

export const disciplineOptions = [
  "All disciplines",
  "Computer Science",
  "Engineering",
  "Physics",
  "Biology",
  "Medicine",
  "Materials",
  "Energy",
  "Education",
  "Interdisciplinary",
] as const;

export const maturityOptions = [
  "All maturity levels",
  "Foundational",
  "Active",
  "Emerging",
] as const;

export function getTopicBySlug(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getPaperById(id: string) {
  for (const topic of topics) {
    const paper = topic.papers.find((item) => item.id === id);
    if (paper) {
      return { paper, topic };
    }
  }
  return undefined;
}
