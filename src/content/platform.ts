export const platformContent = {
  hero: {
    title: 'How Does ARTE Work?',
    description: 'A comprehensive MLOps platform built for enterprise scale and complexity'
  },
  architecture: {
    title: 'Platform Architecture',
    description: 'ARTE provides a complete end-to-end solution for managing the entire machine learning lifecycle.',
    components: [
      {
        title: 'Data Management Layer',
        description: 'Centralized data ingestion, validation, and versioning system. Support for structured and unstructured data from multiple sources. Automated data quality checks and feature engineering pipelines.',
        capabilities: [
          'Multi-source data connectors',
          'Automated data validation',
          'Version control for datasets',
          'Feature store integration'
        ]
      },
      {
        title: 'Model Training Infrastructure',
        description: 'Scalable training environment with support for distributed computing. Auto-scaling GPU/CPU resources based on workload. Experiment tracking and hyperparameter optimization built-in.',
        capabilities: [
          'Distributed training support',
          'Auto-scaling compute resources',
          'Experiment tracking and versioning',
          'Hyperparameter optimization',
          'Multi-framework support (TensorFlow, PyTorch, Scikit-learn)'
        ]
      },
      {
        title: 'Model Deployment & Serving',
        description: 'One-click deployment to production environments. Support for A/B testing and canary deployments. Auto-scaling inference endpoints with load balancing.',
        capabilities: [
          'Multi-environment deployment',
          'A/B testing and canary releases',
          'Auto-scaling inference endpoints',
          'Model versioning and rollback',
          'REST and gRPC API support'
        ]
      },
      {
        title: 'Monitoring & Observability',
        description: 'Real-time monitoring of model performance and data drift. Automated alerting for anomalies and degradation. Comprehensive logging and audit trails for compliance.',
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
        description: 'Automated retraining workflows based on performance thresholds. Feedback loop integration for model improvement. Seamless model updates without downtime.',
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
    title: 'Technology Stack',
    description: 'Built on proven, enterprise-grade technologies',
    stack: [
      {
        category: 'Infrastructure',
        items: ['Kubernetes', 'Docker', 'Terraform', 'Cloud-agnostic architecture']
      },
      {
        category: 'ML Frameworks',
        items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Hugging Face']
      },
      {
        category: 'Data Processing',
        items: ['Apache Spark', 'Apache Kafka', 'Redis', 'PostgreSQL']
      },
      {
        category: 'Monitoring',
        items: ['Prometheus', 'Grafana', 'ELK Stack', 'Custom dashboards']
      }
    ]
  },
  security: {
    title: 'Enterprise Security',
    features: [
      'End-to-end encryption',
      'Role-based access control (RBAC)',
      'SOC 2 Type II compliance',
      'GDPR and HIPAA ready',
      'Regular security audits',
      'Data residency options'
    ]
  }
};
