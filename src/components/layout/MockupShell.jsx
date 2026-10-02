import { MockupFooter } from './MockupFooter'
import { MockupHeader } from './MockupHeader'

export function MockupShell({ mockup, children }) {
  const themeStyle = {
    '--theme-primary': mockup.theme.primary,
    '--theme-accent': mockup.theme.accent,
    '--theme-background': mockup.theme.background,
    '--theme-surface': mockup.theme.surface,
    '--theme-muted': mockup.theme.muted,
  }

  return (
    <div className="preview-shell" style={themeStyle}>
      <div className="mockup-banner">
        Mockup inicial preparado por Kafka. Esta vista es una propuesta visual, no una version
        final.
      </div>
      <MockupHeader mockup={mockup} />
      <main>{children}</main>
      <MockupFooter mockup={mockup} />
    </div>
  )
}
