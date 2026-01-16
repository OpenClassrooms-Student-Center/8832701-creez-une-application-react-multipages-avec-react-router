// Données mockées des employés de l'entreprise
export const employeesData = [
    {
        id: 1,
        name: "Pierre Martin",
        position: "Développeur Full-Stack",
        department: "Technique",
        email: "pierre.martin@entreprise.com",
        phone: "01 23 45 67 89",
        avatar: "https://i.pravatar.cc/150?img=1",
        bio: "Développeur passionné avec 5 ans d'expérience en React et Node.js. Spécialisé dans les applications web modernes.",
        skills: ["React", "Node.js", "TypeScript", "PostgreSQL"]
    },
  {
    id: 2,
    name: "Thomas Dubois",
    position: "Chef de Projet",
    department: "Management",
    email: "thomas.dubois@entreprise.com",
    phone: "01 23 45 67 90",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Chef de projet expérimenté, coordonne les équipes de développement et assure la livraison des projets dans les délais.",
    skills: ["Gestion de projet", "Agile", "Scrum", "Communication"]
  },
  {
    id: 3,
    name: "Marie Lefebvre",
    position: "Designer UI/UX",
    department: "Design",
    email: "marie.lefebvre@entreprise.com",
    phone: "01 23 45 67 91",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Designer créative spécialisée dans l'expérience utilisateur et les interfaces modernes.",
    skills: ["Figma", "Adobe XD", "UI Design", "Prototypage"]
  },
  {
    id: 4,
    name: "Lucas Bernard",
    position: "Développeur Backend",
    department: "Technique",
    email: "lucas.bernard@entreprise.com",
    phone: "01 23 45 67 92",
    avatar: "https://i.pravatar.cc/150?img=13",
    bio: "Expert en architecture backend et bases de données. Passionné par les solutions scalables.",
    skills: ["Python", "Django", "Docker", "AWS"]
  },
  {
    id: 5,
    name: "Emma Petit",
    position: "Développeuse Frontend",
    department: "Technique",
    email: "emma.petit@entreprise.com",
    phone: "01 23 45 67 93",
    avatar: "https://i.pravatar.cc/150?img=9",
    bio: "Spécialiste React et animations web. Créé des interfaces utilisateur fluides et engageantes.",
    skills: ["React", "CSS", "JavaScript", "Animations"]
  },
  {
    id: 6,
    name: "Antoine Rousseau",
    position: "DevOps Engineer",
    department: "Infrastructure",
    email: "antoine.rousseau@entreprise.com",
    phone: "01 23 45 67 94",
    avatar: "https://i.pravatar.cc/150?img=14",
    bio: "Expert en automatisation et déploiement continu. Maintient l'infrastructure cloud de l'entreprise.",
    skills: ["Kubernetes", "CI/CD", "Terraform", "Monitoring"]
  },
  {
    id: 7,
    name: "Chloé Moreau",
    position: "Product Owner",
    department: "Produit",
    email: "chloe.moreau@entreprise.com",
    phone: "01 23 45 67 95",
    avatar: "https://i.pravatar.cc/150?img=10",
    bio: "Définit la vision produit et priorise les fonctionnalités en fonction des besoins utilisateurs.",
    skills: ["Product Management", "Analyse", "Roadmap", "User Stories"]
  },
  {
    id: 8,
    name: "Hugo Garnier",
    position: "Développeur Mobile",
    department: "Technique",
    email: "hugo.garnier@entreprise.com",
    phone: "01 23 45 67 96",
    avatar: "https://i.pravatar.cc/150?img=15",
    bio: "Développeur d'applications mobiles natives et cross-platform. Expert React Native.",
    skills: ["React Native", "iOS", "Android", "Mobile Design"]
  },
  {
    id: 9,
    name: "Léa Dupont",
    position: "Data Analyst",
    department: "Data",
    email: "lea.dupont@entreprise.com",
    phone: "01 23 45 67 97",
    avatar: "https://i.pravatar.cc/150?img=20",
    bio: "Analyse les données pour aider à la prise de décision stratégique de l'entreprise.",
    skills: ["Python", "SQL", "Power BI", "Statistiques"]
  },
  {
    id: 10,
    name: "Nathan Lambert",
    position: "Architecte Logiciel",
    department: "Technique",
    email: "nathan.lambert@entreprise.com",
    phone: "01 23 45 67 98",
    avatar: "https://i.pravatar.cc/150?img=11",
    bio: "Conçoit l'architecture technique des applications et guide les choix technologiques.",
    skills: ["Architecture", "Microservices", "Cloud", "System Design"]
  }
]

// Fonction utilitaire pour récupérer un employé par son ID
export const getEmployeeById = (id) => {
  return employeesData.find(employee => employee.id === parseInt(id))
}
