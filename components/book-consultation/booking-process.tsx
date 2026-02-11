'use client';

import { useRef, useEffect, useState } from 'react';

const steps = [
  {
    number: '01',
    title: '扫码添加微信',
    description: '扫描下方二维码，添加顾问微信好友，简单说明您的咨询需求。',
    icon: '📱',
  },
  {
    number: '02',
    title: '确认预约时间',
    description: '与顾问沟通确认合适的咨询时间，我们会提前发送会议邀请。',
    icon: '📅',
  },
  {
    number: '03',
    title: '开始深度咨询',
    description: '按约定时间进行 30 分钟一对一视频咨询，获得专属解决方案。',
    icon: '💬',
  },
];

export function BookingProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-background overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="text-2xl">🔄</span>
            <span className="text-primary text-sm font-medium">预约流程</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            简单三步，开启咨询
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            整个预约流程只需 3 步，简单快捷
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-16 right-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 mb-12 md:mb-16 last:mb-0 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    {/* Number circle */}
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-lg shadow-primary/30">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block mb-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[calc(50%+2.5rem+1rem)] top-24 -translate-y-1/2">
                    <svg
                      className="w-6 h-6 text-primary/30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
