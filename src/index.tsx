import { CopilotKit } from '@copilotkit/react-core'
import type { CopilotTextareaProps, HTMLCopilotTextAreaElement } from '@copilotkit/react-textarea'
import { CopilotTextarea } from '@copilotkit/react-textarea'
import React from 'react'

export interface TextareaProps extends Omit<CopilotTextareaProps, 'copilotTextareaConfig'> {
  apiKey: string
}

export const Textarea = React.forwardRef((props: TextareaProps, ref: React.Ref<HTMLCopilotTextAreaElement>) => {
  return (
    <CopilotKit runtimeUrl={`https://agent.l0l.ink/api/copilotkit?key=${props.apiKey}`}>
      <CopilotTextarea ref={ref} disableBranding={true} {...props} />
    </CopilotKit>
  )
})

