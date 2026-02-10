"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ShoppingCart, Factory, Building, Briefcase, Users, Truck } from "lucide-react"

const industries = [
  { id: "ecommerce", label: "电子商务", icon: ShoppingCart },
  { id: "manufacturing", label: "制造业", icon: Factory },
  { id: "finance", label: "金融服务", icon: Building },
  { id: "professional", label: "专业服务", icon: Briefcase },
  { id: "hr", label: "人力资源", icon: Users },
  { id: "logistics", label: "物流运输", icon: Truck },
]

export function IndustryTabs() {
  const [activeTab, setActiveTab] = useState("ecommerce")

  const industryContent = {
    ecommerce: {
      title: "电子商务AI工作台解决方案",
      description:
        "电商企业面临客户服务、库存管理和订单处理等多方面挑战。我们的AI工作台可以全天候处理客户咨询，自动化订单跟踪，优化库存管理，并提供个性化产品推荐，帮助您提升客户满意度和销售转化率。",
      keyPoints: [
        "24/7全天候客户服务，平均响应时间低于30秒",
        "自动化订单处理和跟踪，减少90%的人工干预",
        "智能库存预测和管理，降低30%的库存成本",
        "个性化产品推荐，提升25%的交叉销售机会",
        "多渠道客户支持整合（网站、社交媒体、即时通讯）",
      ],
    },
    manufacturing: {
      title: "制造业AI工作台解决方案",
      description:
        "制造企业需要优化生产计划、提高设备利用率并确保质量控制。我们的AI工作台可以监控生产线状态，预测设备维护需求，优化生产排程，并协助质量检测流程，帮助您提高生产效率和产品质量。",
      keyPoints: [
        "实时生产监控和异常预警，减少40%的停机时间",
        "预测性维护规划，延长设备寿命并降低20%的维护成本",
        "智能生产排程，提高15%的设备利用率",
        "自动化质量检测报告，减少80%的人工记录时间",
        "供应链优化建议，降低25%的原材料库存成本",
      ],
    },
    finance: {
      title: "金融服务AI工作台解决方案",
      description:
        "金融机构需要处理大量交易、风险评估和客户服务请求。我们的AI工作台可以自动化交易监控，执行风险评估，处理客户查询，并生成合规报告，帮助您提高运营效率和客户满意度。",
      keyPoints: [
        "自动化交易监控和欺诈检测，准确率高达95%",
        "客户查询自动处理，解决70%的常见问题",
        "智能风险评估和信用分析，加快50%的审批流程",
        "自动化合规报告生成，节省80%的报告准备时间",
        "个性化财务建议和产品推荐，提升30%的客户参与度",
      ],
    },
    professional: {
      title: "专业服务AI工作台解决方案",
      description:
        "律师事务所、会计师事务所等专业服务机构需要处理大量文档和客户沟通。我们的AI工作台可以自动化文档审核，安排会议，回答常见问题，并协助研究工作，帮助您提高服务效率和质量。",
      keyPoints: [
        "智能文档审核和分类，节省60%的文档处理时间",
        "自动化会议安排和提醒，减少95%的日程冲突",
        "专业知识库建设和查询，加快40%的研究速度",
        "客户沟通自动化，提高50%的响应速度",
        "智能报告生成，减少70%的报告准备时间",
      ],
    },
    hr: {
      title: "人力资源AI工作台解决方案",
      description:
        "HR部门需要处理招聘、入职、培训和员工服务等多项任务。我们的AI工作台可以自动化简历筛选，协助入职流程，回答员工问题，并生成HR报告，帮助您提高HR效率和员工满意度。",
      keyPoints: [
        "智能简历筛选和候选人匹配，节省70%的初筛时间",
        "自动化入职流程管理，减少80%的文书工作",
        "员工自助服务平台，解决90%的常见HR问题",
        "培训进度跟踪和提醒，提高30%的培训完成率",
        "自动化HR报告和分析，提供数据驱动的人才决策支持",
      ],
    },
    logistics: {
      title: "物流运输AI工作台解决方案",
      description:
        "物流企业需要优化路线规划、跟踪货物和管理仓库。我们的AI工作台可以自动化路线优化，提供实时货物跟踪，优化仓库管理，并处理客户查询，帮助您提高物流效率和客户满意度。",
      keyPoints: [
        "智能路线规划和优化，减少20%的运输成本",
        "实时货物跟踪和状态更新，提高95%的可视性",
        "自动化仓库管理和库存优化，提高30%的空间利用率",
        "预测性需求分析，减少25%的库存成本",
        "自动化客户通知和查询处理，提高60%的客户满意度",
      ],
    },
  }

  return (
    <section className="py-20" id="industry-solutions">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">行业解决方案</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            我们针对不同行业的特定需求，提供量身定制的AI工作台解决方案
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
            {industries.map((industry) => (
              <TabsTrigger
                key={industry.id}
                value={industry.id}
                className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <industry.icon className="h-5 w-5" />
                <span>{industry.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(industryContent).map(([id, content]) => (
            <TabsContent key={id} value={id} className="mt-6">
              <div className="bg-background rounded-lg p-8 shadow-sm border">
                <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
                <p className="text-muted-foreground mb-6">{content.description}</p>

                <h4 className="text-lg font-semibold mb-3">主要优势：</h4>
                <ul className="space-y-2 mb-6">
                  {content.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
