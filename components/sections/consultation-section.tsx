'use client';

import type React from 'react';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

export function ConsultationSection() {
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
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    employeeSize: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, employeeSize: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟API调用
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section ref={sectionRef} className="relative py-24 bg-muted/30 overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_70%)]" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              <span className="text-2xl">💼</span>
              <span className="text-primary text-sm font-medium">预约咨询</span>
            </div>
            <h2
              className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              预约业务咨询
            </h2>
          </div>

          {isSubmitted ? (
            <div
              className={`bg-background/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-border hover:border-primary/30 transition-all duration-500 text-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="mb-6 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-cyan-500/10 text-primary shadow-sm">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="font-['ZCOOL_XiaoWei'] text-2xl md:text-3xl text-foreground mb-4">
                谢谢您！
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                我们已收到您的咨询请求。请添加我们的客服微信，我们将在24小时内联系您安排咨询时间。
              </p>
              <div className="flex justify-center mb-8">
                <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-border shadow-lg">
                  <Image
                    src="/qrcode_for_gh_1b20a9c960a6_258.jpg"
                    alt="客服微信二维码"
                    fill
                    sizes="224px"
                    className="object-contain"
                  />
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 transition-all"
              >
                提交另一个请求
              </Button>
            </div>
          ) : (
            <div
              className={`bg-background/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-border hover:border-primary/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h3 className="font-['ZCOOL_XiaoWei'] text-xl md:text-2xl text-foreground mb-6">
                    咨询流程
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-white font-medium text-sm shadow-sm">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-foreground">填写咨询需求</p>
                        <p className="text-sm text-muted-foreground">提交您的业务信息和咨询需求</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-white font-medium text-sm shadow-sm">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-foreground">添加客服微信</p>
                        <p className="text-sm text-muted-foreground">
                          扫描二维码添加我们的客服微信
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-white font-medium text-sm shadow-sm">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-foreground">安排咨询时间</p>
                        <p className="text-sm text-muted-foreground">
                          我们将与您确认具体的咨询时间，提供30分钟专业业务咨询
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="张三"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">电子邮箱</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="zhangsan@company.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">公司名称</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="您的公司"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employeeSize">公司规模</Label>
                      <Select
                        value={formState.employeeSize}
                        onValueChange={handleSelectChange}
                        required
                      >
                        <SelectTrigger id="employeeSize">
                          <SelectValue placeholder="选择公司规模" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10名员工</SelectItem>
                          <SelectItem value="11-50">11-50名员工</SelectItem>
                          <SelectItem value="51-200">51-200名员工</SelectItem>
                          <SelectItem value="201-500">201-500名员工</SelectItem>
                          <SelectItem value="501+">501+名员工</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">您需要什么帮助？</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="请告诉我们您的业务需求和挑战..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? '提交中...' : '提交咨询需求'}
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      提交后，您将收到添加微信的指引
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.08;
            transform: scale(1);
          }
          50% {
            opacity: 0.12;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
