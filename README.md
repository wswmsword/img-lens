# img-lens

<a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu" align="right"></a>

React 图片放大镜组件，当鼠标悬浮于图片上后，出现圆形放大区域。React image magnifier with circular zoom on hover.

> 放大镜元素添加了 `aria-hidden`，不影响屏幕阅读器导航。

安装：`npm i img-lens`

属性：
- src，string，图片路径
- size，number，放大镜尺寸（px）
- scale，number，放大倍率
- lensProps，`{ [prop:string]: string }`，放大镜元素的属性对象

下面是使用方法，完整例子请查看[范例文件价](./examples/breeze/src/App.jsx)：

```javascript
import ImgLens from "img-lens";
function Z() {
  return <ImgLens
    style={{ width: "357px" }}
    size="180"
    scale="2.6"
    src="https://seaside-station.com/wpbin/wp-content/uploads/esumi_04.jpg" />
}
```

点亮星星、提出问题、请求合并来推动这个项目！

<details>
<summary>展开查看用于微信支付和支付宝支付的二维码。</summary>

您可以支付该项目，支付金额由您从该项目中获得的收益自行决定。

<table>
  <tr align="center">
    <td>微信支付</td>
    <td>支付宝支付</td>
  </tr>
	<tr>
		<td><img src="https://github.com/wswmsword/hanav/raw/main/images/wechat-pay.png" alt="Pay through WeChat" /></td>
		<td><img src="https://github.com/wswmsword/hanav/raw/main/images/ali-pay.jpg" alt="Pay through AliPay" /></td>
	</tr>
</table>

</details>

[Demo](http://wswmsword.github.io/examples/img-lens) • [更新日志](./CHANGELOG.md) • [语义化版本 2.0.0](https://semver.org/lang/zh-CN/) • [MIT License](./LICENSE)