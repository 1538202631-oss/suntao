# Login + Home Framework

第一阶段前端静态框架，包含：

- `login.html`：登录页
- `index.html`：首页 / Dashboard
- `assets/css/styles.css`：统一视觉与响应式样式
- `assets/js/app.js`：演示登录状态、退出登录、移动端菜单

## 本地预览

可直接用任意静态服务器启动，例如 VS Code Live Server、Python http.server 等。

> 当前登录逻辑仅用于前端演示：任意非空用户名和密码都可进入首页，登录状态暂存于 localStorage。

## 后续建议

1. 根据原 `src` 页面替换品牌、配色、图标、布局细节。
2. 将演示登录替换为真实 API / Token 鉴权。
3. 抽离公共 Header、Sidebar、Card 等组件（如果后续采用 Vue/React）。
4. 继续补充业务列表页、详情页、权限路由和接口层。
