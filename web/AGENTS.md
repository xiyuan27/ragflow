此项目是著名开源项目ragflow的前端：

项目根目录为“web”，使用 **Umi 4** 框架（基于 React），采用 **TypeScript** 编写，目录结构包含典型的前端源代码目录和配置，例如：`src/`（源码）、`public/`（静态资源）、配置文件（如 `.umirc.ts`、`tsconfig.json`、`.eslintrc.js` 等）以及样式相关文件（如 `tailwind.config.js`、`tailwind.css`）。在 `src/` 下有子目录：`components`（通用组件）、`pages`（业务页面）、`layouts`（布局）、`services`（API 服务）、`utils`（工具函数）、`hooks`（自定义React Hook）、`constants`（常量）、`assets`（资源文件）、`locales`（本地化文件）等。这表明**该项目是一个使用 Ant Design Pro 技术栈的 React 管理系统**，包含国际化、本地存储、布局框架等通用模块。

**主要开发语言**：TypeScript/TSX（React JSX+TS），以及少量Less和Tailwind CSS用于样式。

**主要依赖**（根据 `package.json`）：

* **UI框架**：Ant Design 系列（如 `@ant-design/pro-components`，`@ant-design/pro-layout`）以及 Ant Design 图标库。这意味着界面大量使用 Ant Design 提供的组件和布局。
* **可视化库**：AntV 图表库 G2/G6（用于图表和流程图），这些库是框架无关的，可在 Vue 项目中继续使用。
* **表单与验证**：React Hook Form 相关（`@hookform/resolvers`），React 体系特有，在 Vue 需寻找替代方案。
* **富文本/编辑器**：Facebook Lexical 富文本（`@lexical/react`）和 Monaco 编辑器（`@monaco-editor/react`）等。这些都是 React 实现，需要换用 Vue 兼容的富文本编辑器组件（例如 TipTap、Quill 等）和 Monaco 的Vue包装。
* **基础工具库**：包含 Lodash、UUID 等工具类型库（通过类型声明可见），可直接在新项目复用。
* **React基础**：Umi 框架自身和 React 相关依赖（如 `umi`、`umi-request` 请求库）。React、React-DOM本身可能由 Umi 间接依赖管理，因此未直接列出。状态管理方面未显式看到 Redux 等，但有 `@redux-devtools/extension` 用于调试，推测**原项目使用了 Umi 提供的 model 插件或 Zustand 等进行状态管理**。

项目结构如下

web/  

.husky/          \# git hooks    

public/              # 公共静态资源 

​     pdfjs-dist 这个下面是预览pdf相关的脚本

src/   

​     app.tsx # 入口文件   

​     routes.ts  # 路由定义    

​     assets/            # 图片/静态资源    

​     components/        # 组件库    

​     constants/         # 常量    

​     hooks/             # React hooks   

​      interfaces/        # TypeScript 接口    

​     layouts/           # 布局相关    

​     less/              # 样式   

​      lib/               # 工具库    

​     locales/           # 多语言    

​     pages/             # 页面级组件    

​     services/          # API服务    

​     theme/             # 主题    

​     utils/             # 工具函数    

​     wrappers/      # 包装组件（高阶组件）