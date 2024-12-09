This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## React Compiler repl
https://zh-hans.react.dev/learn/react-compiler

主要通过 babel-plugin-react-compiler 和 eslint-plugin-react-compiler 进行使用

使用react compiler 后效果等同于自动为你的代码进行“记忆化”处理，像是使用useMemo,useCallback的效果

目前主要专注于改善更新性能（重新渲染现有组件），主要有两种用例：
1. 跳过组件的级联重新渲染
重新渲染 <Parent /> 会导致其组件树中的许多组件重新渲染，即使只有 <Parent /> 发生了变化
2. 从 React 外部跳过昂贵计算
例如，在需要该数据的组件或钩子内部调用 expensivelyProcessAReallyLargeArrayOfObjects()

