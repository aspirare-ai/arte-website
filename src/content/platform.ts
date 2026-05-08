export const platformContent = {
  hero: {
    eyebrow: 'The Platform',
    title: 'How does',
    titleAccent: 'ARTE work?',
    description:
      'A unified MLOps platform that handles the entire lifecycle — data, training, deployment, monitoring, and continuous improvement — that is easy to use.'
  },
  flow: {
    eyebrow: 'The lifecycle',
    title: 'A continuous loop,',
    titleAccent: 'not a pipeline that ends.',
    description:
      'Most teams stitch together five tools to do what ARTE does in one. Here is the path your data takes from raw signal to a self-improving production model.',
    steps: [
      {
        step: '01',
        title: 'Ingest',
        body: 'Connect to streaming, batch, and warehouse sources. ARTE validates and versions every dataset.'
      },
      {
        step: '02',
        title: 'Train',
        body: 'Spin up distributed training with experiment tracking and hyperparameter search built in.'
      },
      {
        step: '03',
        title: 'Deploy',
        body: 'Promote models to staging or production with one click, A/B tests, and instant rollback.'
      },
      {
        step: '04',
        title: 'Monitor',
        body: 'Watch performance, drift, and bias in real time with automated alerts and dashboards.'
      },
      {
        step: '05',
        title: 'Learn',
        body: 'Reinforcement loops and retraining triggers keep models current as the world changes.'
      }
    ]
  },
  architecture: {
    eyebrow: 'Architecture',
    title: 'Five layers,',
    titleAccent: 'one platform.',
    description:
      'ARTE is built as a composable platform — each layer is opinionated where it should be, open where it must be.',
    components: [
      {
        title: 'Data Management Layer',
        description:
          'Centralized data ingestion, validation, and versioning. Structured sources, automated quality checks, and reusable feature engineering pipelines.',
        capabilities: [
          'Multi-source data connectors',
          'Automated data validation',
          'Version control for datasets',
          'Feature store integration'
        ]
      },
      {
        title: 'Model Training Infrastructure',
        description:
          'Scalable, distributed training with system resources, experiment tracking, and hyperparameter optimization — without leaving the platform.',
        capabilities: [
          'Distributed training support',
          'Auto-scaling compute resources',
          'Experiment tracking and versioning',
          'Hyperparameter optimization',
          'Multi-framework support'
        ]
      },
      {
        title: 'Model Deployment & Serving',
        description:
          'One-click deployment to any environment with first-class support for A/B testing, canary releases, and instant rollback. Auto-scaling endpoints, REST out of the box.',
        capabilities: [
          'Multi-environment deployment',
          'A/B testing and canary releases',
          'Auto-scaling inference endpoints',
          'Model versioning and rollback',
          'REST API support'
        ]
      },
      {
        title: 'Monitoring & Observability',
        description:
          'Real-time visibility into model performance, drift, and behavior. Automated alerting on anomalies and full audit trails for compliance teams.',
        capabilities: [
          'Real-time performance monitoring',
          'Data drift detection',
          'Automated alerting system',
          'Custom metrics and dashboards',
          'Audit trails and compliance reporting'
        ]
      },
      {
        title: 'Continuous Learning Pipeline',
        description:
          'Automated retraining, feedback-loop integration, and zero-downtime updates. Your models stay current without anyone babysitting a job.',
        capabilities: [
          'Automated retraining triggers',
          'Feedback loop integration',
          'Zero-downtime model updates',
          'Performance-based optimization',
          'Custom learning strategies'
        ]
      }
    ]
  },
  technology: {
    eyebrow: 'Technology stack',
    title: 'Built on',
    titleAccent: 'proven foundations.',
    description:
      'Open standards, mature tooling, and cloud-agnostic infrastructure — so you keep portability and avoid lock-in.',
    stack: [
      {
        category: 'Infrastructure',
        items: ['Docker', 'Cloud-agnostic architecture']
      },
      {
        category: 'ML Frameworks',
        items: ['Scikit-learn', 'XGBoost', 'Hugging Face']
      },
      {
        category: 'Data Processing',
        items: ['Redis', 'PostgreSQL']
      },
      {
        category: 'Monitoring',
        items: ['Custom alerts', 'Custom dashboards']
      }
    ]
  },
  security: {
    eyebrow: 'Security & privacy',
    title: 'Designed for',
    titleAccent: 'sensitive workloads.',
    description:
      'Security is not an add-on — it is the architecture. ARTE meets the bar that government, healthcare, and regulated enterprises set.',
    features: [
      'Role-based access control (RBAC)',
      'GDPR and HIPAA ready',
      'Regular security audits',
      'Data residency options'
    ]
  },
  finalCta: {
    title: 'Want to go deeper?',
    body: 'A live walkthrough is the fastest way to see how ARTE fits your environment, data, and team.',
    primary: 'Request a demo'
  }
}
