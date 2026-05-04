import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'sae105-but1',
    title: 'SAE 1.05 - Traitement de données',
    category: 'Programmation',
    year: 'BUT1 (2023-2024)',
    description: 'Développement d\'un programme Python pour l\'analyse de données CSV et la génération de frises chronologiques d\'emplois du temps.',
    details: [
      'Récupération de données au format CSV et traitement pour créer un tableau et une frise chronologique récapitulative des cours.',
      'Prise en compte de la classe de l\'étudiant et des modules spécifiques au programme sur les deux semestres (BUT1, BUT2 ou BUT3).',
      'Développement itératif avec des livraisons hebdomadaires de fonctions sur GitLab.',
      'Utilisation intensive de tests unitaires pour le débogage et la validation des fonctions.',
      'Maîtrise des concepts Python : slicing, manipulation de fichiers, boucles imbriquées et réutilisation de fonctions.',
      'Génération de rapports finaux incluant des tableaux au format Markdown.'
    ],
    technologies: ['Python', 'CSV', 'GitLab', 'Markdown', 'Unit Testing'],
    images: [
      { url: '/src/assets/sae/sae105/SAE.png', caption: 'Logique de traitement et manipulation de listes' },
      { url: '/src/assets/sae/sae105/ex_fonction.png', caption: 'Exemple de fonction de traitement' }
    ]
  },
  {
    id: 'sae201-but1',
    title: 'SAE 2.01 - Infrastructure OpenStack',
    category: 'Réseau',
    year: 'BUT1 (2023-2024)',
    description: 'Installation et configuration d\'une infrastructure réseau multi-machines via la plateforme Cloud OpenStack.',
    details: [
      'Mise en place d\'instances Linux et Windows au sein d\'un réseau virtuel segmenté.',
      'Installation et configuration de services réseaux critiques : DNS (Bind9), FTP et pare-feu.',
      'Déploiement de Grafana pour la visualisation en temps réel des métriques serveurs via une interface Web.',
      'Gestion du stockage via la création et l\'attachement de volumes, et sécurisation des accès par clés SSH.',
      'Respect d\'un cahier des charges strict avec des contraintes de temps réelles.',
      'Simulation d\'une infrastructure d\'entreprise pour appréhender les environnements de production.'
    ],
    technologies: ['OpenStack', 'Linux', 'DNS', 'FTP', 'Grafana', 'SSH'],
    images: [
      { url: '/src/assets/sae/sae201/VueInstances.png', caption: 'Visualisation des instances' },
      { url: '/src/assets/sae/sae201/Grafana.png', caption: 'Monitoring Grafana' }
    ]
  },
  {
    id: 'r502-supervision',
    title: 'R502 - Supervision des réseaux',
    category: 'Réseau',
    year: 'BUT3 (2025-2026)',
    description: 'Mise en œuvre de solutions de monitoring (Zabbix, PRTG, Grafana) pour garantir la disponibilité et la performance des infrastructures IT.',
    details: [
      'Zabbix : Déploiement d\'une solution Open Source robuste, configuration d\'agents, de templates et de triggers complexes, utilisation de la découverte automatique (LLD).',
      'PRTG Network Monitor : Supervision d\'un parc hétérogène via capteurs SNMP/NetFlow/sFlow et configuration de notifications automatiques.',
      'Grafana : Création de dashboards dynamiques et interactifs connectés à des bases de données temporelles (InfluxDB, Prometheus) ou Zabbix.',
      'Pilotage NOC : Centralisation et mise en valeur esthétique des métriques pour le pilotage opérationnel et la définition de KPIs clairs.',
      'Diagnostic : Interprétation des tableaux de bord pour le diagnostic rapide de pannes matérielles ou de goulots d\'étranglement.'
    ],
    technologies: ['Zabbix', 'PRTG', 'Grafana', 'SNMP', 'NetFlow', 'InfluxDB', 'Prometheus'],
    images: []
  },
  {
    id: 'cyber-but3',
    title: 'SAE 5.Cyber.03 - Sécurisation et Supervision d\'un SI',
    category: 'Cybersécurité',
    year: 'BUT3 (2025-2026)',
    description: 'Conception d\'une infrastructure PME résiliente avec une approche "Security by Design" et respect des recommandations de l\'ANSSI.',
    details: [
      'Architecture multi-firewall : WatchGuard (physique) en front et pfSense (virtualisé) pour le filtrage interne et le routage inter-VLAN.',
      'Virtualisation hybride : Utilisation de Proxmox pour le SI interne et VMware ESXi pour l\'isolation physique de la DMZ.',
      'Sécurisation Active Directory : Mise en œuvre du modèle de Tiering Microsoft (Tier 0, 1, 2) et utilisation de stations d\'administration PAW.',
      'Supervision et Détection : Centralisation des logs et détection d\'intrusions via Wazuh (SIEM/XDR) et monitoring PRTG.',
      'Résilience : Stratégie de sauvegarde quotidienne via Veeam Backup pour l\'Active Directory et le serveur de fichiers.',
      'Audit de sécurité : Réalisation d\'un audit croisé (Boîte Noire/Grise) utilisant BloodHound, Rubeus, Nmap et Metasploit.',
      'Services critiques : Déploiement de Docker en DMZ et gestionnaire de mots de passe Vaultwarden auto-hébergé.'
    ],
    technologies: ['WatchGuard', 'pfSense', 'Proxmox', 'VMware ESXi', 'Wazuh', 'PRTG', 'Veeam', 'Active Directory Tiering'],
    images: [
      { url: '/src/assets/sae/sae5cy03/Supervision_SI.jpg', caption: 'Supervision du système d\'information' },
      { url: '/src/assets/sae/sae5cy03/Infra_SAEcy03.jpg', caption: 'Infrastructure réseau et sécurité' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'edf-bugey',
    company: 'EDF - CNPE du Bugey',
    role: 'Pilote d\'exploitation Télécoms (Alternance)',
    period: '2024 - 2026',
    location: 'Saint-Vulbas, France',
    description: 'Maintien en condition opérationnelle des équipements de télécommunications de la centrale nucléaire du Bugey.',
    fullDescription: "J'ai été embauché pour mon contrat d'apprentissage en tant que pilote d'exploitation télécommunications au sein d'EDF au Centre Nucléaire de Production Eléctrique du Bugey dans le service DIGIT (ex UNITEP). Notre service est composé d'une quinzaine de personnes et nos missions consistent à maintenir et à installer les systèmes de télécommunications nécessaires au fonctionnement de la centrale nucléaire du Bugey.",
    companyDetails: "EDF (Électricité de France) est un acteur majeur de la production, du transport et de la fourniture d’électricité. La centrale nucléaire du Bugey est une centrale de 4 réacteurs à eau pressurisé de 900 MWe, produisant 18,5 TWh par an, couvrant 40% des besoins de la région Auvergne-Rhône-Alpes.",
    tasks: [
      '4G privée : Point d\'accès et terminaux',
      'Caméras de surveillances',
      'Systèmes Radios',
      'Système de Sonorisation de site',
      'Toutes les baies et leurs systèmes reliés',
      'Téléphonie fixe, mobile et satellite'
    ],
    acquiredSkills: [
      'Appréhender le monde du travail : découverte des concrétisations de mes études.',
      'Configuration de routeurs, de Switch, Caméras, Radios, etc...',
      'Gestion d\'incidents et de projets locaux.',
      'Connaissances générales dans les systèmes de télécommunications.',
      'Jarretièrage de fibre et téléphonique.'
    ],
    featuredProject: {
      title: "Supervision sur-mesure d'Inverseurs de Sources (EDF CNPE)",
      description: "Conception et déploiement d'une solution de supervision dédiée aux inverseurs de sources Schneider Electric (gamme TransferPacT) pour assurer la continuité de service des alimentations critiques.",
      details: [
        "Maîtrise du protocole Modbus RTU et RS485 : Mise en place d'une architecture série avec adressage unique et gestion des contraintes physiques (câblage, polarités) sur de longues distances.",
        "Analyse de données industrielles : Extraction des informations vitales depuis les tables de registres Schneider via convertisseurs RS485/USB.",
        "Développement Python 'In-House' : Création d'une alternative robuste sans licence avec interface graphique (GUI) temps réel.",
        "Monitoring actif : Visualisation du mode de fonctionnement (Auto/Manuel) et diagnostic précis de l'état des sources.",
        "Gestion des alertes : Implémentation d'un système de monitoring avec horodatage précis pour l'analyse post-incident."
      ],
      technologies: ["Python", "Modbus RTU", "RS485", "Schneider Electric", "TransferPacT", "Automation"]
    },
    websiteUrl: 'https://www.edf.fr/centrale-nucleaire-du-bugey'
  }
];

export const DETAILED_SKILLS: Skill[] = [
  {
    name: 'Administration Windows/Linux',
    category: 'Systèmes',
    description: 'Gestion complète de serveurs sous Windows Server (AD, DNS, DHCP) et diverses distributions Linux (Debian, Ubuntu, CentOS). Installation, durcissement et maintenance préventive.',
    iconName: 'Terminal'
  },
  {
    name: 'Virtualisation & Cloud',
    category: 'Systèmes',
    description: 'Maîtrise des environnements VMware vSphere et Proxmox VE. Déploiement de machines virtuelles, gestion du stockage partagé et des réseaux virtuels isolés.',
    iconName: 'Globe'
  },
  {
    name: 'Active Directory & GPO',
    category: 'Systèmes',
    description: 'Gestion centralisée des identités et des accès. Mise en place de stratégies de groupe (GPO) complexes pour le contrôle de conformité et la sécurité du parc.',
    iconName: 'Building2'
  },
  {
    name: 'Cybersécurité & Audit',
    category: 'Cybersécurité',
    description: 'Analyse de vulnérabilités, durcissement de systèmes (Hardening) et mise en place de solutions de protection type XDR/EDR. Veille constante sur les menaces.',
    iconName: 'Shield'
  },
  {
    name: 'Supervision & Monitoring',
    category: 'Réseaux',
    description: 'Mise en place d\'outils de monitoring (Zabbix, Nagios, SNMP, Grafana) pour assurer la haute disponibilité et la performance des équipements critiques.',
    iconName: 'Zap'
  },
  {
    name: 'Commutation & Routage',
    category: 'Réseaux',
    description: 'Configuration avancée d\'équipements Cisco (IOS), HP et Alcatel. Maîtrise des protocoles OSPF, BGP et des VLANs pour une segmentation réseau optimale.',
    iconName: 'Network'
  },
  {
    name: 'Téléphonie & VoIP',
    category: 'Télécoms',
    description: 'Installation et configuration d\'IPBX (Asterisk). Gestion des flux voix sur IP (SIP), des plans de numérotation et maintenance de systèmes de téléphonie critique.',
    iconName: 'Phone'
  },
  {
    name: 'Scripting & Automatisation',
    category: 'Programmation',
    description: 'Développement de scripts d\'automatisation en Python et Bash pour la gestion de parc, le déploiement réseau (Ansible) et le traitement de logs.',
    iconName: 'Code2'
  },
  {
    name: 'Réseaux Sans-Fil & 4G/5G',
    category: 'Télécoms',
    description: 'Étude de couverture Wi-Fi et maintenance d\'infrastructures 4G privées. Configuration de points d\'accès et terminaux mobiles durcis.',
    iconName: 'Network'
  },
  {
    name: 'Bases de Données',
    category: 'Programmation',
    description: 'Conception et administration de bases de données relationnelles (MySQL, PostgreSQL). Optimisation de requêtes et gestion des sauvegardes.',
    iconName: 'Terminal'
  },
  {
    name: 'Audit de Sécurité Réseau',
    category: 'Cybersécurité',
    description: 'Tests d\'intrusion (Pentest) sur les couches réseau, analyse de trafic Wireshark et mise en place de pare-feu (pfSense, Fortinet).',
    iconName: 'Shield'
  },
  {
    name: 'Gestion de Projet IT',
    category: 'Méthodologie',
    description: 'Utilisation de méthodes agiles pour le suivi de projets techniques. Documentation rigoureuse et communication avec les parties prenantes.',
    iconName: 'Briefcase'
  }
];

export const SKILLS = {
  technical: DETAILED_SKILLS.map(s => s.name),
  soft: [
    'Rigoureux',
    'Autonomie',
    'Capacité d\'adaptation',
    'Esprit d\'analyse',
    'Respect des consignes de sécurité (CNPE)'
  ],
  languages: [
    { name: 'Anglais', level: 'B2', flag: '🇬🇧' },
    { name: 'Espagnol', level: 'A2', flag: '🇪🇸' }
  ],
  hobbies: [
    'Sports de montagne',
    'Nouvelles technologies',
    'Veille cybersécurité'
  ]
};
