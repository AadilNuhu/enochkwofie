import type { Project, Skill, Certification, Achievement, Testimonial, BlogPost, GitHubRepo } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Enoch Kwofie",
  role: "Networking & Cybersecurity Specialist",
  tagline: "Building secure networks, protecting digital infrastructure, and solving real-world networking challenges.",
  bio: "Passionate computer networking & cybersecurity student dedicated to architecting resilient network infrastructures, mastering protocols, and enforcing zero-trust security postures. Adept in Cisco IOS, packet analysis, cloud security, and network automation with Python and Bash.",
  email: "enoch.kwofie@gmail.com",
  location: "Ghana",
  github: "https://github.com/enochkwofie",
  linkedin: "https://linkedin.com/in/enochkwofie",
  twitter: "https://x.com/enochkwofie",
  resumeUrl: "#resume-preview",
  stats: {
    yearsLearning: 3,
    projectsCompleted: 18,
    certificatesEarned: 6,
    labsCompleted: 140
  }
};

export const SKILLS_DATA: Skill[] = [
  // Networking
  { name: "TCP/IP & OSI Model", level: 95, category: "Networking", description: "In-depth packet parsing, transport layer flow control, and layer 2/3 diagnostics." },
  { name: "Subnetting & VLSM", level: 98, category: "Networking", description: "Efficient IPv4/IPv6 address planning, CIDR notation, and supernetting." },
  { name: "Routing Protocols (OSPF, BGP, EIGRP)", level: 90, category: "Networking", description: "Multi-area OSPF deployment, path election, BGP peering, and dynamic routing." },
  { name: "Switching (VLANs, STP, EtherChannel)", level: 92, category: "Networking", description: "VLAN trunking 802.1Q, Rapid Spanning Tree Protocol (RSTP), LACP link aggregation." },
  { name: "DHCP & DNS Management", level: 88, category: "Networking", description: "DHCP snooping, relay agents, authoritative DNS setup, and record management." },
  { name: "NAT / PAT & ACLs", level: 90, category: "Networking", description: "Static/Dynamic NAT, Port Address Translation, Standard & Extended Access Control Lists." },

  // Cisco
  { name: "Cisco Packet Tracer", level: 96, category: "Cisco", description: "Complex multi-router network design, topologies simulation, and scenario testing." },
  { name: "Cisco IOS CLI", level: 92, category: "Cisco", description: "Router & switch initial configuration, security hardening, and image management." },
  { name: "CCNA Core Competencies", level: 94, category: "Cisco", description: "Network fundamentals, IP connectivity, IP services, and security fundamentals." },

  // Security
  { name: "Firewall Policy & NAT", level: 85, category: "Security", description: "Stateful inspection rules, zone-based firewalling, and packet filtering." },
  { name: "VPN (IPsec & SSL)", level: 88, category: "Security", description: "Site-to-site IPsec tunnels, IKEv2, AES encryption, and remote access SSL VPNs." },
  { name: "Access Control Systems", level: 90, category: "Security", description: "AAA architecture, RADIUS/TACACS+ integration, and 802.1X network authentication." },
  { name: "IDS / IPS Monitoring", level: 82, category: "Security", description: "Snort rules creation, intrusion detection, signature tuning, and anomaly analysis." },
  { name: "Wireshark Packet Analysis", level: 94, category: "Security", description: "Deep packet inspection, protocol dissecting, malware traffic analysis, and TCP dump filters." },

  // Operating Systems
  { name: "Linux Administration (Ubuntu, Kali)", level: 90, category: "Operating Systems", description: "Bash scripting, systemd, SSH hardening, iptables, permissions, and network services." },
  { name: "Windows Server & Active Directory", level: 84, category: "Operating Systems", description: "Domain controller configuration, Group Policy Objects (GPO), DNS/DHCP roles." },

  // Cloud
  { name: "AWS Cloud Fundamentals", level: 82, category: "Cloud", description: "VPC creation, Subnets, Internet Gateways, Security Groups, Route Tables, and EC2." },
  { name: "Azure Networking & Security", level: 78, category: "Cloud", description: "Azure Virtual Networks (VNet), VNet Peering, NSGs, and VPN Gateways." },

  // Programming
  { name: "Python Network Scripting", level: 88, category: "Programming", description: "Automating SSH sessions via Netmiko, Paramiko, Scapy packet manipulation, and Socket APIs." },
  { name: "Bash Automation", level: 85, category: "Programming", description: "Shell scripting for server backups, log auditing, network monitoring, and system maintenance." },
  { name: "HTML5 / CSS3 / JavaScript", level: 90, category: "Programming", description: "Modern web standards, responsive design, interactive dashboards." },
  { name: "React & Modern Web UI", level: 86, category: "Programming", description: "Component architecture, single-page application development, state management." },

  // Tools
  { name: "Nmap & Network Scanners", level: 92, category: "Tools", description: "Port scanning, service version detection, NSE scripts, and vulnerability assessment." },
  { name: "VirtualBox & VMware Workstation", level: 90, category: "Tools", description: "Hypervisor setup, virtual network adapters (Bridged/NAT/Host-Only), lab isolation." },
  { name: "Git & GitHub Version Control", level: 88, category: "Tools", description: "Branching strategies, CI/CD pipelines, code documentation, and repository management." }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "enterprise-network-design",
    title: "Enterprise Multi-Branch Network Infrastructure",
    category: "Networking",
    description: "Architected a redundant multi-campus LAN/WAN topology featuring multi-area OSPF dynamic routing, HSRP gateway redundancy, 802.1Q VLAN trunking, and extended ACL protection.",
    fullDetails: "Designed using Cisco Packet Tracer and GNS3. Implemented full redundancy at Layer 2 (RSTP & EtherChannel) and Layer 3 (HSRP). Configured NAT/PAT on edge routers connecting to Simulated ISP.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    tags: ["Cisco IOS", "OSPF", "HSRP", "VLANs", "ACLs", "Packet Tracer"],
    githubUrl: "https://github.com/enochkwofie/enterprise-network-design",
    demoUrl: "https://github.com/enochkwofie/enterprise-network-design",
    featured: true
  },
  {
    id: "network-monitoring-dashboard",
    title: "Real-time Network Traffic & Security Monitor",
    category: "Security",
    description: "Developed a modern web-based monitoring dashboard using React, Tailwind CSS, and Python socket backend to visualize live packet flows, bandwidth utilization, and threat alerts.",
    fullDetails: "Utilizes Python Scapy for backend packet sniffing and WebSocket server for live telemetry streaming into a dark-themed glassmorphism interface.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Python", "Scapy", "WebSockets", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/enochkwofie/network-monitoring-dashboard",
    demoUrl: "https://github.com/enochkwofie/network-monitoring-dashboard",
    featured: true
  },
  {
    id: "site-to-site-ipsec-vpn",
    title: "Secure Site-to-Site IPsec VPN Tunnels",
    category: "Security",
    description: "Configured hardware and software IPsec VPN tunnels with IKEv2 authentication and AES-256 encryption connecting main HQ to isolated branch subnets across untrusted WANs.",
    fullDetails: "Configured crypto maps, ISAKMP policies, and transform sets on Cisco routers with Zone-Based Policy Firewall (ZBF) enforcement.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    tags: ["IPsec", "IKEv2", "AES-256", "Cisco IOS", "ZBF Firewall"],
    githubUrl: "https://github.com/enochkwofie/site-to-site-ipsec-vpn",
    featured: true
  },
  {
    id: "python-port-scanner-auditor",
    title: "Asynchronous Python Network Auditor & Port Scanner",
    category: "Automation",
    description: "Created a high-speed multi-threaded network scanner with service banner grabbing, OS fingerprinting, and automated vulnerability check reporting.",
    fullDetails: "Written in Python using asyncio and socket library. Generates comprehensive JSON/HTML security audit reports with severity ratings.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "AsyncIO", "Sockets", "Nmap Engine", "Security Audit"],
    githubUrl: "https://github.com/enochkwofie/python-port-scanner",
    featured: false
  },
  {
    id: "aws-cloud-vpc-architecture",
    title: "AWS Multi-AZ Secure Cloud VPC Infrastructure",
    category: "Cloud",
    description: "Provisioned an AWS Virtual Private Cloud with public & private subnets across multiple Availability Zones, NAT Gateways, Bastion Hosts, and strict Network ACLs.",
    fullDetails: "Infrastructure deployed via Terraform templates, incorporating AWS Application Load Balancer and Auto Scaling Groups in private subnets.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    tags: ["AWS VPC", "Terraform", "Cloud Security", "NACLs", "EC2", "Subnetting"],
    githubUrl: "https://github.com/enochkwofie/aws-cloud-vpc",
    featured: true
  },
  {
    id: "linux-hardened-server-lab",
    title: "Linux Server Hardening & Infrastructure Services",
    category: "Security",
    description: "Deployed an enterprise Ubuntu Server suite with SSH key authentication, fail2ban brute-force protection, UFW firewall, Bind9 DNS, and ISC DHCP server.",
    fullDetails: "Includes automated Bash hardening scripts that enforce CIS Benchmarks recommendations and configure auditd system logging.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop",
    tags: ["Linux", "Ubuntu Server", "Bash", "UFW", "Fail2ban", "Bind9 DNS"],
    githubUrl: "https://github.com/enochkwofie/linux-hardened-server",
    featured: false
  },
  {
    id: "smart-office-iot-packet-tracer",
    title: "IoT Smart Office Network & Access Control",
    category: "Networking",
    description: "Simulated an automated smart office environment in Packet Tracer featuring IoT registration server, VLAN segmentation for smart devices, and wireless WPA3 Enterprise.",
    fullDetails: "Integrated RADIUS authentication for corporate Wi-Fi access alongside Python micro-scripts running on MCU controllers for sensor automation.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    tags: ["Packet Tracer", "IoT", "RADIUS", "WPA3", "VLANs", "Automation"],
    githubUrl: "https://github.com/enochkwofie/smart-office-iot-network",
    featured: false
  },
  {
    id: "wireshark-malware-traffic-analysis",
    title: "Wireshark Network Incident Response & Forensic Lab",
    category: "Security",
    description: "Analyzed PCAP packet captures from simulated malware infections to trace C2 server communications, extracted stolen data payloads, and created Snort signatures.",
    fullDetails: "Detailed lab report breaking down DNS tunneling attempts, HTTP POST exfiltration, and SSL/TLS handshake anomalies.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    tags: ["Wireshark", "PCAP Analysis", "Snort IDS", "Forensics", "Network Security"],
    githubUrl: "https://github.com/enochkwofie/wireshark-malware-analysis",
    featured: false
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "ccna",
    name: "Cisco Certified Network Associate (CCNA 200-301)",
    issuer: "Cisco Systems",
    status: "In Progress",
    date: "Target: Q4 2026",
    badge: "https://images.credly.com/size/340x340/images/be8fcaeb-b9a8-4a99-b009-83569116e002/CCNA_badge.png",
    verificationUrl: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
    skillsCovered: ["Routing & Switching", "IP Services", "Security Fundamentals", "Automation & Programmability", "WLAN"]
  },
  {
    id: "google-cybersecurity",
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    status: "Completed",
    date: "May 2026",
    badge: "https://images.credly.com/size/340x340/images/a4146039-38b4-4b53-b3c1-229210c4d7ec/GCC_badge_cybersecurity.png",
    verificationUrl: "https://coursera.org/verify/professional-cert/google-cybersecurity",
    skillsCovered: ["Linux CLI", "Python for Security", "SIEM Tools", "IDS/IPS", "Incident Response", "SQL"]
  },
  {
    id: "net-plus",
    name: "CompTIA Network+ (N10-008)",
    issuer: "CompTIA",
    status: "Learning",
    date: "Target: Q3 2026",
    badge: "https://images.credly.com/size/340x340/images/74790a73-1250-48e0-bb15-08630730d1f7/CompTIA_Network_2B.png",
    skillsCovered: ["Network Operations", "Troubleshooting", "Physical Infrastructure", "Cloud & Virtualization"]
  },
  {
    id: "cisco-netacad",
    name: "Cisco Networking Academy - Enterprise Networking & Security",
    issuer: "Cisco Networking Academy",
    status: "Completed",
    date: "Jan 2026",
    badge: "https://images.credly.com/size/340x340/images/229a43a0-53eb-460d-83b3-85f838612745/cisco-academy-badge.png",
    skillsCovered: ["OSPFv2/v3", "ACLs", "NAT", "WAN Concepts", "Network Security"]
  },
  {
    id: "aws-cloud-prac",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Completed",
    date: "Nov 2025",
    badge: "https://images.credly.com/size/340x340/images/0e8ed326-9f1e-4c70-a615-165b2e61bf11/image.png",
    skillsCovered: ["AWS Core Services", "VPC Networking", "IAM Security", "Cloud Billing", "Compliance"]
  },
  {
    id: "azure-fundamentals",
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    status: "Completed",
    date: "Aug 2025",
    badge: "https://images.credly.com/size/340x340/images/be8fcaeb-b9a8-4a99-b009-83569116e002/azure-fundamentals.png",
    skillsCovered: ["Azure Architectural Components", "Virtual Networks", "Identity & Governance"]
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "packet-tracer-champion",
    title: "1st Place - National Cisco Packet Tracer Topo-Hack",
    category: "Networking Competitions",
    date: "October 2025",
    description: "Designed and configured a fully operational multi-site enterprise network under a strict 4-hour timed window with zero configuration errors.",
    badgeText: "Gold Medal"
  },
  {
    id: "cyber-hackathon-finalist",
    title: "Finalist - Inter-University CTF Security Hackathon",
    category: "Hackathons",
    date: "July 2025",
    description: "Solved forensic challenges involving PCAP analysis, RSA cryptography decryption, and Linux privilege escalation.",
    badgeText: "Top 5 Team"
  },
  {
    id: "cisco-workshop-lead",
    title: "Lead Instructor - IPv6 Transition Workshop",
    category: "Technical Workshops",
    date: "March 2025",
    description: "Organized and delivered a 2-day technical workshop for 60+ peers on dual-stack IPv4/IPv6 transition strategies and SLAAC configuration.",
    badgeText: "Speaker"
  },
  {
    id: "100-days-of-networking",
    title: "Completed 100 Days of Networking & Security Challenge",
    category: "Cisco Labs",
    date: "December 2024",
    description: "Configured 100 distinct lab topologies over 100 consecutive days, covering CCNA and CCNP level routing & switching protocols.",
    badgeText: "Consistent Performer"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "prof-williams",
    quote: "Enoch possesses an exceptional understanding of TCP/IP protocol internals and network architecture far beyond standard undergraduate level. His practical lab work is flawless.",
    name: "Dr. Robert Chen",
    role: "Professor of Computer Networks",
    organization: "School of Computing",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "lab-manager",
    quote: "Working with Enoch in the university network lab has been fantastic. He quickly resolves complex routing loops and keeps our infrastructure running seamlessly.",
    name: "Sarah Jenkins",
    role: "Senior Systems & Network Admin",
    organization: "University IT Services",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "understanding-ospf-lsa-types",
    title: "Demystifying OSPF LSA Types 1 through 5 with Wireshark PCAPs",
    excerpt: "A practical breakdown of Link State Advertisements in multi-area OSPF networks and how to inspect them using Wireshark display filters.",
    date: "June 14, 2026",
    readTime: "7 min read",
    category: "Networking",
    url: "https://github.com/enochkwofie"
  },
  {
    id: "subnetting-cheatsheet-guide",
    title: "Mastering CIDR & VLSM Subnetting in under 5 minutes",
    excerpt: "Stop memorizing subnet tables. Learn the fast binary math trick to calculate host ranges, network IDs, and broadcast addresses instantly.",
    date: "April 22, 2026",
    readTime: "5 min read",
    category: "Subnetting",
    url: "https://github.com/enochkwofie"
  },
  {
    id: "python-netmiko-cisco-automation",
    title: "Automating Cisco Router Backups with Python Netmiko & Cron",
    excerpt: "Step-by-step tutorial on writing Python scripts to SSH into multiple switches concurrently and back up running configurations automatically.",
    date: "February 10, 2026",
    readTime: "9 min read",
    category: "Automation",
    url: "https://github.com/enochkwofie"
  }
];

