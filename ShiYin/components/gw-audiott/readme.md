|   参数    |                             说明                             |  类型   | 默认值  | 必须  |
| :-------: | :----------------------------------------------------------: | :-----: | :-----: | :---: |
|    src    |                           音频路径                           | String  |         | true  |
| startTime |                       播放起点，单位s                        | Number  |    0    | false |
| autoplay  |                         是否自动播放                         | Boolean |  false  | false |
|   color   |                          播放器颜色                          | String  | #169af3 | false |
|           |                                                              |         |         |       |
| showText  |                         是否显示文本                         | Boolean |  false  | false |
| rightRole | 显示在右边的对话的role 默认为第一条的role showText=true时生效 | String  |         | false |
|   list    |                 文本集合 showText=true时生效                 |  Array  |         | false |
|  fields   |                 属性映射 showText=true时生效                 | Object  | 见下面  | false |

```
//list 示例
[
    {
    "startTime": 270,
    "endTime": 950,
    "text": "嗯",
    "role": "A",
    },
    {
    "startTime": 1460,
    "endTime": 2080,
    "text": " Hello. ",
    "role": "B"
    },
 ]
//fields 默认值
{
    startTime: 'startTime',
    endTime: 'endTime',
    role: 'role',
    text: 'text'
}
```



## 示例1,不渲染对话

```
<gw-audiott :autoplay="false"  :src="src"/>
```



## 示例2，渲染对话

```
<gw-audiott
			@current="currentProgress"
			@error="error"
			@end="end"
			:autoplay="true" 
			:startTime="1000"
			:src="src"
			:showText="true"
			:list="textList"
			:fields="{text:'detail'}"
			rightRole="B"
			>
		</gw-audiott>
```

示例小程序:

![](https://code-nav.bibilili.online/usr/uploads/2021/06/754521766.png)

qq群提醒我写bug:<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=Ex5_SeVnUpSmvlruxXd9rJ-SvTbt-4n7&jump_from=webapi"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="前端/Java开发交流群" title="前端/Java开发交流群"></a>244974288

[问题咨询](https://code-nav.bibilili.online/vipbuy.html)
