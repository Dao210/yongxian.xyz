import Link from "next/link"

// 修改导航项，移除价格和资源链接
const navItems = [
  { name: "解决方案", href: "/solutions" },
  { name: "关于我们", href: "/about" },
]

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
