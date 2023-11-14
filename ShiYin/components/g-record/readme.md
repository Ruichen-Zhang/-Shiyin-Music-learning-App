|    参数     |       说明       |  类型  |      默认值      | 必须  |
| :---------: | :--------------: | :----: | :--------------: | :---: |
|   maxTime   | 设置最大录音时长 | Number | 600000，单位毫秒 | true  |
| maxTimeTips |   录音时长提示   | String |                  | false |



## 示例

```
<view>
		<g-record
		@begin="recordBegin"
		@cancel="recordCancel"
		@end="recordEnd"
		:maxTime="1000*60*60*10"
		maxTimeTips="Tips:最大录音时长10小时"
		style="height: 100vh;width:100vw;display: flex;">
		</g-record>
	</view>
```


示例小程序:

![](https://code-nav.bibilili.online/usr/uploads/2021/06/429228321.png)

qq群提醒我写bug:<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=Ex5_SeVnUpSmvlruxXd9rJ-SvTbt-4n7&jump_from=webapi"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="前端/Java开发交流群" title="前端/Java开发交流群"></a>244974288

[问题咨询](https://code-nav.bibilili.online/vipbuy.html)
