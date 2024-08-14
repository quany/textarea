import React from 'react'
import { CopilotKit } from '@copilotkit/react-core'
import { CopilotTextarea } from '@copilotkit/react-textarea'

export function iCodingTextArea(props: any) {
  return (
    <CopilotKit runtimeUrl={`https://agent.l0l.ink/api/copilotkit?apiKey=${props.apiKey}`}>
      <CopilotTextarea disableBranding={true} {...props} />
    </CopilotKit>
  )
}
