![智能富文本组件](https://aifix.oss-cn-beijing.aliyuncs.com/static/temp/img/icoding_textarear.gif)

# 智能富文本组件

> 为富文本组件提供智能提示功能,增强用户输入体验;关注公众号,随意打赏该[文章](https://mp.weixin.qq.com/s/vW7Ntk4H3oBi-S3zQFptIA)即可获得API Key.

![微信公众号](https://aifix.oss-cn-beijing.aliyuncs.com/static/temp/img/public_weixin.png?x-oss-process=image/resize,h_100,m_lfit)

## 安装

可以通过 npm 或 yarn 安装此组件：

```zsh
npm install @icoding/textarea --save
```

或者

```zsh
yarn add @icoding/textarea
```

## 使用

下面是一个简单的示例，展示了如何在 React 应用中使用此组件：

```jsx
import React, { useState } from "react";
import { Textarea } from "@icoding/textarea";

function EmailContent() {
    const [content, setContent] = useState("");
    return (
        <Textarea
            className="custom-textarea-class"
            apiKey="关注公众号:A1C0ding，随意打赏即可获得API Key"
            value={content}
            onValueChange={(value: string) => setContent(value)}
            placeholder="请输入您的内容"
            autosuggestionsConfig={{
              textareaPurpose: "这里面的内容是回复邮件的内容",
              chatApiConfigs: {},
            }}
        />
    );
}
```

### 配置项

* __apiKey__ *(String)* - 组件的API Key，智能提示功能需要配置，关注公众号,随意打赏该[文章](https://mp.weixin.qq.com/s/vW7Ntk4H3oBi-S3zQFptIA)即可获得API Key

* __autosuggestionsConfig__ *(必选项)* - 提示配置项目.

    配置项目有以下:

  * __textareaPurpose__ *(String)* -  textarea 用途提示.

  * __chatApiConfigs__ *(Object)* - 对接Chat API 配置.

## 统计

![Alt](https://repobeats.axiom.co/api/embed/bfaa169ca2ffcad702bdc2f450e122f87f1baf79.svg "Repobeats analytics image")

## 成员

> 欢迎加入我们！

<a href="https://github.com/quany/textarea/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=quany/textarea" />
</a>