export const GITHUB_REPOS_DATA: GitHubRepo[] = [
  {
    id: 101,
    name: "enterprise-network-design",
    description: "Redundant multi-campus LAN/WAN topology with OSPF, HSRP, and VLAN trunking.",
    stars: 42,
    forks: 14,
    language: "Cisco Packet Tracer / GNS3",
    url: "https://github.com/enochkwofie/enterprise-network-design",
    updatedAt: "2 days ago"
  },
  {
    id: 102,
    name: "python-network-auditor",
    description: "Async Python network scanner, port service detector, and banner grabber.",
    stars: 89,
    forks: 23,
    language: "Python",
    url: "https://github.com/enochkwofie/python-port-scanner",
    updatedAt: "1 week ago"
  },
  {
    id: 103,
    name: "wireshark-pcap-analysis-labs",
    description: "Collection of network security PCAP analysis notes, Snort rules, and lab walk-throughs.",
    stars: 35,
    forks: 8,
    language: "Markdown / Scapy",
    url: "https://github.com/enochkwofie/wireshark-malware-analysis",
    updatedAt: "2 weeks ago"
  },
  {
    id: 104,
    name: "cisco-ios-automation-scripts",
    description: "Bash & Netmiko automation scripts for bulk Cisco switch deployment and security audit.",
    stars: 67,
    forks: 19,
    language: "Python / Shell",
    url: "https://github.com/enochkwofie",
    updatedAt: "3 weeks ago"
  }
];
