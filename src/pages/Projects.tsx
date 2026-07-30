import React, { useState } from 'react';
import { 
  FolderGit2, 
  Search, 
  X, 
  Star, 
  GitFork, 
  Terminal 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS_DATA, GITHUB_REPOS_DATA } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import type { Project } from '../types/portfolio';

export const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Networking', 'Security', 'Automation', 'Cloud'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <FolderGit2 className="w-4 h-4" /> Lab & Production Projects
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
            Featured Projects & Simulations
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Real-world enterprise network architecture, packet analysis security labs, Python automation tools, and cloud VPC deployments.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects by title or tag (e.g. OSPF, Python)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
            <Terminal className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-300">No projects found</h3>
            <p className="text-slate-500 text-sm mt-1">Try adjusting your search filter criteria.</p>
          </div>
        )}

        {/* GitHub Contribution & Repos Placeholder Section */}
        <div className="mt-24 pt-16 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">Version Control</h2>
            <h3 className="text-2xl font-bold text-slate-100">Latest GitHub Repositories</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GITHUB_REPOS_DATA.map((repo) => (
              <a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-slate-300 mb-2">
                    <span className="font-bold text-sm text-cyan-300 font-mono group-hover:underline">
                      {repo.name}
                    </span>
                    <FaGithub className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-cyan-400">{repo.language}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400" /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><GitFork className="w-3 h-3 text-purple-400" /> {repo.forks}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Project Details Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  {activeModalProject.category}
                </span>
                <h2 className="text-2xl font-bold text-slate-100">{activeModalProject.title}</h2>
              </div>

              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-64 object-cover rounded-xl border border-slate-800"
              />

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p className="font-semibold text-slate-200">{activeModalProject.description}</p>
                {activeModalProject.fullDetails && (
                  <p className="text-slate-400">{activeModalProject.fullDetails}</p>
                )}

                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-cyan-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-4">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700"
                >
                  <FaGithub className="w-4 h-4" /> View GitHub Repository
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
