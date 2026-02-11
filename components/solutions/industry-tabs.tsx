'use client';

import { useState, useRef, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  ShoppingCart,
  Factory,
  Building,
  Briefcase,
  Users,
  Truck,
  CheckCircle2,
} from 'lucide-react';

const industries = [
  { id: 'ecommerce', label: '电子商务', icon: ShoppingCart },
  { id: 'manufacturing', label: '制造业', icon: Factory },
  { id: 'finance', label: '金融服务', icon: Building },
  { id: 'professional', label: '专业服务', icon: Briefcase },
  { id: 'hr', label: '人力资源', icon: Users },
  { id: 'logistics', label: '物流运输', icon: Truck },
];

export function IndustryTabs() {
  const [activeTab, setActiveTab] = useState('ecommerce');
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

  const industryContent = {
    ecommerce: {
      title: '电子商务AI工作台解决方案',
      description:
        '电商企业面临客户服务、库存管理和订单处理等多方面挑战。我们的AI工作台可以全天候处理客户咨询，自动化订单跟踪，优化库存管理，并提供个性化产品推荐，帮助您提升客户满意度和销售转化率。',
      keyPoints: [
        { text: '24/7全天候客户服务，平均响应时间低于30秒', metric: '30秒' },
        { text: '自动化订单处理和跟踪，减少90%的人工干预', metric: '90%' },
        { text: '智能库存预测和管理，降低30%的库存成本', metric: '30%' },
        { text: '个性化产品推荐，提升25%的交叉销售机会', metric: '25%' },
        { text: '多渠道客户支持整合（网站、社交媒体、即时通讯）', metric: '全渠道' },
      ],
    },
    manufacturing: {
      title: '制造业AI工作台解决方案',
      description:
        '制造企业需要优化生产计划、提高设备利用率并确保质量控制。我们的AI工作台可以监控生产线状态，预测设备维护需求，优化生产排程，并协助质量检测流程，帮助您提高生产效率和产品质量。',
      keyPoints: [
        { text: '实时生产监控和异常预警，减少40%的停机时间', metric: '40%' },
        { text: '预测性维护规划，延长设备寿命并降低20%的维护成本', metric: '20%' },
        { text: '智能生产排程，提高15%的设备利用率', metric: '15%' },
        { text: '自动化质量检测报告，减少80%的人工记录时间', metric: '80%' },
        { text: '供应链优化建议，降低25%的原材料库存成本', metric: '25%' },
      ],
    },
    finance: {
      title: '金融服务AI工作台解决方案',
      description:
        '金融机构需要处理大量交易、风险评估和客户服务请求。我们的AI工作台可以自动化交易监控，执行风险评估，处理客户查询，并生成合规报告，帮助您提高运营效率和客户满意度。',
      keyPoints: [
        { text: '自动化交易监控和欺诈检测，准确率高达95%', metric: '95%' },
        { text: '客户查询自动处理，解决70%的常见问题', metric: '70%' },
        { text: '智能风险评估和信用分析，加快50%的审批流程', metric: '50%' },
        { text: '自动化合规报告生成，节省80%的报告准备时间', metric: '80%' },
        { text: '个性化财务建议和产品推荐，提升30%的客户参与度', metric: '30%' },
      ],
    },
    professional: {
      title: '专业服务AI工作台解决方案',
      description:
        '律师事务所、会计师事务所等专业服务机构需要处理大量文档和客户沟通。我们的AI工作台可以自动化文档审核，安排会议，回答常见问题，并协助研究工作，帮助您提高服务效率和质量。',
      keyPoints: [
        { text: '智能文档审核和分类，节省60%的文档处理时间', metric: '60%' },
        { text: '自动化会议安排和提醒，减少95%的日程冲突', metric: '95%' },
        { text: '专业知识库建设和查询，加快40%的研究速度', metric: '40%' },
        { text: '客户沟通自动化，提高50%的响应速度', metric: '50%' },
        { text: '智能报告生成，减少70%的报告准备时间', metric: '70%' },
      ],
    },
    hr: {
      title: '人力资源AI工作台解决方案',
      description:
        'HR部门需要处理招聘、入职、培训和员工服务等多项任务。我们的AI工作台可以自动化简历筛选，协助入职流程，回答员工问题，并生成HR报告，帮助您提高HR效率和员工满意度。',
      keyPoints: [
        { text: '智能简历筛选和候选人匹配，节省70%的初筛时间', metric: '70%' },
        { text: '自动化入职流程管理，减少80%的文书工作', metric: '80%' },
        { text: '员工自助服务平台，解决90%的常见HR问题', metric: '90%' },
        { text: '培训进度跟踪和提醒，提高30%的培训完成率', metric: '30%' },
        { text: '自动化HR报告和分析，提供数据驱动的人才决策支持', metric: '数据驱动' },
      ],
    },
    logistics: {
      title: '物流运输AI工作台解决方案',
      description:
        '物流企业需要优化路线规划、跟踪货物和管理仓库。我们的AI工作台可以自动化路线优化，提供实时货物跟踪，优化仓库管理，并处理客户查询，帮助您提高物流效率和客户满意度。',
      keyPoints: [
        { text: '智能路线规划和优化，减少20%的运输成本', metric: '20%' },
        { text: '实时货物跟踪和状态更新，提高95%的可视性', metric: '95%' },
        { text: '自动化仓库管理和库存优化，提高30%的空间利用率', metric: '30%' },
        { text: '预测性需求分析，减少25%的库存成本', metric: '25%' },
        { text: '自动化客户通知和查询处理，提高60%的客户满意度', metric: '60%' },
      ],
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-background overflow-hidden"
      id="industry-solutions"
    >
      {/* Subtle background */}
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
            <span className="text-2xl">🎯</span>
            <span className="text-primary text-sm font-medium">6大行业</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            行业解决方案
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            针对不同行业的特定需求，提供量身定制的 AI 工作台解决方案
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-12 bg-muted/30 p-2 rounded-xl border">
            {industries.map((industry) => (
              <TabsTrigger
                key={industry.id}
                value={industry.id}
                className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:border-primary/30 transition-all"
              >
                <industry.icon className="h-5 w-5" />
                <span className="text-xs md:text-sm">{industry.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(industryContent).map(([id, content]) => (
            <TabsContent key={id} value={id} className="mt-6">
              <div
                className={`bg-muted/30 rounded-2xl p-8 md:p-10 border border-transparent hover:border-primary/10 transition-all ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {content.title}
                </h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {content.description}
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-4">主要优势：</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {content.keyPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border"
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground leading-relaxed">{point.text}</p>
                        <span className="inline-block mt-2 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {point.metric}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
