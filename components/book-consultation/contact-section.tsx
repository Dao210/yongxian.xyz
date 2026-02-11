'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 bg-muted/30">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[200px]" />
        </div>
      </div>

      <div className="container relative z-10">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Icon */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
              <span className="text-5xl">💬</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-center">
            扫码添加微信
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-purple-500">
              {' '}
              立即预约
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto leading-relaxed">
            扫描下方二维码添加顾问微信，简单说明您的需求，我们将尽快与您确认预约时间
          </p>

          {/* QR Code Card */}
          <div className="bg-background/80 backdrop-blur-sm rounded-3xl border border-border shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* QR Code */}
              <div className="flex-1 p-8 flex items-center justify-center bg-gradient-to-br from-primary/5 to-cyan-500/5">
                <div className="relative">
                  {/* Decorative corners */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-primary/30 rounded-tl-lg" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-primary/30 rounded-tr-lg" />
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-primary/30 rounded-bl-lg" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-primary/30 rounded-br-lg" />

                  {/* QR Code */}
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                    <Image
                      src="/qrcode_for_gh_1b20a9c960a6_258.jpg"
                      alt="微信公众号二维码"
                      width={200}
                      height={200}
                      className="w-48 h-48 md:w-56 md:h-56"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-6">联系信息</h3>

                <div className="space-y-6">
                  {/* WeChat */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z" />
                      </svg>
                      <span className="text-sm font-medium text-muted-foreground">微信公众号</span>
                    </div>
                    <p className="text-foreground font-semibold">涌现 AI 工作台</p>
                  </div>

                  {/* Process hint */}
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary font-medium">扫码提示：</span>
                      添加微信后请发送
                      <span className="text-foreground font-medium">"预约咨询"</span>
                      ，我们的顾问会在 24 小时内与您联系。
                    </p>
                  </div>

                  {/* Available time */}
                  <div className="flex items-start gap-3 pt-4">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-foreground">服务时间</p>
                      <p className="text-sm text-muted-foreground">工作日 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom notice */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              如有紧急需求，也可直接发送邮件至
              <a
                href="mailto:hello@yongxian.xyz"
                className="text-primary font-medium hover:underline ml-1"
              >
                hello@yongxian.xyz
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
