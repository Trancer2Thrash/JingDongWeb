# 优品商城 - 电商首页

一个基于 Vue 3 的现代电商首页项目，采用移动端优先的响应式设计，包含轮播图、分类导航、爆款商品、限时秒杀四大核心模块。

## 项目结构

```
测试/
├── index.html                  # 入口文件，通过 CDN 加载 Vue 3
├── README.md                   # 项目说明文档
└── src/
    ├── App.vue                 # 首页组件（组装所有模块）
    ├── style.css               # 全局样式、CSS 变量、响应式工具类
    ├── components/
    │   ├── BannerCarousel.vue  # 轮播图组件
    │   ├── CategoryNav.vue     # 分类导航组件
    │   ├── HotProducts.vue     # 爆款商品组件
    │   └── FlashSale.vue       # 限时秒杀组件
    └── data/
        └── mockData.js         # 模拟数据（轮播图、分类、商品、秒杀）
```

## 运行方式

### 方式一：直接打开（推荐）

由于项目使用 CDN 加载 Vue 3 和 SFC 编译器，**无需安装任何依赖**，只需：

1. 使用任意本地服务器启动（因为浏览器安全策略限制直接打开 `file://` 协议加载模块）
2. 推荐使用 VS Code 的 **Live Server** 插件，右键 `index.html` → "Open with Live Server"
3. 或使用 Python 内置服务器：
   ```bash
   # 在项目根目录执行
   python -m http.server 8080
   ```
4. 或使用 Node.js 的 `npx serve`：
   ```bash
   npx serve .
   ```
5. 浏览器访问 `http://localhost:8080`

### 方式二：使用 Vite（可选）

如果需要 Vite 开发服务器以获得更好的开发体验：

```bash
# 初始化项目
npm init -y
npm install vue
npm install -D vite @vitejs/plugin-vue

# 创建 vite.config.js
# 然后运行
npx vite
```

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue 3 | 3.x | Composition API + `<script setup>` |
| CSS | 原生 | CSS 自定义属性（变量） |
| 图片 | picsum.photos | 高质量占位图 |
| 构建 | 无（CDN） | 浏览器直接运行，零构建 |

## 样式说明

### 设计系统（CSS 变量）

所有样式基于 `:root` 中定义的 CSS 自定义属性，确保全局一致性：

#### 颜色

| 变量名 | 值 | 用途 |
|--------|-----|------|
| `--color-primary` | `#e4393c` | 主色调（促销红） |
| `--color-primary-dark` | `#c81623` | 主色深色变体 |
| `--color-secondary` | `#ff9900` | 辅助色（橙色） |
| `--color-bg` | `#f5f5f5` | 页面背景 |
| `--color-bg-white` | `#ffffff` | 卡片背景 |
| `--color-text-primary` | `#333333` | 主文字色 |
| `--color-text-secondary` | `#666666` | 次要文字色 |
| `--color-text-muted` | `#999999` | 弱化文字色 |

#### 间距（8px 基准网格）

| 变量名 | 值 |
|--------|-----|
| `--spacing-xs` | 4px |
| `--spacing-sm` | 8px |
| `--spacing-md` | 12px |
| `--spacing-base` | 16px |
| `--spacing-lg` | 20px |
| `--spacing-xl` | 24px |
| `--spacing-2xl` | 32px |

#### 圆角

| 变量名 | 值 |
|--------|-----|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 12px |
| `--radius-xl` | 16px |

#### 阴影

| 变量名 | 用途 |
|--------|------|
| `--shadow-sm` | 卡片默认阴影 |
| `--shadow-md` | 卡片 hover 阴影 |
| `--shadow-lg` | 弹窗/浮层阴影 |

### 响应式断点

| 断点 | 目标设备 |
|------|----------|
| 默认（无媒体查询） | 移动端（375px - 767px） |
| `@media (min-width: 768px)` | 平板（768px - 1199px） |
| `@media (min-width: 1200px)` | PC 桌面（1200px+） |

### 各模块响应式表现

#### 轮播图（BannerCarousel）
- 移动端：全宽无圆角，隐藏箭头按钮，支持触摸滑动
- PC 端：圆角卡片，悬停显示左右箭头

#### 分类导航（CategoryNav）
- 移动端：4 列网格
- PC 端：8 列网格

#### 爆款商品（HotProducts）
- 移动端：2 列网格
- 平板：3 列网格
- PC 端：5 列网格

#### 限时秒杀（FlashSale）
- 移动端：横向滚动列表
- PC 端：6 列网格

## 组件说明

### BannerCarousel
- 自动播放（3 秒间隔），悬停暂停
- 左右箭头切换（PC 端悬停显示）
- 底部指示点切换
- 移动端触摸滑动支持
- 平滑过渡动画（0.4s ease）

### CategoryNav
- 8 个分类图标 + 名称
- 每个分类有独立的主题色
- 悬停上浮 + 图标阴影效果
- 点击缩放反馈

### HotProducts
- 商品卡片包含：图片、名称、价格、原价、标签、销量
- 悬停效果：图片缩放 1.05x、阴影加深、快速查看按钮浮现
- 价格红色突出显示，原价删除线
- 标签颜色根据类型变化（爆款/新品/限时）

### FlashSale
- 红色渐变背景，突出紧迫感
- 实时倒计时（HH:MM:SS），每秒更新
- 组件卸载时自动清理定时器
- 移动端横向滚动，PC 端网格布局
- "立即抢购"按钮带渐变背景

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

需要支持 ES Modules 和 CSS 自定义属性的现代浏览器。

## 许可证

MIT
