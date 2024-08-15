import { CopilotKit } from '@copilotkit/react-core'
import { CopilotTextarea } from '@copilotkit/react-textarea'
import React from 'react'

export function iCodingTextArea(props: any) {
  return (
    <CopilotKit runtimeUrl={`https://agent.l0l.ink/api/copilotkit?key=${props.apiKey}`}>
      <CopilotTextarea disableBranding={true} {...props} />
    </CopilotKit>
  )
}
