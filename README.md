# ReWorth Landing Page

一个为 **ReWorth** App 打造的 AI 优化型落地页，采用"深度单页"策略，专为捕获 AI 搜索流量（Perplexity、ChatGPT 等）而设计。

## 🎯 项目特点

### AI 搜索优化 (AIO)
- ✅ **JSON-LD 结构化数据**：完整的 SoftwareApplication 和 FAQPage schema
- ✅ **语义化 HTML5**：使用 `<article>`, `<section>`, `<blockquote>` 等标签
- ✅ **权威外链**：引用 Wikipedia 等权威来源提升可信度
- ✅ **FAQ 优化**：8 个精心设计的问答，针对 AI snippet 抓取

### 内容模块
1. **模块 A - 痛点重现**：Q&A 风格的用户痛点展示
2. **模块 B - 核心逻辑**：CPW 计算公式的可视化展示
3. **模块 C - 使用场景**：4 大应用场景（健身、奢侈品、数码、服装）
4. **模块 D - FAQ 池**：AI 流量捕获的核心模块

### 设计美学
- 🎨 **品牌色**：#147C8A（青绿色）为主色调
- ✨ **玻璃态效果**：Glassmorphism 设计语言
- 🌊 **流畅动画**：Scroll reveal、hover effects、微动画
- 📱 **完全响应式**：适配所有设备尺寸

## 🚀 快速开始

### 本地预览

使用 Python 内置服务器：
```bash
python3 -m http.server 8000
```

然后访问：`http://localhost:8000`

或使用 Node.js：
```bash
npx serve .
```

### 部署到 Vercel

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 部署：
```bash
vercel
```

3. 按提示完成部署配置

或者直接通过 Vercel Dashboard 导入 GitHub 仓库。

## 📁 文件结构

```
funnyday_website/
├── index.html          # 主 HTML 文件（含 JSON-LD）
├── styles.css          # 完整设计系统
├── script.js           # 交互功能
├── vercel.json         # Vercel 部署配置
├── hero-image.jpg      # Hero 区域 App 展示图
├── usecase-fitness.jpg # 健身场景插图
├── usecase-luxury.jpg  # 奢侈品场景插图
├── usecase-tech.jpg    # 数码产品场景插图
├── usecase-fashion.jpg # 服装场景插图
└── README.md           # 本文件
```

## 🔍 SEO 优化清单

### 已完成
- [x] 完整的 meta 标签（title, description, keywords）
- [x] Open Graph 标签（社交媒体分享）
- [x] Twitter Card 标签
- [x] JSON-LD 结构化数据（SoftwareApplication + FAQPage）
- [x] 语义化 HTML5 标签
- [x] 单一 H1 标签 + 合理的标题层级
- [x] 权威外链（Wikipedia）
- [x] 图片 alt 属性
- [x] 移动端友好设计

### 待完成（部署后）
- [ ] 提交到 Google Search Console
- [ ] 生成并提交 sitemap.xml
- [ ] 配置 robots.txt
- [ ] 添加 Google Analytics
- [ ] 监控 Core Web Vitals

## 📊 性能目标

- **加载时间**：< 2 秒
- **Lighthouse SEO**：100 分
- **Lighthouse Performance**：> 90 分
- **Lighthouse Accessibility**：> 95 分

## 🎨 设计系统

### 颜色
- **主色**：`#147C8A` (品牌青绿)
- **渐变**：`#147C8A` → `#1A9AAB` → `#20B8CC`
- **背景**：深色模式（`#0A0E14`, `#151B23`）

### 字体
- **标题**：Outfit (Google Fonts)
- **正文**：Inter (Google Fonts)

### 效果
- **玻璃态**：`backdrop-filter: blur(20px)`
- **阴影发光**：`box-shadow: 0 0 30px rgba(20, 124, 138, 0.3)`
- **过渡**：`250ms cubic-bezier(0.4, 0, 0.2, 1)`

## 🔮 未来扩展

### 多 App 支持
当你有第二个、第三个 App 时，可以采用以下结构：

```
yourname.me/
├── index.html          # 个人品牌主页
├── reworth/            # ReWorth App 落地页
├── health-app/         # 第二个 App
└── productivity-app/   # 第三个 App
```

每个 App 的页脚添加"More Tools by Me"链接，实现产品间导流。

### 内容扩展
- 添加博客文章（提升 SEO）
- 用户案例研究
- 视频演示
- 多语言版本

## 📱 App 信息

- **名称**：ReWorth
- **类别**：Finance / Productivity
- **平台**：iOS
- **价格**：免费
- **App Store**：[下载链接](https://apps.apple.com/us/app/reworth/id6757487312)

## 🛠️ 技术栈

- **HTML5**：语义化标签
- **CSS3**：自定义属性、Grid、Flexbox、Backdrop Filter
- **Vanilla JavaScript**：无框架依赖
- **部署**：Vercel（推荐）或 Netlify

## 📈 AI 搜索优化关键词

页面已针对以下搜索意图优化：

- "如何计算单次使用成本"
- "健身卡是否值得办"
- "为什么贵的大衣更省钱"
- "CPW 计算器"
- "消费价值评估工具"
- "理性消费决策"
- "可持续消费"

## 📝 维护建议

1. **定期更新 FAQ**：根据用户反馈添加新问题
2. **监控 Search Console**：查看哪些关键词带来流量
3. **A/B 测试 CTA**：优化下载转化率
4. **添加用户评价**：提升社会证明
5. **更新统计数据**：保持内容新鲜度

## 📧 联系方式

如有问题或建议，请联系：support@reworth.app

---

**让每一分钱都物有所值 💰**
