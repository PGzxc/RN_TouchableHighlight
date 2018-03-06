# React Native 组件TouchableHighlight

# 前言 
TouchableHighlight，包装要显示的视图，点击时可用于高亮显示，React Native 0.36版本以前用于替代Button，类似于Android中的Button，React Native 0.37开始出现Button按钮。  

本文主要讲述TouchableHighlight的使用及其几个属性的用法：  

- underlayColor
- activeOpacity
- onHideUnderlay
- onShowUnderlay

<!--more-->


# TouchableHighlight

## 属性介绍 

### underlayColor
#### underlayColor属性
点击时，显示的颜色  
#### 代码 
![][1]
#### 效果
![][2] 
### activeOpacity
#### activeOpacity
用于显示透明度，0-完全透明，1-完全不透明
#### 代码
![][3]
#### 效果 
![][4] 
### onHideUnderlay
#### onHideUnderlay 概念 
当图层颜色隐藏时，调用此方法 
#### 代码 
![][5]
#### 效果
![][6]
### onShowUnderlay
用法同上onHideUnderlay

# 其他 
参考：[RN_TouchableHighlight][7]    




[1]: http://p4ykqh02p.bkt.clouddn.com/rn-touchable-underlinecolor-code.png
[2]: http://p4ykqh02p.bkt.clouddn.com/rn-touchable-underlinecolor.gif
[3]: http://p4ykqh02p.bkt.clouddn.com/rn-touchable-activeopacity-code.png
[4]: http://p4ykqh02p.bkt.clouddn.com/rn-touchable-activeopacity-code.gif
[5]: http://p4ykqh02p.bkt.clouddn.com/rn-touchable-onhideunderlay-code.png
[6]: http://p4ykqh02p.bkt.clouddn.com/rn-touchable-onhideunderlay-code.png
[7]: https://github.com/PGzxc/RN_TouchableHighlight
