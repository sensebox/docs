'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Blocks, Cpu, Code2, Terminal } from 'lucide-react'

const languageConfig = {
  blockly: {
    label: 'Blockly',
    icon: Blocks,
    color: 'text-amber-500',
    bgActive: 'bg-amber-500/10 border-amber-500',
  },
  arduino: {
    label: 'Arduino',
    icon: Cpu,
    color: 'text-teal-500',
    bgActive: 'bg-teal-500/10 border-teal-500',
  },
  python: {
    label: 'Python',
    icon: Code2,
    color: 'text-blue-500',
    bgActive: 'bg-blue-500/10 border-blue-500',
  },
  basic: {
    label: 'Basic',
    icon: Terminal,
    color: 'text-rose-500',
    bgActive: 'bg-rose-500/10 border-rose-500',
  },
}

export function CodeTabs({ examples, title }) {
  const availableLanguages = Object.keys(examples).filter(
    lang => examples[lang],
  )
  const [activeTab, setActiveTab] = useState(availableLanguages[0])

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-card">
      {title && (
        <div className="border-b border-border bg-muted/30 px-4 py-3">
          <h3 className="font-medium text-foreground">{title}</h3>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex gap-1 border-b border-border bg-muted/50 p-2">
        {availableLanguages.map(lang => {
          const config = languageConfig[lang]
          const Icon = config.icon
          const isActive = activeTab === lang

          return (
            <button
              key={lang}
              onClick={() => setActiveTab(lang)}
              className={clsx(
                'flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all',
                isActive
                  ? `${config.bgActive} ${config.color}`
                  : 'border-transparent text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              <Icon className="h-4 w-4" />
              {config.label}
            </button>
          )
        })}
      </div>

      {/* Code Content */}
      <div className="relative">
        <pre className="overflow-x-auto bg-background p-4 font-mono text-sm">
          <code className="text-foreground">{examples[activeTab]}</code>
        </pre>

        {/* Copy Button */}
        <CopyButton text={examples[activeTab] || ''} />
      </div>
    </div>
  )
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute right-3 top-3 rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
    >
      {copied ? 'Kopiert!' : 'Kopieren'}
    </button>
  )
}
