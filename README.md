# Argusweb
[![Build Status](https://www.travis-ci.org/TyrSnow/argus_web.svg?branch=develop)](https://www.travis-ci.org/TyrSnow/argus_web) [![codecov](https://codecov.io/gh/TyrSnow/argus_web/branch/develop/graph/badge.svg)](https://codecov.io/gh/TyrSnow/argus_web)
计算结果的对外展示页面。

# 1. 词汇
### 用户
特指普通用户，无法对系统的节点、算法等进行配置。
### 注册用户
在本系统注册了账号，并进行了登陆行为的普通用户。
### 管理员
特指本人，或其他被授权的允许维护系统的人员。
### 算法
根据股票历史行情数据，计算某支股票的投资价值。
### 节点
负责根据算法进行计算的服务器，一台服务器上可以负责多个算法的计算（此概念与普通用户无关）。
### 分组
为方便对算法进行检索，可以将算法放入到某个特定的分组中，分组的维护将由管理员完成。
### 关注
注册用户认可或在意某个算法的结果，而对其进行特殊关注的行为。
### 排队
服务器负载达到管理员设置的上限后，用户需要进行排队使用本系统。

# 2. 功能点

## 2.1 用户
### 2.1.1 浏览展示功能
#### 2.1.1.1 算法展示
##### 2.1.1.1.1 列表展示
##### 2.1.1.1.2 详情展示
#### 2.1.1.2 股票展示
##### 2.1.1.2.1 列表展示
##### 2.1.1.2.2 详情展示
#### 2.1.1.3 资料库
##### 2.1.1.3.1 列表展示

## 2.2 注册用户
注册用户可以使用用户所能使用的功能点。
### 2.2.1 登陆注册功能
#### 2.2.1.1 登陆
前期允许使用用户名密码进行登陆，后期开放github账户的绑定登陆。
#### 2.2.1.2 注册
用户提供邮箱、密码、用户名进行注册，后期需要对邮箱进行验真。
### 2.2.2 收藏功能
#### 2.2.2.1 算法收藏
#### 2.2.2.2 股票收藏
### 2.2.3 自定义算法

## 2.3 管理员
管理员可以使用注册用户所能使用的功能点。
### 2.3.1 节点管理
#### 2.3.1.1 创建节点
#### 2.3.1.2 编辑节点
#### 2.3.1.3 删除节点
### 2.3.2 算法管理
#### 2.3.2.1 创建算法
#### 2.3.2.2 分配节点
#### 2.3.2.3 删除算法
### 2.3.3 资料管理
#### 2.3.3.1 管理标签
#### 2.3.3.2 创建文章
#### 2.3.3.3 编辑文章
#### 2.3.3.4 置顶文章
### 2.3.4 用户管理
#### 2.3.4.1 查看用户列表
#### 2.3.4.2 管理用户