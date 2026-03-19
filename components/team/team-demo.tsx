'use client';

import { useRef, useEffect, useState } from 'react';

const agents = [
  { name: 'Researcher', icon: '🔍', status: 'running' },
  { name: 'Content Writer', icon: '✍️', status: 'idle' },
  { name: 'Code Reviewer', icon: '💻', status: 'idle' },
  { name: 'Deploy Bot', icon: '🚀', status: 'idle' },
];

const sidebarItems = [
  { name: '技能', icon: '⚙️', active: false },
  { name: '自动化', icon: '🔄', active: false },
  { name: '新建 Agent', icon: '➕', active: true },
];

export function TeamDemo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`mx-auto w-full max-w-5xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Demo Container */}
          <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden shadow-2xl">
            {/* Fake browser header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-muted-foreground">yongxian.xyz/team</span>
              </div>
            </div>

            {/* Main content area */}
            <div className="flex min-h-[500px]">
              {/* Left Sidebar */}
              <div className="w-64 border-r border-border/50 bg-muted/10 p-4 hidden md:block">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">涌</span>
                  </div>
                  <span className="font-semibold text-sm">涌现 AI</span>
                </div>

                {/* Menu items */}
                <div className="space-y-1 mb-6">
                  {sidebarItems.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                        item.active
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>

                {/* Agents list */}
                <div className="mb-4">
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 px-3">
                    Agents
                  </div>
                  <div className="space-y-1">
                    {agents.map((agent, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                          index === 0
                            ? 'bg-muted/50 text-foreground'
                            : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                        }`}
                      >
                        <span>{agent.icon}</span>
                        <span className="flex-1">{agent.name}</span>
                        {agent.status === 'running' && (
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 px-3">
                    技能
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground">
                      <span>🕷️</span>
                      <span>Web Scraper</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground">
                      <span>📊</span>
                      <span>Data Analyst</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground">
                      <span>🐙</span>
                      <span>GitHub</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main workspace */}
              <div className="flex-1 p-6 bg-background">
                {/* Active agent header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-xl">🔍</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Researcher</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span>Agent active · processing task</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/80 text-sm">
                    Stop
                  </button>
                </div>

                {/* Task description */}
                <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="text-xs text-muted-foreground mb-2">Current Task</div>
                  <div className="text-sm">scrape-leads · 32 results</div>
                </div>

                {/* Workspace memory */}
                <div className="mb-6">
                  <div className="text-xs text-muted-foreground mb-3">Workspace memory</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <span className="text-muted-foreground">📄</span>
                      <span className="text-sm">context.json</span>
                      <span className="text-xs text-muted-foreground ml-auto">4.1 KB</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <span className="text-muted-foreground">📁</span>
                      <span className="text-sm">output_files</span>
                      <span className="text-xs text-muted-foreground ml-auto">
                        leads.csv, report.md
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="grid grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-muted/30 text-center">
                    <div className="text-2xl mb-1">📁</div>
                    <div className="text-xs text-muted-foreground">Drive</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/30 text-center">
                    <div className="text-2xl mb-1">🌐</div>
                    <div className="text-xs text-muted-foreground">Browser</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/30 text-center">
                    <div className="text-2xl mb-1">💻</div>
                    <div className="text-xs text-muted-foreground">Terminal</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/30 text-center">
                    <div className="text-2xl mb-1">🐙</div>
                    <div className="text-xs text-muted-foreground">Git</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements for visual effect */}
          <div
            className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-16 rounded-full blur-3xl opacity-25"
            style={{ background: 'oklch(0.52 0.09 78)' }}
          />
        </div>
      </div>
    </section>
  );
}
