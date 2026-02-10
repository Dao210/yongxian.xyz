"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export function ConsultationSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    employeeSize: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, employeeSize: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 模拟API调用
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <section className="bg-primary/5 py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">预约业务咨询</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              通过微信联系我们的专家，支付299元即可获得30分钟的专业业务咨询
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-background rounded-lg p-8 shadow-sm border text-center">
              <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">谢谢您！</h3>
              <p className="text-muted-foreground mb-6">
                我们已收到您的咨询请求。请添加我们的客服微信，完成299元支付后，我们将在24小时内联系您安排咨询时间。
              </p>
              <div className="flex justify-center mb-6">
                <div className="relative h-48 w-48 overflow-hidden">
                  <Image
                    src="/images/wechat-qrcode.jpg"
                    alt="客服微信二维码"
                    fill
                    sizes="192px"
                    className="object-contain"
                  />
                </div>
              </div>
              <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                提交另一个请求
              </Button>
            </div>
          ) : (
            <div className="bg-background rounded-lg p-8 shadow-sm border">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">咨询流程</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white font-medium text-sm">
                        1
                      </div>
                      <div>
                        <p className="font-medium">填写咨询需求</p>
                        <p className="text-sm text-muted-foreground">提交您的业务信息和咨询需求</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white font-medium text-sm">
                        2
                      </div>
                      <div>
                        <p className="font-medium">添加客服微信</p>
                        <p className="text-sm text-muted-foreground">扫描二维码添加我们的客服微信</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white font-medium text-sm">
                        3
                      </div>
                      <div>
                        <p className="font-medium">支付咨询费用</p>
                        <p className="text-sm text-muted-foreground">支付299元获得30分钟专业业务咨询</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white font-medium text-sm">
                        4
                      </div>
                      <div>
                        <p className="font-medium">安排咨询时间</p>
                        <p className="text-sm text-muted-foreground">我们将与您确认具体的咨询时间</p>
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
                      <Select value={formState.employeeSize} onValueChange={handleSelectChange} required>
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
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "提交中..." : "提交咨询需求"}
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">提交后，您将收到添加微信和支付指引</p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
